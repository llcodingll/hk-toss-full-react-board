import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Board from './components/Board';
import Details from './components/Details';
import { useState } from 'react';

function App() {
  const [boards, setBoards] = useState([]);

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Board boards={boards} setBoards={setBoards} />
      },
      {
        path: "/boards/:id",
        element: <Details boards={boards} setBoards={setBoards} />
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
