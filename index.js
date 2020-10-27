const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT;

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/item/:itemID', (req, res) => {
	res.send(req.params.itemID);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});