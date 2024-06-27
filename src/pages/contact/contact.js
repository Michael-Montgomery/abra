import Nav from '../../components/nav/nav';
import './contact.css';

function Contact() {
    return(
        <div id='home-wrapper'>
        <Nav></Nav>
        <div id='contact-wrapper'>
            <form>
                <h2>We would love to hear from you!</h2>
                <input className='half' placeholder='First Name'></input>
                <input className='half' placeholder='Last Name'></input><br></br>
                <input type='email' placeholder='Email Address' className='full'></input><br></br>
                <textarea placeholder='Your Message Here...' className='full'></textarea><br></br>
                <button>Send</button>
            </form>
        </div>
    </div>
    )
}

export default Contact;