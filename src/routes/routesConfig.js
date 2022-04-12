import PeoplePage from '@containers/PeoplePage'
import PersonPage from '@containers/PersonPage/PersonPage'
import HomePage from '@containers/HomePage'
import Sense from '@containers/Sense'
import NotFoundPage from '@containers/NotFoundPage'
import FavoritesPage from '@containers/FavoritesPage/FavoritesPage'
import Memes from '@containers/Memes/Memes'

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/character',
    element: <PeoplePage />,
  },
  {
    path: '/favorites',
    element: <FavoritesPage />,
  },
  {
    path: '/about',
    element: <Sense />,
  },
   { 
      path: '/memes',
    element: <Memes />,
  },
  {
    path: '/character/:id',
    element: <PersonPage />,
  },
  {
    path: '/not-found',
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

export default routesConfig
