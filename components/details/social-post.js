import classes from './social-post.module.css';
import {useState, useEffect} from 'react';

function SocialPost(props) {

    const {displayName, time, body, profileImage, retweets, likes, screenName, url} = props;


    return(
        <li className={classes.tweetList}>
            <a href={url} target="#">
            <div className={classes.tweetNameRow}>
            <img src={profileImage} className={classes.profilePic}/>
            <h6 className={classes.tweetTitle}>{displayName} - @{screenName}- {new Date(time * 1000).toLocaleDateString()}</h6>
            </div>
            </a>
            <div>
            <p className={classes.tweetBody}>{body}</p>
            </div>
            <div className={classes.tweetNameRow}>
            <h6 className={classes.retweets}>{'retweets: ' + retweets}</h6> 
            <h6 className={classes.likes}>{'likes: ' + likes}</h6>
            </div>
        </li>
    )
}


export default SocialPost;