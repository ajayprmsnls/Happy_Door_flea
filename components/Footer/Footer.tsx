import React from "react";
import s from "./Footer.module.scss"
const Footer = () => {
  return <div className={`${s.container}`}>
    <h3>100rs per day - <br />
      Rs.50 Redeemable at any stall.
    </h3>
  </div>;
};

export default Footer;
