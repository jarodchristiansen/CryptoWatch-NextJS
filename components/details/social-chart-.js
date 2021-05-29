import classes from './social-chart.module.css'
import SocialMetrics from './social-metrics';
import SocialPosts from './social-posts';
import {useState, useEffect} from 'react';

function SocialChart(props) {
    const {id} = props;
    
    
    return(
    <div className={classes.chartContain}>
        <div className={classes.chartSegment}>
            <SocialMetrics id={id}/>
        </div>
        <div className={classes.chartSegment}>
            <SocialPosts id={id} />
        </div>
    </div>
    )
}


export default SocialChart;