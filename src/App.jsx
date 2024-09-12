import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css'
import Boards from './components/Boards';
import Details from './components/Details';

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
