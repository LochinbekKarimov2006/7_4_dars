import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import MayinLeyout from './layout/MayinLeyout'
import Home from './pages/Home'
import LineChart from './pages/Abaut'
function App() {
  let router=createBrowserRouter([
    {
      path:"/",
      element:<MayinLeyout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"l",
          element:<LineChart/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App