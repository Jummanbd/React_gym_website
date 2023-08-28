import React from 'react';
import adidas from '../../assets/adidas.png';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
import './Reasons.css';
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="img" />
            <img src={image2} alt="img" />
            <img src={image3} alt="img" />
            <img src={image4} alt="img" />
        </div>
        <div className="right-r">
          <span>some resons</span>
          <div>
            <span className="stroke-text">why </span>
            <span>choose us?</span>
          </div>
          <div className='details-r'>
            <div>
              <img src={tick} alt="" />
              <span>Over 140 + expert coachs</span>
            </div>

            <div>
              <img src={tick} alt="" />
              <span>1 free program form new member</span>
            </div>
            
            <div>
              <img src={tick} alt="" />
              <span>train smarter and faster than before</span>
            </div>

            <div>
              <img src={tick} alt="" />
              <span>1 free program form new member</span>
            </div>

            <div>
              <img src={tick} alt="" />
              <span>Reliable partners</span>
            </div>
            
            <div>
              <img src={tick} alt="" />
              <span>1 free program form new member</span>
            </div>

            <div>
              <img src={tick} alt="" />
              <span>Over 140 + expert coachs</span>
            </div>
            
          </div>
          <span style={{color:"var(--gray)", fontWeight:"normal" }}>OUR PARTNERS</span>
          <div className="partners">
            <img src={nb} alt="img" />
            <img src={adidas} alt="img" />
            <img src={nike} alt="img" />
          </div>
        </div>
    </div>
  )
}

export default Reasons