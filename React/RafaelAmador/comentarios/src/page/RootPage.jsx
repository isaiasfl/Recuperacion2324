import { Outlet } from 'react-router-dom'
import Header from './Header'

const RootPage = () => {
  
  return (
    <div >
      <Header />
      <hr />
      <Outlet />
    </div>
  )
}

export default RootPage