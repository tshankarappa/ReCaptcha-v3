const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { verifyToken } = require('./controller/verify-token');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/html/index.html');
});

app.use(express.static('public'));
app.post('/verify', verifyToken);

app.listen(3000, () => console.log('Express app listening on port 3000!'));
  