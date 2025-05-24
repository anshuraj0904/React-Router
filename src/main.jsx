import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} /> {/* renders at '/' */}
      <Route path='about' element={<About />} />
      <Route path='user/' element={<User />} >
         <Route path=':userid' element={<User />} /> {/* dynamic route for user ID */}
      </Route>
      {/* This automatically has the '/' prefix because it's a child of the root path. */}
      <Route 
      loader={githubInfoLoader} // This loader function fetches data before the component is rendered.
      path='github'
      element={<Github/>} />
      
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
