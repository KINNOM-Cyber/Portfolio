import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { ErrorPage } from './pages/error'
import { ChickenHousePage } from './pages/house/chicken'
import { FlowerHousePage } from './pages/house/flower'
import { Index, RootHousePage } from './pages/house'
import { CompostHousePage } from './pages/house/compost'
import { TestPage } from './pages/test'
import { ConfigurationPage } from './pages/configuration'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootHousePage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "house/flower",
        element: <FlowerHousePage />
      },
      {
        path: "house/chicken",
        element: <ChickenHousePage />
      },
      {
        path: "house/compost",
        element: <CompostHousePage />
      }
    ]
  },
  // {
  //   path: "/test",
  //   element: <TestPage />
  // }
  {
    path: "/configuration",
    element: <ConfigurationPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
