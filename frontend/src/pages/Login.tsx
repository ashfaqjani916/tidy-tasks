import { Button } from '../components/ui/button'
import { useState, useEffect } from 'react'
import 'dotenv/config'

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
      client_id: '',
      redirect_uri: '',
      response_type: 'code',
      scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.email ',
      state: new URLSearchParams({
        redirect_uri: '',
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
