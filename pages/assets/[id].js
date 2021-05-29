import { useRouter, withRouter } from 'next/router';
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import SocialChart from '../../components/details/social-chart-';

function AssetDetails() {
    const router = useRouter();

    let id = router.query.id
    console.log(router.query)

function loadTradingView(id) {

}  

    return (
        <div>
            <h1>Hello Assets Details</h1>
            {id}
            <SocialChart id={id}/>
            <TradingViewEmbed
              widgetType={widgetType.ADVANCED_CHART}
              widgetConfig={{
                interval: "1D",
                colorTheme: "dark",
                width: "100%",
                symbol: id + "USD",
                studies: [
                  "MACD@tv-basicstudies",
                  "StochasticRSI@tv-basicstudies",
                  "TripleEMA@tv-basicstudies"
                ]
              }}
            />

        </div>
    )
}

export default AssetDetails;