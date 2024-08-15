// const SerialPort = require('serialport');
// const axios = require('axios');
import { SerialPort } from 'serialport';
import axios from 'axios';

const portName = 'COM3'; // Adjust based on your system (e.g., 'COM3' for Windows)
const backendUrl = 'http://localhost:4000'; // Replace with your backend URL

const port = new SerialPort({
  path:portName,
  baudRate:9600,
});

port.on('data', (data) => {
  const sensorValue = data.toString().trim(); // Convert buffer to string and remove whitespace

  // Send sensor value to backend server
  axios.post(backendUrl, { sensorValue })
    .then(response => {
      console.log('Sensor value sent to backend:', sensorValue);
    })
    .catch(error => {
      console.error('Error sending sensor value to backend:', error);
    });
});
