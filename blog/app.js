const express = require('express');
const fs = require('fs')
const app = express();

const PORT = 8081;

app.set('port', PORT);

app.use('/', express.static('./dist'));

app.use(function(req,res){
	fs.readFile('index.html', 'utf-8', (err, content) => {
	  if (err) {
	    console.log('We cannot open "index.html" file.')
	  }
	  res.writeHead(200, {
	    'Content-Type': 'text/html; charset=utf-8',
	  })
	  console.log(content)
	    res.end(content)
	})
})


app.listen(app.get('port'), () => {
	console.log('Server Running');
});
