import { useState } from 'react'
import {createHashRouter,RouterProvider} from 'react-router-dom'
import Home from './componets/Home'
import TodoApp from './componets/todo'
import Navbar from './componets/Navbar'

function App() {
  const router = createHashRouter([
    {
      path:"/todo",
      element:<><Navbar/> <TodoApp/></>
    },
    
    {
      path:"/",
      element:<><Navbar/> <Home/></>
    }
    
  ])
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
