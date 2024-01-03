import  Typewriter from "typewriter-effect";

 import React from 'react'
 
 function TypeWriter() {
   return (
    <span  className="typeWriter"> 
     Explore the world of
      {/* <span style={{padding: "0.5rem"}}> </span> */}
     <Typewriter 
     options={{
                  autoStart: true,
                  loop: true,
                  delay: 30,
                }}
  onInit={(typewriter) => {
  typewriter
  .typeString('gourmet recipes.') 
   .pauseFor(2500)
   .deleteAll() 
   .typeString('homemade delight.') 
   .pauseFor(2500)
   .deleteAll() 
   .start();
}} />
</span>
   )
 }
 
 export default TypeWriter