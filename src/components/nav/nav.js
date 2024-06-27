import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav(){
    return(
        <div id='nav-wrapper'>
        <ul>
            <li><img alt='logo' src='https://i.postimg.cc/ry4PmK8j/logo.png'></img></li>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/events'>Events</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
    </div>
    )
}

export default Nav;