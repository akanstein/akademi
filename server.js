const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

const items = require('./routes/api/items');    

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//dbConfig
const db = require('./config/keys').mongoURI;

mongoose.connect(db, {useNewUrlParser:true})
.then(() => console.log('..MongoDB Connected'))
.catch(err => console.log(err));

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`server started on port ${port}`));