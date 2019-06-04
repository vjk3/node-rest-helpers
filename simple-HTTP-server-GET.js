const http = require('http')

let handleRequest = (req, res) => {
	console.log(req.url)
}

let server = http.createServer(handleRequest)

server.listen(8080)
