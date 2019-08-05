https.get(
	URL_TO_FETCH,
	{
		headers: {
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
			'Accept': 'application/json'
		}
	},
	res => {
		let body = ''

		res.on('data', chunk => body += chunk)
		
		res.on('end', () => {
      // we're done!
			console.log(body)
		})
	}
)
