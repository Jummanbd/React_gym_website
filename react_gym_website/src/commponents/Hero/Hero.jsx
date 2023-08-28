import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
import React from 'react';
import Calories from '../../assets/calories.png';
import Heart from '../../assets/heart.png';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Header from '../Headers/Header';
import './Hero.css';
const Hero = () => {
  const transition = {type:'spring', duration:3};
  const mobile = window.innerWidth <=768 ? true : false;
  return (
    <div className="hero" id='hero'>
      <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header/>
          {/* the best ad */}
          <div className="the-best-ad">
            <motion.div

            initial={{left:mobile ? '178px' : '238px'}}
            whileInView={{left:"8px"}}
            transition={{...transition, type:'tween'}}
            ></motion.div>
            <span>the best fitness club in the town</span>
          </div>
          {/* Hero Heading */}
          <div className="hero-text">
            <div>
              <span className='stroke-text'>shape </span>
              <span>your</span>
            </div>
            <div>
              <span>Ideal body</span>
            </div>
            <div>
              <span>
                  In here we will help you to shape and build your ideal body and live up your life to fullest.
              </span>
            </div>
          </div>

          {/* figures */}
          <div className="figures">
              <div>
                <span>
                <NumberCounter end={140} start={100}  preFix="+"/>
                </span>
                <span>expert coaches</span>
              </div>
            
             <div>
                <span>
                <NumberCounter end={198} start={100}  preFix="+"/>
                </span>
                <span>members joined</span>
              </div>

            
              <div>
                <span>
                <NumberCounter end={50} start={10}  preFix="+"/>

                </span>
                <span>fitness prograns</span>
              </div>
          </div>
          <div className="hero-buttons">
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
          </div>
        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>

          < motion.div 
          initial={{right:"-1rem"}}
          whileInView={{right:'4rem'}}
          transition={transition}
          className="heart-rate">
            <img src={Heart} alt="heart" />
            <span>Heart Rate</span><span>116 bpm</span>
          </motion.div>
          {/* hero image */}
          <img src={hero_image} alt="hero" className='hero-image'/>
          <motion.img
          initial={{right:"11rem"}}
          whileInView={{right:"22rem"}}
          transition={{transition}}
           src={hero_image_back} className='hero-image-back' alt="hero-back" />
          {/* calories */}
          <motion.div
            initial={{right:"37rem"}}
            whileInView={{right:'28rem'}}
            transition={transition}
           className="calories">
            <img src={Calories} alt="img" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero