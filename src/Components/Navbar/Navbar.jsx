import { useState } from "react"
import "./Navbar.css"
import {Link} from 'react-scroll'
import Mobileview from "./Mobileview/Mobileview";
const Navbar=()=> {
    const [openMenu, setOpenMenu]=useState(false);

    const toggleMenu=()=>{
      setOpenMenu(!openMenu);
    }
  return (
    <>
    <Mobileview isOpen={openMenu} togglemenu={toggleMenu}/>
    <nav  className='header'>
        <div className='container'>
        <p className='port'>Hages <span className="dot">.</span></p>
        <div className="items">
        <ul className="ulist">
            <Link spy={true} to="Home" smooth={true}>
            <li className="list">Home</li>
            </Link>

            <Link spy={true} to="Skills" smooth={true}>
            <li className="list">Skills</li>
            </Link>

            <Link spy={true} to="Project" smooth={true}>
            <li className="list">Projects</li>
            </Link>

            <Link spy={true} to="Contact Me" smooth={true}>
            <li className="list">Contact Me</li>
            </Link>

            <Link spy={true} to="Contact Me" smooth={true}>
            <button className="hmbtn" >Hire Me</button>
            </Link>
        </ul>
       
        <button className="Menubtn" onClick={toggleMenu}>
          <span 
          style={{fontSize:"1.8rem"}}>
            {openMenu ? <i className="fa-solid fa-xmark fa-2xs"></i>: 
            <div className="Menu" >
              <i className="fa-solid fa-bars fa-2xs"></i>
            </div> }
          </span>
          {/*<i className="fa-solid fa-bars"></i>*/}</button>
        </div>
        
        </div>
    </nav>
    </>
  )
}
export default Navbar;

