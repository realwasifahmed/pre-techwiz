const cta = document.getElementById('lineChart3');

new Chart(cta, {
  type: 'line',
  data: {
    labels: ['5 Aug', '6 Aug', '7 Aug', '8 Aug', '9 Aug', '10 Aug'],
    datasets: [{
      label: 'Glucose Level',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});