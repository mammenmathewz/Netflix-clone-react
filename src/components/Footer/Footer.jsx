import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" srcset="" />
        <img src={twitter_icon} alt="" srcset="" />
        <img src={instagram_icon} alt="" srcset="" />
        <img src={facebook_icon } alt="" srcset="" />
      </div>
      <ul>
        <li>Audio Descripition</li>
        <li>Help center</li>
        <li>jobs</li>
        <li>Media center</li>
        <li>Terms of us </li>
        <li>Media center</li>
        <li>Media center</li>
      </ul>
      <p className='copyright-text'>© 1999-2024 mNetflix.inc</p>
    </div>
  )
}

export default Footer