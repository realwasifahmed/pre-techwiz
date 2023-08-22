const cts = document.getElementById('barchart');

new Chart(cts, {
  type: 'line',
  data: {
    labels: ['5 Aug', '6 Aug', '7 Aug', '8 Aug', '9 Aug', '10 Aug'],
    datasets: [{
      label: 'Weights',
      data: [14, 19, 3, 5, 2, 3],
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