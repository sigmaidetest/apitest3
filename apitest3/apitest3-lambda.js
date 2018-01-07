let AWS = require('aws-sdk');

    exports.handler = function(event, context){
        console.log(event);
        context.done(null, "Success");
    }