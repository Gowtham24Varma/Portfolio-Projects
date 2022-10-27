import React from 'react';
import { Link,  } from 'react-router-dom';
import './firsthome.css'
import image9 from './img9.jpg'
import image10 from './img10.jpg'
import image11 from './img11.png'
import { BsFillHeartFill } from "react-icons/bs";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";





const Firsthome = () => {
  return (
    <div>
        <div className='ekrishta-tag'><span className='ekrishta'>Ekrishta</span> matrimony<div className='ekrishta-tag2'>Where <span className='love'>Love</span><span  className='lovesymbol'> <BsFillHeartFill/></span> Meets...</div></div>
        <div className='testimonals'><span className='loveface'></span>Our Testimonals<span className='loveface'></span></div>        
        <div><br/>
            <img src={image9} height='331px'width='300px' className='img9' alt=''/><br/>
             <div className='quote1'>"Everyone thought that we are made for eachother <br/>and this is only possible with only Ekrishta"</div>
              <div className='quote2'>--Mr&Ms Sharma</div>
              
            <img src={image10} height='320px' width='330px' className='img10' alt=''/>
            <div className='quote3'>"Ekrishta gave me my lovely husdand such a man<br/> he is credits goes to Ekrishta"</div><br/>
             <div className='quote4'>--Mr&MS chouhan</div>
            <img src={image11} height='320px'width='330px' className='img11' alt=''/>
            <div className='quote5'>"Ekrishta helped me to find a perfect groom,<br/> thanks a lot Ekrishta" </div><br/>
             <div className='quote6'>--Mr&Ms Darshan</div>
             <div className='quote7'>We help you to connect with your <span className='soul'>soul</span> mates</div>
             <div className='consult'>To Know more please login/register here</div>
        </div><br/>
        <Link to='/Login'>
      <button className='btn1'>Press me</button><br/><br/>
        </Link>
    </div>
  );
}

export default Firsthome;
