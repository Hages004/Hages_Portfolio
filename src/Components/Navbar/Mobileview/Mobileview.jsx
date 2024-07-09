import {Link} from 'react-scroll'
import "./Mobileview.css"

function Mobileview({isOpen,togglemenu}) {
  return (
    <div>
     <div className={`Mobile-menu ${isOpen ? "active": ""}`} onClick={togglemenu}>
      <div className="Mobile-menu-container">
      <p className='port'>Hages <span className="dot">.</span></p>
      <div className="item">
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
       
        {/*<button className="Menubtn"><i className="fa-solid fa-bars"></i></button>*/}
        </div>
      </div>
      </div> 
    </div>
  )
}

export default Mobileview
