var mqtt = require('mqtt');
var consts = require('./../constantvals');

var telemetryData = [];
var client = mqtt.connect(consts.server);

function addTelemetryData(deviceId, value, timeStamp) {
    telemetryData.push({ deviceId: deviceId, value: value, timeStamp: timeStamp });
}

module.exports = {

    init: function () {
        client.on('connect', function () {
            client.subscribe(consts.telemetryTopic);
        });

        client.on('message', function (topic, msg) {
            var message = JSON.parse(msg);
            // when a new message is received, add it to the list
            addTelemetryData(message.deviceId, message.value, Date.now());
        });

        client.on('error', function (err) {
            console.log('ERROR: ' + err);
            client.stream.end();
        });
    },

    sendCommand: function (deviceId, cmd, val) {
        var message = { deviceId: deviceId, command: cmd, value: val };
        client.publish(consts.commandTopic, JSON.stringify(message));
    },

    getDeviceTelemetryData: function (deviceId) {
        return telemetryData.filter(function (value) {
            return value.deviceId == deviceId;
        });
    }
}