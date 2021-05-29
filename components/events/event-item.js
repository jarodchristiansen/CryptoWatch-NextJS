import classes from './event-item.module.css';
import Button from '../ui/button';
import CardChart from './card-chart';
import {useState} from 'react';


function EventItem(props) {
    const {title, image, id, symbol, description, price} = props;
    const [scale, setScale] = useState();
    // console.log(price)
    // const humanReadableDate = new Date(date).toLocaleDateString('en-US', {day: 'numeric', month:'long', year:'numeric'})
    function timeScale(n) {
        setScale(n)
    }
    
    // const fomrattedAddress = location.replace(', ', '\n')
    const exploreLink = `/assets/${symbol}`;
    return (
    <li className={classes.item}>
    <div className={classes.imgRow}>
    <img className={classes.img} src={image} alt=''/>
    <div className={classes.column}>
    <h3 className={classes.title}>{title}  - {symbol}</h3>
        <Button link={exploreLink}>
            <span>Explore</span>
        </Button>
        <div className={classes.timeScale}>
        <button onClick={() => timeScale(7)}>7D</button>
        <button onClick={() => timeScale(14)}>14D</button>
        <button onClick={() => timeScale(30)}>30D</button>
        <button onClick={() => timeScale(90)}>90D</button>
        </div>
    </div>
    </div>
    <div className={classes.chart}>
        <CardChart price={price} time={scale} symbol={symbol}/>
    </div>
    </li>
    )
}

export default EventItem;