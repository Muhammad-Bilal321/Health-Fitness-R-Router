import React from 'react'
import logo from './Images/gallery1.png';
import logo2 from './Images/gallery2.png';
import logo3 from './Images/gallery3.png';
import logo4 from './Images/gallery4.png';
import logo5 from './Images/gallery5.png';

import './MainBody4.css';

export default function MainBody4() {
  return (
    <div>
       <div className="container-fluid">
        <div className="row">
        
            <div className="col-md-6">
                <a href="/">
                    <img src={logo} alt="img" className="img-fluid"/>
                </a>
            </div>
            
            <div className="col-md-6">
               
                <div className="row mb-3">
                    <div className="col-md-6">
                        <a href="/">
                            <img src={logo2} alt="img" className="img-fluid"/>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a href="/">
                            <img src={logo3} alt="img" className="img-fluid"/>
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <a href="/">
                            <img src={logo4} alt="img" className="img-fluid"/>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a href="/">
                            <img src={logo5} alt="img" className="img-fluid"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
