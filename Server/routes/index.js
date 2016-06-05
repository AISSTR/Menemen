var express = require('express');
var mqServer = require('./../server');

var router = express.Router();

router.get('/', function(req, res, next) {
  var dataPoints = mqServer.getDeviceTelemetryData(req.query.deviceId);

  dataPoints.sort(function(a, b) {
      return parseInt(b.timeStamp) - parseInt(a.timeStamp);
  });
  
  res.render('index', { title: 'Device Data', deviceId: req.query.deviceId, dataPoints: dataPoints });
});

router.get('/data', function(req, res) {
  var dataPoints = mqServer.getDeviceTelemetryData(req.query.deviceId);

  dataPoints.sort(function(a, b) {
      return parseInt(b.timeStamp) - parseInt(a.timeStamp);
  });
  
  res.render('deviceDataTable', { dataPoints: dataPoints });
});

router.post('/cmd', function(req, res) {
  mqServer.sendCommand(req.body.deviceId, req.body.command, req.body.value);
});

module.exports = router;