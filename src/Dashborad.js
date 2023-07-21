import React ,{useState} from 'react'
import NavbarComponent from './components/NavbarComponent'
import Sidebar from './components/Sidebar'
import DashboardContent from './components/DashboardContent'


export default function Dashborad() {
  const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
  return (
    <div className='body'>
<NavbarComponent toggle={toggle}/>
<div className='section border border-dark d-flex'>
 
    <Sidebar toggle={toggle} isOpen={isOpen}/>

    {/* dashboard */}
  
  <DashboardContent isOpen={isOpen}/>

</div>

      
    </div>
  )
}
