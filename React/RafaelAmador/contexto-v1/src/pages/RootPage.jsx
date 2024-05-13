import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

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