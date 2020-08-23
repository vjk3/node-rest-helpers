const https = require('https')
const fs = require('fs')

/*
  See https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/
  for a guide on how to generate proper self-signed SSL certs for localhost that run in Google Chrome on Mac OS
*/
const SSLoptions = {
	key: fs.readFileSync('../SSLKEYCERT/localhostSSL.key'),
	cert: fs.readFileSync('../SSLKEYCERT/localhostSSL.crt')
}

const handleResponse = (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	res.end('Hi there!')
}

https.createServer(SSLoptions, handleResponse).listen(8000)
