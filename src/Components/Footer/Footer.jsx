import React from 'react'
import './footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='Footer_outer_container'>
     <div className="Footer_inner_container">
      <div className="FooterIcons">
        <ul>
          <li><FacebookOutlinedIcon/></li>
          <li><InstagramIcon/></li>
          <li><YouTubeIcon/></li>
        </ul>

      </div>

    <div className="Footer_data">
        <div>
          <ul>
          <li>Audio Description</li>
          <li>Investor Relation</li>
          <li>Legal Notice</li>
        </ul>
        </div>
        
      
      <div >
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
      </div>
      <div >
        <ul>
          <li>Gift Cards</li>
          <li>Term Of Use</li>
          <li>Corporate Information</li>
        </ul>
      </div>
    </div>
      <div className="service_code">
        <p>Service</p>
      </div>
      <div className="copy_write">
        &copy; 1997–2024 Netflix, Inc.

      </div>
     </div>
     
    </div>
  )
}

export default Footer;

