import { NavLink, useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();

    return ( 
        <nav>
            <div className="logo-wrapper">
                <p className='logo'>EL</p>
                <p className='logo-ab'>EasyLoan</p>
            </div>
            <ul>
                <li><NavLink to="">Home</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
                <li><NavLink to="services">Services</NavLink></li>
                <li><NavLink to="Contact">Contact</NavLink></li>
                <li><button className='nav-btn' onClick={() => navigate('apply-loan')}>Apply for loan</button></li>
            </ul>
        </nav>
     );
}
 
export default Nav;