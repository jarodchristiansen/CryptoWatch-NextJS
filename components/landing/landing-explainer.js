import classes from './landing-explainer.module.css'

function LandingExplainer() {
    return (
        <div className={classes.columnHolder}>
            <div className={classes.columnLeft}>
                <span>If you've been around crypto for a while, you've probably seen a lot of different applications that provide data. At TokenWatch, we often find that these applications are siloed and only focus only particular types of data; leaving an incomplete picture that doesn't quite match up with reality.</span>
                    <br/>
                   <span> We hope to change that, with comprehensive analytics behind each asset, and portfolio tracking with custom portfolio analytics.
                </span>
            </div>
            <div className={classes.columnRight}>
                <ul className={classes.landingList}>
                    <li className={classes.landingItem}>Realtime Asset Price Data</li>
                    <li className={classes.landingItem}>Historical Data with Comprehensive Viewing</li>
                    <li className={classes.landingItem}>Realtime Social Metrics/Influencer Posts</li>
                    <li className={classes.landingItem}>Onchain Metrics with Glassnode/Web3 Connectivity</li>
                    <li className={classes.landingItem}>Portfolio Tracking and Analytics</li>
                </ul>
            </div>
        </div>
    )
}


export default LandingExplainer;