const http = require('http')

let send = (res, msg) => {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	res.end(msg)
}

let handleRequest = (req, res) => {
	if(req.method == 'POST') {
		let body = ''
		
		req.on('data', chunk => body += chunk.toString())
		
		req.on('end', () => {
			send(res, body)
		})
	} else if(req.method == 'GET') {
		send(res, 'Hi there!')
	}
	
}

let server = http.createServer(handleRequest)

server.listen(8080)
