import React from 'react';
import './footer.css'
import { FaMapMarker } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";




const Footer = () => {
  return (
    <div className='bg-image'><br/>
      <span className='company-name'>Ekrishta matrimony<br/><div className='subname'>This is a matrimony website</div></span>
      {/* Links */}
      <div className='quick-link'>Quick links</div>
      <div className='links'>Home<br/><br/>Search<br/><br/>Contact<br/><br/>About<br/><br/></div>
       <div className='contsact-us'>Contact us</div><br/>
       <div className='mapicon'><FaMapMarker/></div>    
       <div className='location'>Vijayawada,Andhra pradesh</div>
       <div className='phicon'><BsTelephone/></div>
       <div className='phno'>123456789</div>
       <div className='mailicon'><MdEmail/></div>
       <div className='mailid'>gowthamvarma1998@gmail.com</div><br/><br/><br/><br/>
    </div>
  );
}

export default Footer;
