import React from "react"
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/home"
import Features from "./components/Features"
import Enterprise from "./components/Enterprise"
import Support from "./components/Support"
import Footers from "./components/Footers"
function App() {


  return (
    <>
      
      <Router>
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Features/>}></Route>
            <Route path="/enterprise" element={<Enterprise/>}></Route>
            <Route path="/support" element={<Support/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
          </Routes>
          <Footers></Footers>
        </div>
        
      </Router>
    </>
  )
}

export default App
