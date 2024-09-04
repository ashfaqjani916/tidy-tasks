import axios from 'axios'
import { Button } from '../components/ui/button'
import { useState, useEffect, } from 'react'
import { FaGoogle } from 'react-icons/fa'
// import { Meteors } from '../components/ui/meteors'


import useAuth from '../hooks/useAuth'
// import { useNavigate, Link, useLocation } from 'react-router-dom'


interface SendCredsResponse {
  access_token: any;
  refresh_token: any;
  jwt_token: any;
}


// const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// };

const backend_url = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  const [error, setError] = useState<string | null>(null)
  const { setUser } = useAuth();
  // const navigate = useNavigate();
  // const location = useLocation();

  // const from = location.state?.from?.pathname || '/';

  console.log(error)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const error = params.get('error')

    if (error) {
      setError(decodeURIComponent(error))
    }

    window.history.replaceState({}, '', window.location.pathname)
  }, [])

  const handleGoogleLogin = async () => {

    console.log("the handle function is called")

    const params = new URLSearchParams({
      client_id: import.meta.env.VITE_CLIENT_ID as string,
      redirect_uri: import.meta.env.VITE_REDIRECT_URI as string,
      response_type: 'code',
      scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.email ',
      state: new URLSearchParams({
        redirect_uri: import.meta.env.VITE_REDIRECT_URI as string,
      }).toString(),
    })

    const response = await axios.get(`${backend_url}/api/getcreds`);

    const userData: SendCredsResponse = response.data;

    setUser(userData);

    document.cookie = `accessToken=${userData.access_token}; refreshToken=${userData.refresh_token}; jwtToken=${userData.jwt_token};HttpOnly`;

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`


  }

  return (
    <div className="flex h-screen w-screen  bg-contain justify-between " style={{ backgroundImage: "url('/bg.jpeg')" }}>
      <div className="w-3/5 h-full flex items-center flex-c</div>ol justify-center ">
        <div className="h-[400px]  w-[300px] rounded-2xl bg</div>-[#FFFFF0] shadow-xl  flex items-center flex-col justify-between p-5 py-20 ">
          <img className="h-[120px] w-[120px]" src="/logo.png" />
          <h1 className=" text-4xl font-handlee">Login</h1>
          <Button onClick={handleGoogleLogin} className="bg-[#4D89AD] h-12 font-bold flex items-center gap-4">
            <FaGoogle />
            Continue with Google
            {/* <Meteors number={40} /> */}
          </Button>
        </div>
      </div>
      <div className="h-full  w-2/5 rounded-2xl bg-[#FFFFF0]">
        <div className="flex flex-col justify-center items-center  p-10">
          <h1 className=" font-bold text-[50px]  font-handlee text-[#4D89AD] pt-32 ">Welcome to TaskTide</h1>
          <p className="font-semibold text-[#324d5e] pt-12 pb-20 font-handlee text-2xl">
            Ditch the guesswork and reclaim your time. Work smarter, not harder, with a personalized schedule that fits your workflow, AI automation, and maximized productivity. Your workflow,
            perfectly timed.
          </p>
          <p className=" font-thin font-mono text-sm pt-80">By continuing, you are indicating that you accept our Terms of Service and Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login

