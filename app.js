/////Dependencies/////
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const predictRouter = require('./routes/predict');

const app = express();
//Add body-parser to access 'body' in 'req' later
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.send("hello")
})
app.use('/predict', predictRouter);
////Listener//////
const port = process.env.PORT || '8080';

app.set('port', port);
const server = http.createServer(app);
server.listen(port)
server.on('listening', () => {
    console.log('Listening on ' + (port));
});