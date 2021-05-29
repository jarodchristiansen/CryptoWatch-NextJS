import {useState, useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';
import * as ChartAnnotation from 'chartjs-plugin-annotation'
import classes from './card-chart.module.css';

function CardChart(props) {
    const { price, symbol} = props;
    const [chartData, setChartData] = useState();
    const [labels, setLabels] = useState();
    const [time, setTimeScale] = useState(90);
    const [fib1, setFib1] = useState();
    const [fib2, setFib2] = useState();
    const [fib3, setFib3] = useState();
    const [fib4, setFib4] = useState();
    let labelHolder = [];
    let chartHolder = [];
    let day;


function timeScale(t) {
  setTimeScale(t);
}


function processPrice(price) {
    if(price) {
    console.log(time)
    price.splice(0).slice(time).map((y) =>  {
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
    setFib1(new Array(time).fill(level1).flat());
    setFib2(new Array(time).fill(level2).flat());
    setFib3(new Array(time).fill(level3).flat());
    setFib4(new Array(time).fill(level4).flat());
    //Fib levels need to be level2 -> level1 | leve3 -> level2 | level4 -> level3
 } else {
     setChartData()
     setLabels()
 }
}    


useEffect(() => {
    processPrice(price);
}, [time])


const data2 = {
  labels: labels,
  datasets: [
    {
      type: 'line',
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
      type: 'line',
      label: 'Take profit 1',
      backgroundColor: 'rgba(0, 0, 0, 0.56)',
      data: fib1,
      borderColor: 'rgba(0, 0, 0, 0.41)',
      pointRadius: 2,
    },
    {
      type: 'line',
      label: 'Neutral',
      backgroundColor: 'rgba(0, 0, 255, 0.54)',
      borderColor: 'rgba(0, 0, 255, 0.54)',
      pointRadius: 2,
      data: fib2
    },
    {
      type: 'line',
      label: 'Descending 1',
      backgroundColor: 'rgba(0, 255, 0, 0.54)',
      borderColor: 'rgba(0, 255, 0, 0.54)',
      pointRadius: 2,
      data: fib3
    },
    {
      type: 'line',
      label: 'Buy Zone',
      backgroundColor: 'rgba(237, 255, 0, 0.70)',
      borderColor: 'rgba(237, 255, 0, 0.70)',
      pointRadius: 2,
      data: fib4
    }
  ],
};


    return ( 

        <div className={classes.chart}>
          
        <div className={classes.timeScale}>
        <button onClick={() => timeScale(7)}>7D</button>
        <button onClick={() => timeScale(14)}>14D</button>
        <button onClick={() => timeScale(30)}>30D</button>
        <button onClick={() => timeScale(90)}>90D</button>
        </div>
          {time}
          <Bar data={data2} 
          height={250}
          />
          {/* <Line
         data={data}
         height={200}
         plugins={[ChartAnnotation]}
         />  */}
        </div>
    // <ul>
    //     {price.splice(0,2).map((event) =><li key={price.datetime}>{price.close}</li>)}
    // </ul>
    )
}

export default CardChart;