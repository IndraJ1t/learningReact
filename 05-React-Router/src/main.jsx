import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Github from './components/Github.jsx'
import { githubInfo } from './components/Github.jsx'


const routerObj = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route loader={githubInfo} path='github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerObj} />
  </StrictMode>
)



// Optimized using Outlet however doesn't work for v6

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<App />}>
//           <Route path='' element={<Home />} />
//           <Route path='about' element={<About />} />
//           <Route loader={githubInfo} path='github' element={<Github />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// )
