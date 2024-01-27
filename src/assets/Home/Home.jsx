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
        <div className='homeImg' style={backgroundImageStyle}>  </div> 
        

        <Typewriter /> 
        <div className='mainPageList'> 
        <Allcategory />
        </div>
    </div>
  )
}

export default Home
