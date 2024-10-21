import { NavLink } from 'react-router-dom';
import './nav.css';
import logo from '../../assets/logo.png'

function Nav(){
    return(
        <div id='nav-wrapper'>
        <ul>
            <li><img alt='logo' src={logo}></img></li>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/events'>Events</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
    </div>
    )
}

export default Nav;