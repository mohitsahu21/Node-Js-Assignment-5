var http = require("http");

const httpServer = http.createServer(handleServer);
const port = 8081;

const contacts = {
    phone: '18602100000',
email: 'guestcaredominos@jublfood.com'
}

function handleServer(req, res) {
  const {url} = req;
  console.log(url)
    if (url === "/welcome") {
        res.writeHead(200, { "Content-type": "text/plane" })
        res.end("Welcome to Dominos!")
    }

    else if (url === "/contact") {
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(JSON.stringify(contacts))
    }
    else {
        res.writeHead(404, { "Content-type": "text/plane" })
        res.end("404 not found")
    }
}
httpServer.listen(port,() => {
    console.log("server listen on port -",port)

});

module.exports = httpServer;