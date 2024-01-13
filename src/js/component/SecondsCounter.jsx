import React from "react";


 export const SecondsCounter =(props)=>{
return (
<div className="bigCounter">
    <div className="calendar">
        <i className="fa-regular fa-clock"></i>
      <div className= "fourDigits">{props.digitFour}</div> 
      <div className= "threeDigits">{props.digitThree}</div> 
      <div className= "twoDigits">2</div> 
      <div className= "oneDigit">1</div> 
    </div>
  </div>
);
};

