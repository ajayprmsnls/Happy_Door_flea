import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import s from "./Body.module.scss";
import Button from 'antd/es/button';
import Input from "antd/lib/input";


const [NAME,Mobile,Email]=["NAME","Mobile","Email id"];

const Body: FC = () => {
  
  const [loading,load]=useState(3);
  return (
    <div className={`${s.container}`}>
      <div>
      <div className={`${s.human}`}>
        <Image 
         src="/images/human.png"
         alt="2 humans"
         width={310}
         height={310} />
        
         
      </div>
      <div>
      <div className={`${s.wave}`}> <Image 
         src="/images/waves.png"
         alt="wave"
         height={90}
         width={90}
          /></div>
      <div className={`${s.shock}`}><Image 
         src="/images/shock.png"
         alt="shock"
         height={150}
         width={150}
          /></div>
    </div>
    <div className={`${s.title}`}>
    <h1>THE HAPPY</h1>
    <h1>DOOR FLEA</h1>
  </div>
  </div>
  <div className={`${s.enterdetails}`}>
    <h2>Enter Details Here!</h2>
    <>
    <div className={`${s.inputs}`}>
        <Input className={`${s.input_box}`}
          placeholder={NAME}
          
        />
        <Input className={`${s.input_box}`}
          placeholder={Mobile}
          
        
        />
        <Input className={`${s.input_box}`}
          placeholder={Email}
          
        
        />
        
      </div>
      </>
    <div className={`${s.Next}`} onClick={()=>{load(5)}}></div>
    <div className={`${s.nextbox}`}>
      
      <h3>Next</h3>
      <div className={`${s.loading}` } >
        
      </div>
    </div>
  </div>

  
  </div>
  );
};

export default Body;
