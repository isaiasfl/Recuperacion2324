import { Outlet } from 'react-router-dom'
import Header from './Header'

const RootPage = () => {
  return (
    <>
    <Header />
    <hr />
    <Outlet />
    </>
    
  )
}

export default RootPage