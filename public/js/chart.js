var ctx = document.getElementById("myChart").getContext("2d");

const colors = {
  green: {
    fill: '#e0eadf',
    stroke: '#5eb84d',
  },
  purple: {
    fill: '#8fa8c8',
    stroke: '#75539e',
  },
};

const getToken = [0];
const getScore = [0];
const xData = [0];

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: xData,
    datasets: [{
      label: "getToken",
      fill: true,
      backgroundColor: colors.purple.fill,
      pointBackgroundColor: colors.purple.stroke,
      borderColor: colors.purple.stroke,
      pointHighlightStroke: colors.purple.stroke,
      borderCapStyle: 'butt',
      data: getToken,

    }, {
      label: "getScore",
      fill: true,
      backgroundColor: colors.green.fill,
      pointBackgroundColor: colors.green.stroke,
      borderColor: colors.green.stroke,
      pointHighlightStroke: colors.green.stroke,
      data: getScore,
    }]
  },
  options: {
    responsive: false,
    // Can't just just `stacked: true` like the docs say
    scales: {
      yAxes: [{
        stacked: true,
      }]
    },
    animation: {
      duration: 750,
    },
  }
});