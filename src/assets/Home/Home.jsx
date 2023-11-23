import React from 'react' 
import Allcategory from '../Reciepe/Allcategory'
import "./Home.css"
import main from "../Images/mainImg.avif"
// import Typewriter from "typewriter-effect"
import Typewriter from './TypeWriter.jsx'

function Home() {

  const backgroundImageStyle = {
    backgroundImage: `url(${main})` // Use the url() function to set the background image
  };

  
  return (
    <div className='home' >
        {/* <h2>How are you sachin</h2> */}
        <div className='homeImg' style={backgroundImageStyle}>  </div> 
        

        <Typewriter />
        {/* <div className='mainPageContent'> 
        <p>At RECIEPE, we believe that every meal is an opportunity for a delightful adventure. Whether you're a seasoned chef or a novice in the kitchen, our mission is to inspire your inner foodie and elevate your cooking experience. Explore a world of flavors, discover new techniques, and create unforgettable dishes .</p>
        </div> */}
        <div className='mainPageList'> 
        <Allcategory />
        </div>
    </div>
  )
}

export default Home
