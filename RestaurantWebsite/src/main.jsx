import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from "./components/Layout.jsx";
import Home from "./components/Home/Home.jsx"
import QuotePage from './components/QuotePage/QuotePage.jsx'
import Food from "./components/Food/Food.jsx"
import Restaurant from './components/Restaurant/Restaurant.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx'
import RecipePage from './components/Food/RecipePage.jsx';

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
  <Route path='' element={<Home/>}/>
  <Route path='quote' element={<QuotePage/>}/>
  <Route path='restaurant' element={<Restaurant/>}/>
  <Route path='food' element={<Food/>}/>
  <Route path='contactus' element={<ContactUs/>}/>
  <Route path="recipe/:id" element={<RecipePage />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
