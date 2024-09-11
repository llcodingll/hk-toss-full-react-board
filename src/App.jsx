import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Board from './components/Board';
import Content from './components/Content';
import Details from './components/Details';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Board />
      },
      {
        path: "/contents",
        element: <Content />
      },
      {
        path: "/id",
        element: <Details />
      }
    ]
  )

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
