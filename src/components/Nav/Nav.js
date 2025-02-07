import { NavLink, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";

const Nav = () => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(!isOpen);
    }

    return ( 
        <nav>
            <div className="logo-wrapper">
                <p className='logo'>EL</p>
                <p className='logo-ab'>EasyLoan</p>
            </div>
            <ul className='nav'>
                <li><NavLink to="">Home</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
                <li><NavLink to="services">Services</NavLink></li>
                <li><NavLink to="Contact">Contact</NavLink></li>
                <li><button className='nav-btn' onClick={() => navigate('apply-loan')}>Apply for loan</button></li>
            </ul>
            <div className='mobile-nav'>
                <GiHamburgerMenu onClick={() => openNav()} />
                {isOpen && <div className='mobile-menu'>
                    <div className='close-icon'><IoCloseOutline onClick={() => setIsOpen(false)}/></div>
                    <ul>
                        <li><NavLink to="" onClick={() => openNav()}>Home</NavLink></li>
                        <li><NavLink to="about" onClick={() => openNav()}>About</NavLink></li>
                        <li><NavLink to="services" onClick={() => openNav()}>Services</NavLink></li>
                        <li><NavLink to="Contact" onClick={() => openNav()}>Contact</NavLink></li>
                        <li><button className='nav-btn' onClick={() => {navigate('apply-loan'); openNav();}}>Apply for loan</button></li>
                    </ul> 
                    </div> 
                } 
            </div>
        </nav>
     );
}
 
export default Nav;