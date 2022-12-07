import { Button } from 'antd'
import Image from "next/image";
import React, {  useState } from 'react'
import s from "./Page3.module.scss"
const Page2 = () => {
  const [count, setcount]=useState(0);
  const [style, setStyle] = useState(s.date);
  const [style1, setStyle1] = useState(s.date);
  
  
  const changeStyle = () => {
    console.log("you just clicked");
  
    setStyle(s.clicked);
  };
    
  return (
    <div className={`${s.count}`}>
    <h2 className={`${s.title}`}>What dates you going on ?</h2>
    
    
    <div className={`${s.date1}`}>
      <button className={style} onClick={()=>{setStyle(s.clicked)}}>
        15th Sept
        </button>
    </div>
    <div className={`${s.date2}`}>
      <button className={style1} onClick={()=>{setStyle1(s.clicked)}}>
        16th Sept
      </button>
      </div>

      <div className={`${s.nextbox}`}>
        <Button className={`${s.Next}`}>
        Next
        </Button>
      </div>
        
      
    </div>
  )
}

export default Page2

function changeColor() {
  throw new Error('Function not implemented.');
}
