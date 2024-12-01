import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import Account from './pages/Account'
import Home from './pages/Home'
import Library from './pages/Library'
import News from './pages/News'

const Routers = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/e-library',
    element: <Library />
  },
  {
    path: '/news',
    element: <News />
  },
  {
    path: '/account',
    element: <Account />
  }
]

const App = () => {
  return (
    <div>
      <NavBar />
      <div className='m-2'>
        <Routes>
          {Routers.map(({ path, element }, i) => <Route key={i} path={path} element={element} />)}
        </Routes>
      </div>
    </div>
  )
}

export default App
