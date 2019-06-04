const http = require('http')

let handleRequest = (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	})
  
  res.end(req.url)
}

let server = http.createServer(handleRequest)

server.listen(8080)
