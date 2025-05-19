import React, { useEffect, useState } from 'react';
import './header.css';
import NetflixLogo from '../../assets/images/NetFlix1.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='header_outer_container'>
      <div className='header-container'>
        <div className='header_left-container'>
          <img src={NetflixLogo} alt='Netflix Logo' className='netflix-logo' />
          {!isMobile ? (
            <ul className='header_nav'>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>Browse by Language</li>
            </ul>
          ) : (
            <div className="burger-menu" onClick={toggleMenu}>
              <MenuIcon />
            </div>
          )}
        </div>

        <div className='header_Right_container'>
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsActiveIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>

      {isMobile && showMenu && (
        <ul className='mobile_nav'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>Browse by Language</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
