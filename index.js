var express = require('express')
var fs = require('fs')
var app = express()
var filename = 'index.html'

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

var buf = fs.readFileSync(filename)

app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
