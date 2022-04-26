import { NavLink } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
    <div className='h-screen text-center mt-24'>
      <span className='text-7xl mr-10'>404</span>
    <NavLink to='/' className='text-2xl underline decoration-1'>Retour à l'accueil</NavLink>
    </div>
    </>
  )
}

export default NotFound;