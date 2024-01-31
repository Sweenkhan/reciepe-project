import React from 'react' 
import Allcategory from './Allcategory'  


function Reciepe() {
  
  return (
     <div className='reciepeDiv' style={{paddingTop: "80px"}} >
      <h1 style={{textAlign: "center"}}> Choose your category </h1>
      <Allcategory />
     </div>

  )
}

export default Reciepe
