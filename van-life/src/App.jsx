import React from "react";
import { 
    BrowserRouter, 
    Routes, 
    Route,
    Link
} from "react-router-dom"

import HomeLayout from "./homeComponents/HomeLayout.jsx"
import Header from "./homeComponents/Header.jsx"
import Footer from "./homeComponents/Footer.jsx"
import Home from "./homeComponents/Home.jsx"
import About from "./homeComponents/About.jsx"
import Vans from "./homeComponents/Vans.jsx"
import VanDetail from "./homeComponents/VanDetail.jsx"

import HostLayout from "./hostComponents/HostLayout.jsx"
import Dashboard from "./hostComponents/Dashboard.jsx"
import Income from "./hostComponents/Income.jsx"
import Reviews from "./hostComponents/Reviews.jsx"
import HostVans from "./hostComponents/HostVans.jsx"
import HostVanDetail from "./hostComponents/HostVanDetail.jsx"
import Details from "./hostComponents/Details.jsx"
import Pricing from "./hostComponents/Pricing.jsx"
import Photos from "./hostComponents/Photos.jsx"

export default function App(){
    
  return(
    <>
    <BrowserRouter>
        
    <Routes>

    <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
        
        <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
            <Route path="/host/vans" element={<HostVans />} />
            
            <Route path="/host/vans/:id" element={<HostVanDetail />}>
                <Route index element={<Details />} />
                <Route path="/host/vans/:id/pricing" element={<Pricing />} />
                <Route path="/host/vans/:id/photos" element={<Photos />} />
            </Route>
        </Route>
    </Route>
        
    </Routes>
        
    </BrowserRouter>
    </>
    )
}