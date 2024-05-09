import { useRoutes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Movies from './Pages/Movies/Movies'
import MainLayout from './Layouts/MainLayout/MainLayout'
import TvSeries from './Pages/TvSeries/TvSeries'

const useRouterElements = () => {
  const routeElemnts = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: '/movies',
      element: (
        <MainLayout>
          <Movies />
        </MainLayout>
      )
    },
    {
      path: '/tvseries',
      element: (
        <MainLayout>
          <TvSeries />
        </MainLayout>
      )
    }
  ])
  return routeElemnts
}

export default useRouterElements
