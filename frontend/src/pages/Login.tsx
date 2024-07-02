import { Button } from '../components/ui/button'
import { useState, useEffect } from 'react'

const Login = () => {
  const [error, setError] = useState<string | null>(null)
  console.log(error)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const error = params.get('error')

    if (error) {
      setError(decodeURIComponent(error))
    }

    window.history.replaceState({}, '', window.location.pathname)
  }, [])
  const handleGoogleLogin = () => {
    const params = new URLSearchParams({
      client_id: '396362726266-ko91smlcg079d2edpopq88l9i5c0os0j.apps.googleusercontent.com',
      redirect_uri: 'http://localhost:8000/api/auth/callback/google',
      response_type: 'code',
      scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.email ',
      state: new URLSearchParams({
        redirect_uri: 'http://localhost:8000/api/auth/callback/google',
      }).toString(),
    })
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`
  }

  return (
    <div>
      <Button onClick={handleGoogleLogin}>login</Button>
    </div>
  )
}

export default Login
