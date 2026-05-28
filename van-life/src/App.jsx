import React from "react";
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Vans from "./components/Vans.jsx"
import { 
    BrowserRouter, 
    Routes, 
    Route,
    Link
} from "react-router-dom"


export default function App(){
    
  return(
    <>
    <BrowserRouter>
        <header>
            <nav>
                <Link to="/">#VANLIFE</Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Vans">Vans</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
        </Routes>
        <footer>
                Ⓒ 2022 #VANLIFE
        </footer>
    </BrowserRouter>
    </>
    )
}