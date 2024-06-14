import { useRoutes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import MainLayout from './Layouts/MainLayout/MainLayout'
import End from './Pages/End/End'

const useRouterElements = () => {
  const routeElemnts = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/end',
      element: <End />
    }
  ])
  return routeElemnts
}

export default useRouterElements
