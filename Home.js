import React from 'react';
import './App.css'
import image1 from './img1.png'
import image2 from './img2.png'
import image3 from './img3.png'
import image4 from './img4.png'
import image5 from './img5.png'
import image6 from './img6.png'
import image7 from './img7.png'
import image8 from './img8.png'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const Cardcomp=useNavigate()
  return (
    <div >
<div className='firstcard1'>
 <img src={image1} height='231px' width='200px' className='img1' alt=''/>
 <button className='home-card-btn1' onClick={()=>Cardcomp('/Card1')}>Read more</button>
</div>
<div className='firstcard2'>
<img src={image2} height='230px' width='200px' className='img12' alt=''/>
<button className='home-card-btn2'onClick={()=>Cardcomp('/Card2')} >Read more</button>

</div>
<div className='firstcard3'>
<img src={image3} height='230px' width='200px' className='img3' alt=''/>
<button className='home-card-btn3' onClick={()=>Cardcomp('/Card3')}>Read more</button>

</div>
<div className='firstcard4'>
<img src={image4} height='230px' width='200px' className='img4' alt=''/>
<button className='home-card-btn4' onClick={()=>Cardcomp('/Card4')}>Read more</button>

</div>
<div className='firstcard5'>
<img src={image5} height='230px' width='200px' className='img5' alt=''/>
<button className='home-card-btn5' onClick={()=>Cardcomp('/Card5')}>Read more</button>

</div>
<div className='firstcard6'>
<img src={image6} height='230px' width='200px' className='img6' alt=''/>
<button className='home-card-btn6' onClick={()=>Cardcomp('/Card6')}>Read more</button>

</div>
<div className='firstcard7'>
<img src={image7} height='230px' width='200px' className='img7' alt=''/>
<button className='home-card-btn7' onClick={()=>Cardcomp('/Card7')}>Read more</button>

</div>
<div className='firstcard8'>
<img src={image8} height='230px' width='200px' className='img8' alt=''/>
<button className='home-card-btn8' onClick={()=>Cardcomp('/Card8')}>Read more</button>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>
    </div>
  );
}

export default Home;
