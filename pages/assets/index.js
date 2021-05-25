import {useState} from 'react';
// import { getEventById, getFeaturedEvents, getEventsById } from '../../dummy-data';
import { getFeaturedEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';

function AssetsPage(props) {
    // const featuredEvents = getFeaturedEvents();
    // const featuredEvent = getEventById('BTC');
    // const eventsById = getEventsById('BTC');
    const [events, setEvents] = useState([])

    return (
    <div>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <button type="submit">Register</button>
    
     <EventList items={props.events}/>
    </div>
    )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
      props: {
          events: featuredEvents
      }
      
  }
}


export default AssetsPage;