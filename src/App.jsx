import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css'
import Boards from './components/Boards';
import Details from './components/Details';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Boards />
      },
      {
        path: "/boards/:id",
        element: <Details />
        
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  )

  return (
    <RecoilRoot>
      <RouterProvider router={router}/>
    </RecoilRoot>
  )
}

export default App
