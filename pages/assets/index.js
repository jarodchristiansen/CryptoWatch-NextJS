import {useState} from 'react';
import { getEventById, getFeaturedEvents, getEventsById } from '../../dummy-data';
import EventList from '../../components/events/event-list';

function AssetsPage() {
    // const featuredEvents = getFeaturedEvents();
    // const featuredEvent = getEventById('BTC');
    // const eventsById = getEventsById('BTC');
    const [events, setEvents] = useState(getFeaturedEvents())

    return (
    <div>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <button type="submit">Register</button>
    
     <EventList items={events}/>
    </div>
    )
}

export default AssetsPage;