// Define the refreshData function to update sensor values
function refreshData() {
    // Simulate fetching new sensor data (replace with actual data retrieval)
    const newData = {
      co2: getRandomValue(0.3, 0.5), 
      co: getRandomValue(0.2, 0.4),       
      alco: getRandomValue(0, 1),   
      nh4: getRandomValue(0.5, 0.7),      
      tolu: getRandomValue(0, 0.5),      
      acet: getRandomValue(0, 0.20),     
      temperature: getRandomValue(27, 31), 
      humidity: getRandomValue(77, 85)    
    };
  
    // Update the displayed sensor values with the new data
    document.getElementById('co2-value').textContent = newData.co2;
    document.getElementById('co-value').textContent = newData.co;
    document.getElementById('alco-value').textContent = newData.alco;
    document.getElementById('nh4-value').textContent = newData.nh4;
    document.getElementById('tolu-value').textContent = newData.tolu;
    document.getElementById('acet-value').textContent = newData.acet;
    document.getElementById('temperature-value').textContent = newData.temperature;
    document.getElementById('humidity-value').textContent = newData.humidity;
  
    // Optional: Display a message or perform other actions after data refresh
    console.log('Sensor data refreshed successfully.');
  }
  
  // Function to show a line graph of sensor data
  function showGraph() {
    // Prepare sensor data (replace with actual data retrieval)
    const labels = ['CO2', 'CO', 'Alcohol', 'NH4', 'Toluene', 'Acetone'];
    const data = [
      getRandomValue(300, 2000),
      getRandomValue(1, 50),
      getRandomValue(0, 100),
      getRandomValue(0, 10),
      getRandomValue(0, 5),
      getRandomValue(0, 20)
    ];
  
    // Create a new Chart.js instance or update existing one
    const ctx = document.getElementById('sensorChart').getContext('2d');
  
    if (sensorChart) {
      // Update chart data and redraw
      sensorChart.data.datasets[0].data = data;
      sensorChart.update();
    } else {
      // Create new chart
      sensorChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Sensor Readings',
            data: data,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2
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
    }
  
    // Optional: Display a message or perform other actions after showing the graph
    console.log('Graph displayed successfully.');
  }
  
  // Helper function to generate random value within a range
  function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  