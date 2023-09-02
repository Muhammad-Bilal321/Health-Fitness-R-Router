import React from 'react'
import logo from './Images/main1.png';

import './MainBody1.css';
export default function MainBody1() {
  return (
    <div className='main-body1'>
    <div className="container">
  <div className="row">
   
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <img src={logo} alt="img" className="img-fluid" />
    </div>
    
    
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div className='mx-3 my-5 py-5'>
        <p className='red-text my-5'>ABOUT OUR GYM</p>
        <h2 className='custom-text2 my-4'>SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!</h2>
        <p className='my-5'><strong>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</strong></p>
        <p className="light-text">Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>
        <button className="btn btn-danger btn-lg my-5"> Become A Member</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
