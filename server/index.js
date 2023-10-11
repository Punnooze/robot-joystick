const express = require('express');
const mqtt = require('mqtt');

const cors = require('cors');

const app = express();
app.use(cors());
const port = 3001; // Replace with your desired port number
const mqttBrokerUrl = 'mqtt://10.71.172.126'; // Replace with the Raspberry Pi's IP address

const topic = '/ros2_topic'; // Replace with the same ROS2 topic you subscribed to
const client = mqtt.connect(mqttBrokerUrl);

global.response = null;

client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

client.on('error', (error) => {
  console.error('MQTT Error:', error);
});

client.on('offline', () => {
  console.warn('MQTT broker is offline');
});

// global.app.get('/', (req, res) => {
//   res.send('Express server running');
// });

app.post('/api/message', (req, res) => {
  try {
    const { message } = req.query;
    if (message) {
      client.publish(topic, message);
      console.log(`Published initial message: ${message}`);
    }
    res.status(200).json({ message: 'received' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// console.log(response);

// client.on('connect', () => {
//   console.log('Connected to MQTT broker');
// });

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);

  // Send a message to ROS2 upon loading
  // while(1)
  // {
  // const initialMessage = 'Hello, ROS2 upon loading!';
});

// app.use('/api', routes);
