import { useState } from "react"

export const Login = () => {

  const [email] = useState('')
  const [password] = useState('')

  const handleLogin = () => {

  }

  return(
    <div>
      <h2>Página para assinantes</h2>

      <input
        type="text"
        value={email}
        placeholder="Digite o seu e-mail"
      />
      <input
        type="text"
        value={password}
        placeholder="Digite a sua senha"
      />
      <button onClick={handleLogin}>Logar</button>
    </div>
  )
}