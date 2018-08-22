const CHART = document.getElementById("lineChart");
let lineChart = new Chart(CHART, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [{
          label: "Months",
          fill: true,
          lineTension: 0.1,
          borderColor: "rgb(14, 100, 175)",
          backgroundColor: "rgb(181, 10, 10)",
          data: [65, 59, 80, 81, 56, 55, 40, 50]
        }],
        datasets: [{
          yAxisID: 'Temperatures'
        }]
      },//data
      options:{
        scales: {
          yAxes: [{
            id: 'Temperatures',
            type: 'linear',
            ticks: {
              min: 0,
              max: 90
            }
          }]
        }
      }
    }//linechart
);
