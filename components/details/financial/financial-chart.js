import Link from 'next/link'
import fetch from 'unfetch'
import {useState, useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';
import FinancialData from './financial-data';

import useSWR from 'swr'



function FinancialChart(props) {
  let responseData;
  let volume = [];
  let timeArray = [];
  let volatility = [];
  let closes = [];
  let percentChange = [];
  let maxSupply = '';
  let oneDay = '';
  let sevenDay = '';
  let thirtyDay = '';
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const id = props.id;
  let key = '688o9wuzvzst3uybpg6eh';
  const fetcher = url => fetch(url).then(r => r.json());
  const { data, error } = useSWR(`https://api.lunarcrush.com/v2?data=assets&key=${key}&symbol=${id}&data_points=90&interval=day`, fetcher)

  useEffect(() => {
    console.log('window.innerHeight', window.innerHeight);
    console.log('window.innerHeight', window.innerWidth);
}, [])

  if(data) {
  responseData = data.data[0].timeSeries;
//   console.log(responseData)
  maxSupply = data.data[0].max_supply;
  oneDay = data.data[0].percent_change_24h;
  sevenDay = data.data[0].percent_change_7d;
  thirtyDay = data.data[0].percent_change_30d;
  console.log(data.data)
    responseData.map((y) => {
    volatility.push(((y.volatility * 10) * y.close));
    closes.push((y.close));
    timeArray.push(new Date(y.time * 1000).toLocaleDateString());
    percentChange.push((y.percent_change_24h * y.close) / 100);
    // contribArray.push(y.social_contributors)
    // urlArray.push(y.url_shares)
  })
  }
  
  const data2 = {
    labels: timeArray,
    datasets: [
      {
        type: 'bar',
        label: `Closing Price`,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: closes
      },
      {
        type: 'line',
        label: 'Volatility % Scaled to Price',
        backgroundColor: 'rgba(0, 0, 0, 0.56)',
        data: volatility,
        borderColor: 'rgba(0, 0, 0, 0.41)',
        pointRadius: 1,
      },
      {
        type: 'line',
        label: 'Percent Change',
        backgroundColor: 'purple',
        data: percentChange,
        borderColor: 'purple',
        pointRadius: 1,
      },
    //   {
    //     type: 'line',
    //     label: 'Url Shares',
    //     backgroundColor: 'blue',
    //     data: urlArray,
    //     borderColor: 'blue',
    //     pointRadius: 1,
    //   }
    ],
  };
    


  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
    <h1>Financial Metrics</h1>
    <div>
      <FinancialData supply={maxSupply} one={oneDay} seven={sevenDay} thirty={thirtyDay}/>
    </div>
  <div className={'social1'}>
    <Bar data={data2} 
         height={windowHeight > 600 ? windowHeight * 0.3 : windowHeight}
          />
    {/* <ul>
    {socialGlobalArray.map((y) => {
      return <li key={y}>{y}</li>
    })}
    </ul> */}
  </div>
  </div>
  )
}

export default FinancialChart;