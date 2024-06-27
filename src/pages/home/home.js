import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../../components/nav/nav';
import './home.css';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import settings from '../../data/settings';

function Home() {
    return(
        <div id='home-wrapper'>
            <Nav></Nav>
            <div id='home-content-wrapper'>
                <h2>The Abra</h2>
                <h4>Art. Music. Community</h4>
                <p id='ig-icon'><a href='https://www.instagram.com/the.abra.egad/'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></p>
                
                <p id='live-light' className={settings.live.currently ? 'live-now' : 'not-live-now'}>{`${settings.live.currentArtist}`} 
                    {/* <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> */}
                    </p>
                
            </div>
        </div>
    )
}

export default Home;