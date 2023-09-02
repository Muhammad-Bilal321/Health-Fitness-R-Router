import React from 'react'
import logo from './Images/Main-bg3.png';

export default function MainBody3() {
  return (
    <div className='main-body1'>
    <div className="container">
  <div className="row">
   
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <img src={logo} alt="img" className="img-fluid" />
    </div>
    
    
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div className='mx-3 my-5 py-5'>
        <p className='red-text my-5'>CLIENT FEEDBACK</p>
        <h2 className='custom-text2 my-4'>WHAT OUR CLIENT THIK ABOUT OUR GYM</h2>
        <p className='my-5'><strong>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</strong></p>
        <p className="light-text">Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>
      
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
