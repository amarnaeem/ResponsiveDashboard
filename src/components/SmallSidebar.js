import React,{useState} from 'react';
import {IoReorderThreeSharp} from "react-icons/io5"

export default function SmallSidebar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div>
      <div className='sidebar-toggle-btn d-xl-none d-lg-none d-xl-block'  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
   <IoReorderThreeSharp/>
</div>

<div class="offcanvas offcanvas-start  smallsidebar-parent" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

<div className="sidebar">
       
         <div class='profile-container d-flex  '>
              <img src='/images/Image_Here.png' className='profile-img' alt='img'/>
                    <p className='name'>T.JOBLONSKI</p>
                      <p className='designation'>ADMINISTRATOR</p>
            </div>

            <div className={`option-2 ${hoveredIndex === 0 ? ' hovered-child1' : ''}`} onMouseEnter={() => handleHover(0)} onMouseLeave={handleMouseLeave}>
            <img src='/images/Monitor_Icon.png' alt='img'/>
            </div>

            <div className={`option-3 ${hoveredIndex === 1 ? ' hovered-child1' : ''}`} onMouseEnter={() => handleHover(1)} onMouseLeave={handleMouseLeave}>
              
                <img src='/images/7-layers .png' alt='img'/>
            </div>
            <div className={`option-4 ${hoveredIndex === 2 ? ' hovered-child1' : ''}`} onMouseEnter={() => handleHover(2)} onMouseLeave={handleMouseLeave}>
            <img src='/images/Layer_1344.png' alt='img'/>
            </div>
            
            <div className={`option-5 ${hoveredIndex === 3 ? ' hovered-child1' : ''}`} onMouseEnter={() => handleHover(3)} onMouseLeave={handleMouseLeave}>
            <img src='/images/Settings_Icon.png' alt='img'/>
            </div>
    
        
    </div>







    <div className='grow-sidebar' style={{width:"270px"}}>

<div class='date-Container d-flex '>

    <div className='calender'>
  <img src='/images/Calender_Icon.png' className='calender-img' alt='img'/>
  <span className='year'>2019</span>
  <span className='month-day '>12 DEC</span>
 

    </div>

  <div className='hide-container' >
  <img src='/images/WEEK_BATTON.png' className='hide-img' alt='img'/>
    <span  data-bs-dismiss="offcanvas" aria-label="Close" className='hide-txt '>HIDE</span>
  </div>
       
</div>

<div className={`options ${hoveredIndex === 0 ? ' hovered-child2' : ''}`} onMouseEnter={() => handleHover(0)} onMouseLeave={handleMouseLeave}>DASHBOARD</div>
            <div className={`options ${hoveredIndex === 1 ? ' hovered-child2' : ''}`} onMouseEnter={() => handleHover(1)} onMouseLeave={handleMouseLeave}>MESSAGE</div>
            <div className={`options ${hoveredIndex === 2 ? ' hovered-child2' : ''}`} onMouseEnter={() => handleHover(2)} onMouseLeave={handleMouseLeave}>BUYER PERSONA</div>
            <div className={`setting-option ${hoveredIndex === 3 ? ' hovered-child2' : ''}`} onMouseEnter={() => handleHover(3)} onMouseLeave={handleMouseLeave}>
<div className='profile-option'>MY PROFILE</div>
 <hr className='line'/>
<div className='panel-option'>MY PANEL</div>
<hr className='line'/>
<div className='security-option'>SECURITY</div>
<hr className='line'/>
<div className='logout-opyion'>LOGOUT</div>

</div>



</div> 







</div>
    </div>
  )
}
