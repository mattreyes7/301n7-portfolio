'use strict';

const fs = require('fs');
const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express()

const conString = "postgres://matthewaaronreyes@localhost:5432/portfolio";

const client = new pg.Client(conString);
client.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./'));

app.listen(PORT, function() {
  console.log('server started on '+PORT);
});

app.get('/new', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});
