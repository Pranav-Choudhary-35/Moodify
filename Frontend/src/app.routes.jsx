import {createBrowserRouter} from 'react-router'
import Login from './features/auth/pages/login'
import Register from './features/auth/pages/register'
import Home from './features/home/pages/Home'
export const router = createBrowserRouter([
  {
path: "/",
element: <Login />
  },
  
    {
    path: "/register",
    element: <Register />
  },
  {
    path: "/home",
    element: <Home />
  }
]);