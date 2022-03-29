var express = require('express');
var app = express();


app.get('/test', function (request, response, next) {
    response.send(request.method + ' to path ' + request.path);
});

// respond to any request for any path
app.all('*', function (request, response, next) {
    response.send(request.method + ' to path ' + request.path);
});

app.use(express.static(__dirname + '/public'));

app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback
