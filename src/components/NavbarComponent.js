import React from 'react'


export default function NavbarComponent({toggle}) {
  return (
    <div>
   <nav class="navbar  navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   
   <div className='navbar-brand d-flex'>

    <div className='logo-container'>
      <img src='/images/logo.png' alt='logo'/>  
      <span className='logo-text'>RECOGNITION</span>

        </div>

        <div class="left-menu  d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block " onClick={toggle}>
              <div class="line-1"></div>
              <div class="line-2"></div>
              <div class="line-3"></div>
              {/* <div class="line-4"></div> */}
            </div>



            















   </div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
    {/* <form class="d-flex" role="search"> */}
    <div className='search-option d-flex'>

        <input class="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search"/>
        <div className='searchh-icon'>

        <img src="/images/Search_Icon.png" alt='search-logo' />
        </div>
    </div>
        
      {/* </form> */}
      <ul class="navbar-nav ms-auto d-flex gap-3">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#"></a>
           */}
           <div className='setting-icon'>
           <img src="/images/Setting_icon.png" alt='sett' />
           </div>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">Features</a> */}
          <div className='notification'> 7 </div>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">Pricing</a> */}
          <div className='user-icon'></div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <p class="text-2">T. JOBLONSKI</p>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">Features</a> */}
          <div className='collapse-icon'>
            <img src="/images/Right_Menu.png" alt='collapse' />
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}
