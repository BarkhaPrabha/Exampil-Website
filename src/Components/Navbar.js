 import logo from './image/exampil-logo.png';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <header>
      <div className="logo">
          <img src={logo} alt="logo" style={{height: "100px", width: "120px"}} />
      </div>
       <div className="menu-icon" onClick={toggleMenu}>
            <div className= {`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

    
      <div className={`menu ${isOpen ? 'open' : ''}`}>

        <Link className="menu1" to="/" >
        Home 
        </Link>
        <Link className="menu2" to="/about" >
          About Us 
        </Link>
        <Link className="menu3" to="/quiz" >
         Quiz
        </Link>
        <Link className="menu4" to="/download" > 
        Download Exampil
        </Link>
        <div className="close-menu" onClick={toggleMenu}><CloseIcon/></div>
      </div>
    </header>
  );
};

export default Navbar;

