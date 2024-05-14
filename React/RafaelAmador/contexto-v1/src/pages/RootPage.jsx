import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { useConfig } from '../components/context/ConfigContext';


const RootPage = () => {
  const { theme } = useConfig();
  return (
    <div style={{ color: theme.color, backgroundColor: theme.backgroundColor, width: '100%',height: '100%'}}>
        <Header />
        <hr />
        <Outlet />
    </div>
  )
}

export default RootPage