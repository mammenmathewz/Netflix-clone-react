import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png' 
import TitleCards from '../../components/TitleCards/TitleCards'




function Home (){
  return (
    <>
    <Navbar/>
    <div className="hero">
      <img src={hero_banner} className='banner-img'></img>
      <div className="hero-caption">
        <img src={hero_title} alt="" srcset="" className='caption-img'/>
        <p>gsukyhsdfkj usifda huiswafi hiufswaiauwsefiwoahjklds aiudsayf sd</p>
        <div className="hero-btns">
          <button className='btn'><img src={play_icon}></img>Play</button>
          <button className='btn dark-btn'><img src={info_icon}></img>More info</button>
        </div>
        <TitleCards/>
      </div>
    </div>
    <div className="more-cards">
    <TitleCards title={'Blockbuster Movis'}/>
    <TitleCards title={'Only on Netflix'}/>
    <TitleCards title={'Upcomming'}/>
    <TitleCards title={'Topics for you'}/>


    </div>
    </>
  )
}
export default Home
