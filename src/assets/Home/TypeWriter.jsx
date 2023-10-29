import  Typewriter from "typewriter-effect";

 import React from 'react'
 
 function TypeWriter() {
   return (
     <Typewriter 
  onInit={(typewriter) => {
  typewriter.typeString('Hello World!') 
   .pauseFor(2500)
   .deleteAll() 
   .start();
}} />
   )
 }
 
 export default TypeWriter