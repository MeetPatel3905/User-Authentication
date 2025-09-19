import { useEffect, useState } from 'react'
import { getUser, logout } from '../services/authService'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getUser().then((res) => {
      if (res.success) setUser(res.user)
    })
  }, [])

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {user && <p>Welcome, {user.name} ({user.email})</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
