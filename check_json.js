var http = require("http");
var fs = require("fs");
var diff = require('deep-diff').diff;
var host = process.argv[2];
var port = process.argv[3];
var path = process.argv[4];
var expectedResultFile = process.argv[5];
var JSONexpectedResult = JSON.parse(fs.readFileSync(expectedResultFile, 'utf8'));

var options = {
    host: host,
    port: port,
    path: path,
    method: 'GET'
};

http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        jsonObject = JSON.parse(chunk);
        var differences = diff(jsonObject, JSONexpectedResult);
        if (!differences) {
            console.log("ALL FINE: ",jsonObject);
            process.exit(0);
        } else {
            console.log("RESULT MISMATCH:",differences);
            process.exit(1);
        }
    });
}).end();
