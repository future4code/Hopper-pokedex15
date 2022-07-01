import { useNavigate } from 'react-router-dom'

// Página de Erro

const Error = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1 onClick={() => navigate('/')}>Página não encontrada</h1>
    </>
  )
}

export default Error
