express = require('express.io')
app = express().http().io()

// Broadcast all draw clicks.
app.io.route('drawClick', function(req) {
    req.io.broadcast('draw', req.data)
})

// Send client html.
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/client.html')
})
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));