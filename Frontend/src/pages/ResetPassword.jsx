import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { resetPassword } from '../services/authService'

function ResetPassword() {
  const { token } = useParams()
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await resetPassword(token, password)
    setMsg(res.message)
  }

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Reset</button>
      </form>
      <p>{msg}</p>
    </div>
  )
}

export default ResetPassword
