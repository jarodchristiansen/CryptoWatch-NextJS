import Link from 'next/link';

import classes from './event-item.module.css';
import Button from '../ui/button';

function EventItem(props) {
    const {id, title, imageUrl, symbol, category, tags} = props;

    // const humanReadableDate = new Date(date).toLocaleDateString('en-US', {day: 'numeric', month:'long', year:'numeric'})
    
    // const fomrattedAddress = location.replace(', ', '\n')
    const exploreLink = `/assets/${symbol}`;
    return (
    <li className={classes.item}>
    <img className={classes.img} src={imageUrl} alt=''/>
    <div className={classes.content}>
    <div className={classes.title}>
       {title.length < 6 ? <h2>{title}</h2> : <h2>{symbol}</h2>}
    </div>
    <ul className={classes.categoryContain}>
        {tags.slice(0,3).map((y) => <li key={y}>{y}</li>)}
    </ul>
    <div>
    <Button link={exploreLink}>Details</Button>
    </div>
    </div>
    </li>
    )
}

export default EventItem;