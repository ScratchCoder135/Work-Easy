function httpget(location,callback) {

    var http = require('http');
body=""


    var req = http.request(location, function (res) {

        res.on('data', function (chunk) {
            body += chunk;
            callback(body)
        });


    });

    req.on('error', function (e) {
        console.log(e.message);
    });
    req.end();

    return body
}

exports.httpget = httpget;