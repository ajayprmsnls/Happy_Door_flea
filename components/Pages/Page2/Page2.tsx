import { Button } from 'antd'
import Image from "next/image";
import React, { useState } from 'react'
import s from "./Page2.module.scss"
const Page2 = () => {
  const [count, setcount]=useState(0)
  return (
    <div className={`${s.count}`}>
    <h2 className={`${s.title}`}>Number of Guets?</h2>
    
   
      <h2 className={`${s.counter}`}>{count}</h2>
      <button className={`${s.add}`} onClick={()=>setcount(count+1)}>+</button>
      
      <button className={`${s.sub}`} onClick={()=>setcount(count-1)}>-</button>
      <div className={`${s.y_shock}`}>
        
        <Image src="/images/y_shock.svg" alt="y_shock" height={60}
        width={60} 
         />
         10% off on 10 or more tickets
        </div>
      <div className={`${s.nextbox}`}>
        <Button className={`${s.Next}`}>
        Next
        </Button></div>
        
      
    </div>
  )
}

export default Page2