import React, { useRef,useState } from 'react'
import './MainBody2.css';

export default function MainBody2() {

    const [isButtonVisible, setButtonVisible] = useState(false);
    const [isButtonVisible2, setButtonVisible2] = useState(false);
    const [isButtonVisible3, setButtonVisible3] = useState(false);
    const buttonRef = useRef();
    const buttonRef2 = useRef();
    const buttonRef3 = useRef();
  
    const handleMouseEnter = () => {
      setButtonVisible(true);
    };
  
    const handleMouseLeave = () => {
      setButtonVisible(false);
    };

    // Card 2
    const handleMouseEnter2 = () => {
      setButtonVisible2(true);
    };
  
    const handleMouseLeave2 = () => {
      setButtonVisible2(false);
    };
    // Card 3
    const handleMouseEnter3 = () => {
      setButtonVisible3(true);
    };
  
    const handleMouseLeave3 = () => {
      setButtonVisible3(false);
    };
  return (
    <div className='main-body2 my-5 py-5'>
      
<div className="container mt-5">
  <div className="row">
   
    <div className="col-md-6">
      <p className="mb-3 red-text">OUR SERVICES FOR YOU</p>
      <hr/>
      <h2 className='custom-text3'>PUSH YOUR LIMITS FORWARD WE OFFER TO YOU</h2>
    </div>
    
 
    <div className="col-md-6 d-flex align-items-center">
      <button className="btn btn-danger ms-auto">More Services</button>
    </div>
  </div>
  

 <div className="row mt-4 justify-content-center">
 <div className="col-md-4 mb-3">
 {/* Card 1 */}
    <div className={`card-container ${isButtonVisible ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
  <div className="card px-5 py-5 my-3" >
        <div className="card-body text-center">
          <h1><i className="fa-solid fa-dumbbell"></i></h1>
          <h5 className="card-title">QUALITY EQUIPMENT</h5>
          <p className="card-text">The sea freight service has grown considerably in recent years. We spend time getting to know your transportation needs.</p>
        </div>
        {isButtonVisible && (
        <button ref={buttonRef} className="btn btn-danger">
          DISCOVER MORE 
        </button>
      )}
      </div>
   
      
  </div>
  </div>

{/* Card 2 */}
  <div className="col-md-4 mb-3">
    <div className={`card-container ${isButtonVisible2 ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter2}
      onMouseLeave={handleMouseLeave2}>
  <div className="card px-5 py-5 my-3" >
        <div className="card-body text-center">
          <h1><i class="fa-regular fa-heart"></i></h1>
          <h5 className="card-title">HEALTH CARING</h5>
          <p className="card-text">The sea freight service has grown considerably in recent years. We spend time getting to know your transportation needs.</p>
        </div>
        {isButtonVisible2 && (
        <button ref={buttonRef2} className="btn btn-danger">
          DISCOVER MORE 
        </button>
      )}
      </div>
   
      
  </div>
  </div>
{/* Card 3 */}
  <div className="col-md-4 mb-3">
    <div className={`card-container ${isButtonVisible3 ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter3}
      onMouseLeave={handleMouseLeave3}>
  <div className="card px-5 py-5 my-3" >
        <div className="card-body text-center">
          <h1><i class="fa-regular fa-clock"></i></h1>
          <h5 className="card-title">GYM STRATEGIES</h5>
          <p className="card-text">The sea freight service has grown considerably in recent years. We spend time getting to know your transportation needs.</p>
        </div>
        {isButtonVisible3 && (
        <button ref={buttonRef3} className="btn btn-danger">
          DISCOVER MORE
        </button>
      )}
      </div>
   
      
  </div>
  </div>

</div>
</div>
    </div>
  )
}
