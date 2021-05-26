import {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';


function CardChart(props) {
    const { price, symbol} = props;
    const [chartData, setChartData] = useState();
    const [labels, setLabels] = useState();
    const [fibs, setFibs] = useState();
    let labelHolder = [];
    let chartHolder = [];

function processPrice(price) {
    if(price) {
    price.splice(0).slice(-30).map((y) =>  {
        labelHolder.push(y.datetime)
        chartHolder.push(y.close)      
    })
    setChartData(chartHolder)
    setLabels(labelHolder)
    let priceMax = Math.max(...chartHolder);
    let priceMin = Math.min(...chartHolder);
    let diff = priceMax - priceMin;
    let level1 = priceMax - (0.236 * diff)
    let level2 = priceMax - (0.382 * diff)
    let level3 = priceMax - (0.500 * diff)
    let level4 = priceMax - (0.618 * diff)
    setFibs([level1, level2, level3, level4])
    //Fib levels need to be level2 -> level1 | leve3 -> level2 | level4 -> level3
 } else {
     setChartData()
     setLabels()
 }
}    

useEffect(() => {
    processPrice(price)
}, [])

const data = {
    labels,
    datasets: [
      {
        label: symbol,
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
        data: chartData
      },
      {
        label: 'fibs',
        backgroundColor: 'rgba(75,192,192,0.4)',
        fill: true,
        data: fibs
      },
    ]
  };
    return ( 

        <div>
          <Line
         data={data}
         height={200}
         /> 
        </div>
    // <ul>
    //     {price.splice(0,2).map((event) =><li key={price.datetime}>{price.close}</li>)}
    // </ul>
    )
}

export default CardChart;