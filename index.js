
var WebSocketServer = require('ws').Server
// var wss = new WebSocketServer({
//         //host : '0.0.0.0',
//         port : 8080
// });

// var array = [null,null]
var hmd = null;
var tab = null;



var wss_tab = new WebSocketServer({
        //host : '0.0.0.0',
        port : 8000
});
var wss_hmd = new WebSocketServer({
        //host : '0.0.0.0',
        port : 8080
});

wss_tab.on('connection',function(ws){
  console.log("Connected Tablet");
  tab = ws;

  ws.on('message', function (message) {
    console.log('received: %s', message);
    if(hmd != null){
      hmd.send(message);
    }
  });

  ws.on('close', function(){
    console.log("Disconnected Tablet");
  });
});

wss_hmd.on('connection',function(ws){
  console.log("Connected HMD");
  hmd = ws;

  ws.on('close', function(){
    console.log("Disconnected HMD");
  });
});


//
// wss.on('connection', function(ws) {
//         console.log('Connected');
//         if(array[0] == null){
//                 array[0] = ws;
//         }else if(array[1] == null){
//                 array[1] = ws;
//         }
//         ws.on('message', function(message) {
//                 console.log('received: %s', message);
//         //      ws[0].send(message);
//                 if(array[0] != null && array[1] != null){
//                         if(ws == array[0]){
//                                 array[1].send(message);
//                         }else{
//                                 array[0].send(message);
//                         }
//                 }
//
//         });
// });
