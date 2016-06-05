var mqtt = require('mqtt');
var consts = require('./../constantvals');

// get the device id from command line
var deviceId = process.argv[2]; 
var interval = 2000;

var client = mqtt.connect(consts.server);

client.on('connect', function () {
    // subscibe to the topic that we'll receive the commands
    client.subscribe(consts.commandTopic);
    
    // configure it to call sendSensorReading with defined intervals
    setInterval(sendSensorReading, interval);
});

client.on('message', function (topic, message) {
    var msg = JSON.parse(message);
    
    // execute processCommand only if it's for this specific device
    if(msg.deviceId == deviceId)
        processCommand(msg.command, msg.value);
    
    console.log('[' + topic + '] ' + message.toString());
});

client.on('error', function (err) {
    console.log('ERROR: ' + err);
    client.stream.end();
});

function processCommand(cmd, val) {
    // [TODO-WS] Replace with something to process command 
    console.log('Command processed: ' + cmd + '-' + val);
}

function sendSensorReading() {
    // [TODO-WS] Replace with something to read sensor data and send
    var msg = { deviceId: deviceId, value: randomInt(1, 10) };
    client.publish(consts.telemetryTopic, JSON.stringify(msg));
}

// [TODO-WS] Remove
function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
