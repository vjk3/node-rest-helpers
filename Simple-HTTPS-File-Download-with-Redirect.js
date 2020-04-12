const https = require('https'),
      {writeFile} = require('fs'),
      URL_TO_FETCH = '',
      FILENAME = '',
      headers = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36' };

let saveResponse = response => {
	response.setEncoding('binary')

	let body = []

	response.on('data', chunk => body.push(Buffer.from(chunk, 'binary')))
	
	response.on('end', () => {
		writeFile(FILENAME, Buffer.concat(body), console.log)
	})
}

https.get(
	URL_TO_FETCH,
	{ headers: headers },
	res => {
		if(res.statusCode == 302) {
            // follow the redirect
			https.get(
				res.headers.location,
				{ headers: headers },
				saveResponse
			)
		} else {
			console.log(res)
		}
	}
)
