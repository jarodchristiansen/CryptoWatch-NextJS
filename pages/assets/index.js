import {useState} from 'react';
// import { getEventById, getFeaturedEvents, getEventsById } from '../../dummy-data';
import { getFeaturedEvents, getSearchEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';

function AssetsPage(props) {
    // const featuredEvents = getFeaturedEvents();
    // const featuredEvent = getEventById('BTC');
    // const eventsById = getEventsById('BTC');
    const [events, setEvents] = useState([])


  
async function searchQuery(e) {
    e.preventDefault()
    let returnedEvents = await getSearchEvents(e.target.name.value.toUpperCase())
    setEvents(returnedEvents)
}


    return (
    <div>
    <div className={"search"}>
      <form onSubmit={searchQuery}>
      <input id="name" type="text" autoComplete="name" required />
      <button type="submit">Search</button>
    </form>
    </div>
     <EventList items={events.length > 1 ? events : props.events}/>
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