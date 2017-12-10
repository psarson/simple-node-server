// Require dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {  

    console.dir(req.param);

    var text= ""

    if (req.method == 'POST') {
        console.log("POST");
        var body = '';
        req.on('data', function (data) {
            body += data;
            console.log("Partial body: " + body);
        });
        req.on('end', function () { 
            text = body
            console.log("Body: " + body);
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received'); 
    }
    else
    {
        console.log("GET");
        var html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }
} 

// Starts our server.
server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});