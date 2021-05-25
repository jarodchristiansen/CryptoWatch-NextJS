import { useRouter, withRouter } from 'next/router';
// import { TradingViewEmbed, widgetType } from "react-tradingview-embed";


function AssetDetails() {
    const router = useRouter();

    let id = router.query.id
    console.log(router.query)

    return (
        <div>
            <h1>Hello Assets Details</h1>
            {id}
            {/* <TradingViewEmbed
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
            /> */}

        </div>
    )
}

export default AssetDetails;