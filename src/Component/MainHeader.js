import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'

import logo from './Images/logo.png';
import './MainHeader.css';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Schedule from '../Pages/Schedule';
import Gallery from '../Pages/Gallery';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
export default function MainHeader() {
  return (
    <div>
         <header className='main-bg1'>
        {/* Navbar Start */}
      



<Router>
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid m-3 ps-">
      <Link className="navbar-brand" to="/"><img src={logo} alt='img' /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ms-5 ps-5" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ps-5">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item link-items">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/schedule">Schedule</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <button className='btn btn-danger btn-lg custom-round-button"'>Become A Member</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services />} />
    <Route path="/schedule" element={<Schedule />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>

</Router>
         {/* Navbar end */}


         {/* Main start */}
         <main>
        
        
         <div className="container ">
      <div className="row my-5">
        {/* Left Section */}
        <div className="col-md-6">
          <div className="p-4">
            <h1 className="custom-text">
              Build a Perfect Body Shape for a Good and Healthy Life
            </h1>
            <a href="/" className="btn btn-danger btn-lg custom-button">
              Become A Member
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <button className="btn btn-danger custom-round-button">
            <span><i class="fa-solid fa-play"></i></span>
          </button>
        </div>
      </div>
    </div>
         </main>
         {/* Main end */}
      </header>
    </div>
  )
}
