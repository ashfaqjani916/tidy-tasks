import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const RequireAuth = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Extract token from URL if present
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get('token');

    if (token) {
      // Set token in local storage with a 1-day expiry
      const expiry = Date.now() + 24 * 60 * 60 * 1000; // 1 day in milliseconds
      localStorage.setItem('authToken', JSON.stringify({ token, expiry }));
      setIsAuthenticated(true); // Set authentication status
    } else {
      // Retrieve token data from local storage
      const storedData = localStorage.getItem('authToken');
      if (storedData) {
        const { token: storedToken, expiry } = JSON.parse(storedData);

        // Check if token has expired
        if (storedToken && Date.now() < expiry) {
          setIsAuthenticated(true);
        } else {
          // Clear expired token
          localStorage.removeItem('authToken');
        }
      }
    }

    setIsLoading(false); // Loading complete
  }, [location.search]);

  if (isLoading) {
    return null; // Optionally, show a loading spinner here
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
