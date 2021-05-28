import Link from 'next/link';
import {TradingViewEmbed, widgetType} from "react-tradingview-embed";
import LandingExplainer from '../components/landing/landing-explainer';
import SignUpOrIn from '../components/landing/sign-up-or-in';

function HomePage() {
    const routes = [
        {id: '/assets', name:'assets'}
    ]
    return(
        <div>
            <TradingViewEmbed
            widgetType={widgetType.TICKER_TAPE}
            widgetConfig={{
              showSymbolLogo: true,
              isTransparent: false,
              displayMode: "adaptive",
              colorTheme: "dark",
              autosize: true,
              symbols: [
                {
                  proName: "BITSTAMP:ETHUSD",
                  title: "ETH/USD"
                },
                {
                  proName: "BITSTAMP:BTCUSD",
                  title: "BTC/USD"
                },
                {
                  proName: "BINANCE:BNBUSDT",
                  title: "BNB/USDT"
                },
                {
                  proName: "BINANCE:ADAUSD",
                  title: "ADA/USD"
                },
                {
                  proName: "BINANCE:DOTUSDT",
                  title: "DOT/USDT"
                },
                {
                  proName: "BINANCE:UNIUSDT",
                  title: "UNI/USDT"
                }
              ]
            }}
          />

            <div className="explainer">
                <LandingExplainer />
            </div>
            <div className="landingSign">
                <SignUpOrIn />
            </div>
            <div className="screener">
            <TradingViewEmbed
            widgetType={widgetType.SCREENER_CRYPTOCURRENCY}
            widgetConfig={{
                "width":100 + "%",
                "defaultColumn": "overview",
                "screener_type": "crypto_mkt",
                "displayCurrency": "USD",
                "colorTheme": "dark",
                "locale": "en"
            }}/>
            </div>

        </div>
    )
}

export default HomePage;