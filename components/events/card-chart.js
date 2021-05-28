import {useState, useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';
import * as ChartAnnotation from 'chartjs-plugin-annotation'

function CardChart(props) {
    const { price, symbol} = props;
    const [chartData, setChartData] = useState();
    const [labels, setLabels] = useState();
    const [fibs, setFibs] = useState();
    const [fib1, setFib1] = useState();
    const [fib2, setFib2] = useState();
    const [fib3, setFib3] = useState();
    const [fib4, setFib4] = useState();
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
    setFib1(new Array(100).fill(level1).flat());
    setFib2(new Array(100).fill(level2).flat());
    setFib3(new Array(100).fill(level3).flat());
    setFib4(new Array(100).fill(level4).flat());
    //Fib levels need to be level2 -> level1 | leve3 -> level2 | level4 -> level3
 } else {
     setChartData()
     setLabels()
 }
}    

useEffect(() => {
    processPrice(price)
}, [])


const rand = () => Math.round(Math.random() * 2000 - 10);
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
      label: 'Fib1',
      backgroundColor: 'black',
      data: fib1,
      borderColor: 'black',
      pointRadius: 1,
    },
    {
      type: 'line',
      label: 'Fib2',
      backgroundColor: 'yellow',
      borderColor: 'yellow',
      pointRadius: 1,
      data: fib2
    },
    {
      type: 'line',
      label: 'Fib3',
      backgroundColor: 'red',
      borderColor: 'red',
      pointRadius: 1,
      data: fib3
    },
    {
      type: 'line',
      label: 'Fib4',
      backgroundColor: 'green',
      borderColor: 'green',
      pointRadius: 1,
      data: fib4
    },
  ],
};


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
    ],
  
  };
    return ( 

        <div>
          <Bar data={data2} 
          height={200}
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