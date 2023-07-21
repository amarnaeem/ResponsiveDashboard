import React from 'react'
import FillChart from './FillChart'
import SmallSidebar from './SmallSidebar'
import Table1 from './Table1';
// import FillChart from './FillChart'

export default function DashboardContent({isOpen}) {
    const screenWidth = window.innerWidth;
    console.log((screenWidth<1377 && screenWidth>1200 && isOpen));
    let responsiveVar1= (screenWidth<1377 && screenWidth>1200 && isOpen);
    let responsiveVar2= (screenWidth<1200 && screenWidth>992 && isOpen);
    let responsiveVar3= (screenWidth<1200 && screenWidth>992 && !isOpen);
  return (
    <div className='container-fluid dashboard-container'>
  {/* dashboard-container */}

{/* <div className='container-fluid'> */}

<SmallSidebar/>
{/* </div> */}
     {/* ====================    row 1     =================== */}
        <div className='row mt-3'>
            <div className=' col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 box d-flex'>
              <div className='visitors-img'>
                <img src='/images/Layer_1351.png' alt='img'/>
              </div>
              <div className='box-2nd-half' style={{flexDirection:responsiveVar1?'column':'row'}}>

              <div className='total-visitors' style={{fontSize:responsiveVar1?'32px':'40px',}}>38</div>
              <p style={{marginTop:responsiveVar1?'0':'20px',}} >TOTAL VISITORS</p>

              </div>
            </div>

            {/* 2 */}
            <div className=' col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 box  d-flex'>
              <div className='visitors-img'>
                <img src='/images/man.png' alt='img'/>
                <img src='/images/woman.png' alt='img'/>
              </div>
              <div className='box-2nd-half' style={{ flexDirection: responsiveVar1 || responsiveVar2 ? 'column' : 'row',}}  >

              <div className='m-f' style={{fontSize:responsiveVar1 || responsiveVar2 ?'32px':'40px',}}>59/125</div>
              <p style={{marginTop:responsiveVar1 || responsiveVar2?'0':'20px'}}>MALE VS FEMALE</p>

              </div>
            </div>

            {/* 3 */}
            <div className=' col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 box  d-flex'>
              <div className='visitors-img'>
                <img src='/images/Finance.png' alt='img'/>
              </div>
              <div className='box-2nd-half' style={{flexDirection:responsiveVar1?'column':'row'}}>

              <div className='total-visitors' style={{fontSize:responsiveVar1?'32px':'40px',}}>87</div>
              <p style={{marginTop:responsiveVar1?'0':'20px',}}>AVD. AGE</p>

              </div>
            </div>

            {/* 4 */}
            <div className=' col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 box  d-flex'>
              <div className='visitors-img'>
                <img src='/images/Layer_1359.png'className='clock-img' alt='img'/>
              </div>
              <div className='box-2nd-half' style={{flexDirection:responsiveVar1?'column':'row'}}>

              <div className='total-visitors' style={{fontSize:responsiveVar1?'32px':'40px',}}>43</div>
              <p style={{marginTop:responsiveVar1?'0':'20px',}}>AVG. TIME</p>

              </div>
            </div>

            {/* <div className='col-md-3'>2</div>
            <div className='col-md-3'>3</div>
            <div className='col-md-3'>4</div> */}
        </div>

     {/* ====================    row 1  ends   =================== */}







     {/* ====================    row 2     =================== */}

      
        <div className='row mt-3 row-2 '>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 faces-container'>


                <div className='analysis-container d-flex'>
                    <span className='analysis'>ANALYSIS</span>
                    <span className='three'>3</span>
                    {/* <span></span> */}
                </div>



                <div className='faces'>
                {/* style={{height:(screenWidth<1377 && screenWidth>1200 && isOpen)?'2.5vw':'',width:isOpen?'2.5vw':''}} */}
                    <div className='happy ' >
                        {/* <div className='happy-img'></div> */}
                    <img src='/images/POS.png' style={{height:responsiveVar1?'6.5vw':'',width:responsiveVar1?'6.5vw':''}} alt='img'/>
                    <p className='faces-percentage' style={{fontSize:responsiveVar1?'27px':'40px',}}>45 %</p>
                    </div>
                    <div className='nutral'>
                    <img src='/images/NEUTRAL.png'style={{height:responsiveVar1?'6.5vw':'',width:responsiveVar1?'6.5vw':''}} alt='img'/>
                    <p className='faces-percentage'style={{fontSize:responsiveVar1?'27px':'40px',}}>45 %</p>
                    </div>
                    <div className='sad'>
                    <img src='/images/NEG.png' style={{height:responsiveVar1?'6.5vw':'',width:responsiveVar1?'6.5vw':''}}alt='img'/>
                    <p className='faces-percentage'style={{fontSize:responsiveVar1?'27px':'40px',}}>45 %</p>
                    </div>
                </div>

            </div>


            {/* <div className='vertical-line'></div> */}
              {/* ================================================================ */}
              <div className=' row2-btns1  '> <div className='last-year'>
                    <div className='arrow-img'>
                <img src='/images/Shape_1123.png' alt='img'/> </div>
                    <p className='chat-btn-txt'> Last Year </p>
                    </div> <div className='chat-btn-txt chart-btns1'>amount of visitors</div>
                <div className='chat-btn-txt chart-btns2'>male vs female</div>
                <div className='chat-btn-txt chart-btns3'>avg. age</div>
                <div className='chat-btn-txt chart-btns4'>avg.time</div>
            </div> 

            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8  d-flex row2-secondContainer'>
            <div className='vertical-line d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block'></div> 
            <div className='fillchart-container '>
<div className='stats'>STATISTICS</div>
             <FillChart/>
            </div>

             <div className=' row2-btns ms-auto '>
                
                <div className='last-year'>
                    <div className='arrow-img'>
                <img src='/images/Shape_1123.png' alt='img'/>

                    </div>
                    <p className='chat-btn-txt'> Last Year </p>
                    </div>

                <div className='chat-btn-txt chart-btns1'>amount of visitors</div>
                <div className='chat-btn-txt chart-btns2'>male vs female</div>
                <div className='chat-btn-txt chart-btns3'>avg. age</div>
                <div className='chat-btn-txt chart-btns4'>avg.time</div>
                
            
            </div> 
                
            </div>
         
           
        </div>

        {/* =================== r0w3   ===================== */}

        <div className='row mt-3 row-3'>
          <div className=' col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4'>
            <div className='row3-head d-flex'>
            <p>Male vs female</p>
            <img src='/images/5-layers.png' className='ms-auto dots' alt='img'/>
            </div>
            <div className='row3-col1-body'>
            <div className='men-div'>
            <img src='/images/4-layers.png' alt='img'/>
            <p>40 %</p>
             </div>
            <div className='women-div'>
            <img src='/images/3-layers.png' alt='img'/>
            <p>50 %</p>
            </div>

            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-6  col-lg-3 col-xl-3 text-center d-flex  '>
            <div className='row-3-vline d-none d-xl-block'></div>

            <div style={{width:'100%'}}>

          <div className='row3-head d-flex'>
            <p className='dwell'>avg. dwell time</p>
            <img src='/images/5-layers.png' className='ms-auto dots' alt='img'/>
            </div>
            <div className='row3-col2-body'>
            <img src='/images/newtime.png' className=' mt-5' alt='img'/>
            </div>

            </div>


          </div>
          {/* ==================  table =============== */}

          <div className='col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 d-flex'>
          <div className='row-3-vline d-none d-xl-block'></div>
          <div style={{width:'100%'}}>

            <Table1/>
          </div>


          </div>
        </div>

        <div className='row row-4'>
          <div className='col-md-4'></div>
          <div className='col-md-4 text-center'>

        <img src='/images/Aqomi_Logo.png' className=' mb-5' alt='img'/>
          </div>
          <div className='col-md-4'></div>
        </div>


    </div>
  )
}
