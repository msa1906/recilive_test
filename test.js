/**
 * Created by Administrator on 2017/3/12.
 */

const socket = new WebSocket('ws://localhost:8080','echo-protocol');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server', event.data);
});