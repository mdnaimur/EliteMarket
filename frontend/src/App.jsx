import "./App.scss";

import {
  Outlet,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Product } from './pages/Product/Product';
import Products from './pages/Products/Products';

// start code in here

const Layout = () =>{
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element: <Home />

      },
      {
        path:"/products/:id",
        element: <Products />
      },
      {
        path:"/product/:id",
        element: <Product />
      }
    ]
  },

])


function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
