const CHART = document.getElementById("lineChart");
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontFamily = 'Arial';

let lineChart = new Chart(CHART, {
  type: 'line',
  data: {
    labels:['Denver',
            'Greeley',
            'Aurora',
            'Boulder',
            'Thornton',
            'Golden',
            'Lakewood',
            'Fort Collins',
            'Aspen',
            'Vail'
          ],
    datasets:[{
      label: 'Temperatures for populated cities',
      data: [99, 95, 78, 67, 12, 37, 44, 86, 23, 0],
      backgroundColor: 'rgba(22, 106, 170, 0.8)',
      borderColor: 'black',
      borderWidth: '4',
      fill: true,
      pointBackgroundColor: 'black',
      pointBorderWidth: '1',
    }],
    // datasets: [{
    //   yAxisID: "Temperatures"
    // }]
  },
  options: {
    scales:{
      yAxes: [{
        gridLines:{
          display: false,
          drawTicks: true
        },
        label: 'Temp',
        scaleLabel: {
          display: true,
          labelString: 'Temperature(F)',
        },
        id: "Temperatures",
        type: "linear",
        ticks: {
          min: 0,
          max: 100,
          stepSize: 10
        }
      }]
    },
    legend:{
      display: false
    },
    title:{
      display: true,
      text: 'Weather Forecast',
      position: 'top'
    }
  }
})
