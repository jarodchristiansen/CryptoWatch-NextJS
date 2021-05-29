import classes from './social-post.module.css';
import {useState, useEffect} from 'react';

function SocialPost(props) {

    const {displayName, time, body, profileImage, retweets, likes, screenName} = props;


    return(
        <li>
            <div className={classes.tweetNameRow}>
            <img src={profileImage} className={classes.profilePic}/>
            <h6>{displayName} - @{screenName}- {time}</h6>
            </div>
            <div>
            <p className={classes.tweetBody}>{body}</p>
            </div>
            <div>
            {retweets} {likes}
            </div>
        </li>
    )
}


export default SocialPost;