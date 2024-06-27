import Nav from '../../components/nav/nav';
import upcomingEvents from '../../data/upcomingEvents';
import './shows.css';

function Shows() {
    return (

        <div id='home-wrapper'>
            <Nav></Nav>
            <div id='events-wrapper'>
                <h2>Upcoming Events</h2>
                <ul id='upcoming-events-list'>
                    {
                        upcomingEvents.map((event, idx) => {
                            return (
                                <li key={idx}>
                                    <div className='upcoming-event-wrapper'>
                                        <p className='upcoming-event-title'>{event.title}</p><br></br>
                                        <p className='upcoming-event-date-time'>{`${event.startDate} @ ${event.startTime}`}</p>
                                        <div className='upcoming-event-details-wrapper'>
                                            {/* <p className='upcoming-event-details-name' style={{display: 'inline'}}>{event.title}</p> */}
                                            <button className='upcoming-event-details-button' onClick={() => {window.location.href = event.detailsUrl}}>More Details</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>



            </div>
        </div>
    )
}





export default Shows;