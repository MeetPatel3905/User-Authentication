import { useState } from 'react'
import { requestPasswordReset } from '../services/authService'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await requestPasswordReset(email)
    setMsg(res.message)
  }

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Send Reset Link</button>
      </form>
      <p>{msg}</p>
    </div>
  )
}

export default ForgotPassword
