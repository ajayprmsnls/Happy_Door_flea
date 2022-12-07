import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import s from "./Body.module.scss";
import Button from 'antd/es/button';
import Input from "antd/lib/input";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import Page1 from "@components/Pages/Page1";
import Page2 from "@components/Pages/Page2";
import Page3 from "@components/Pages/Page3";
import Page4 from "@components/Pages/Page4";
import Page5 from "@components/Pages/Page5";

import Page6 from "@components/Pages/Page6";


const Body: FC = () => {
  
  const [loading,load]=useState(3);
  function load1(){

  }
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
      <div className={`${s.sideimages}`}>
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
  <div>
    <Page6  />
  </div>
    
  
  </div>
  );
};

export default Body;
