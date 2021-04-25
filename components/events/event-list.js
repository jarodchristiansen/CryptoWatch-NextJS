import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList(props) {
    const { items } = props;
    return <ul className={classes.list}>
        {items.map((event) => <EventItem key={event.id} id={event.id} title={event.title} symbol={event.symbol} imageUrl={event.imageUrl} category={event.category} tags={event.tags}/>)}
    </ul>
}

export default EventList;