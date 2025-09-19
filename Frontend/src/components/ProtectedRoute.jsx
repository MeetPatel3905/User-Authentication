import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { getUser } from '../services/authService'

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true)
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    getUser().then((res) => {
      if (res.success) setAuthorized(true)
      else setAuthorized(false)
      setLoading(false)
    })
  }, [])

  if (loading) return <p>Loading...</p>
  if (!authorized) return <Navigate to="/login" />
  return children
}

export default ProtectedRoute
