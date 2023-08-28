import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.png';
import './Header.css';
const Header = () => {
  const [menuOpened, setMemuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="logo" className='logo'/>
      <ul className='header-menu'>
        <li onClick={() => setMemuOpened(false)}>
        <Link to='home'
          span={true}
          smooth = {true}>
          Home
          </Link>
          </li>
        <li onClick={() => setMemuOpened(false)}>
        <Link to='programs'
          span={true}
          smooth = {true}>
            Programs
          </Link>
          </li>
        <li>
          <Link to='reasons'
              span={true}
              smooth = {true}>
          Why us
          </Link>
        </li>
        <li onClick={() => setMemuOpened(false)}>
        <Link to='plans'
          span={true}
          smooth = {true}>
          Plans
          </Link>
          </li>
        <li onClick={() => setMemuOpened(false)}>
          <Link to='testimonils'
          span={true}
          smooth = {true}>
          Testimonils
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;