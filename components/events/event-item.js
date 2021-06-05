import classes from './event-item.module.css';
import Button from '../ui/button';
import CardChart from './card-chart';
import {useState} from 'react';


function EventItem(props) {
    const {title, image, id, symbol, description, price} = props;
    // console.log(price)
    // const humanReadableDate = new Date(date).toLocaleDateString('en-US', {day: 'numeric', month:'long', year:'numeric'})

    
    // const fomrattedAddress = location.replace(', ', '\n')
    const exploreLink = `/assets/${symbol}`;
    return (
    <li className={classes.item}>
    <div className={classes.imgRow}>
    <img className={classes.img} src={image} alt=''/>
    <div className={classes.column}>
    <h3 className={classes.title}>{title}  - {symbol}</h3>
        <Button link={exploreLink}>
            <span className={classes.explore}>Explore</span>
        </Button>
    </div>
    </div>
    <div className={classes.chart}>
        <CardChart price={price} time_scale={90} symbol={symbol}/>
    </div>
    </li>
    )
}

export default EventItem;