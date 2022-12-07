import React from 'react'
import Image from "next/image";
import Page4 from "@components/Pages/Page4";
import s from "./Page6.module.scss"
const Page6 = () => {
  return (
    <div className={`${s.complete}`}><div className={`${s.img}`}>
      <Image src="/images/tick.svg"
      alt="tick" 
      height={200}
      width={200} />
    </div>
    <h3>Your Booking is complete!</h3>
    <h6>you will be receiving a confirmation mail with ticket details
for queries contact  <b>65432543</b> </h6></div>
  )
}

export default Page6