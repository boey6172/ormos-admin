import React, { useState }from 'react';
// import VerifyForm from '../verify/verifyForm';
// import MenuButton from './menuButton'
// import History from './history'



const Main = (props) =>{
  var[orderObject,setOrderObject] = useState(true);
  
 if(orderObject){
    return(
    <>
      <div className="App">
       
      <div> Welcome , {props.user.displayName}</div>
       {/* <div><MenuButton /></div>
       <div><History /></div> */}

      </div>
    </>
    )
  }
  else{
    return <></>
  }
}

export default Main

