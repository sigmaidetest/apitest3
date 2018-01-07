let AWS = require('aws-sdk');

    exports.handler = function(event, context, callback){

    console.log("Parameters", event);
    callback(null, "success");

    }