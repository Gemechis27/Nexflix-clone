import React from 'react'
import './header.css'
import NetflixLogo from '../../assets/images/NetFlix1.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Header = () => {
  return (
    <div className='header_outer_container'>
        <div className='header-container'>
            <div className='header_left-container'>
                <ul>
                    <li><img src={NetflixLogo} alt='NetwflixLogo' width='100'/></li>
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TVShow</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>Browser By Languages</li>
                </ul>

            </div>

            <div className='header_Right_container'>
                <ul>
                    <li><SearchIcon/></li>
                    <li><NotificationsActiveIcon/></li>
                    <li><AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon/></li>
                </ul>
            </div>

        </div>
     
    </div>
  )
}

export default Header
