const ctx = document.getElementById('lineChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['40< 40', '50< 50', '70 <70', '80< 80', '90< 90', '100< 100'],
    datasets: [{
      label: 'Blood Pressure',
      data: [12, 19, 3, 5, 2, 3, 14, 50],
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