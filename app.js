const express = require('express');
const routes = require('./routes/routes');
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const expressSession = require('express-session');
const con = require('./db/db-mysql-connect');

const app = express();


app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    helpers: require('./conf/helpers'),
    lyaoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(expressValidator());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({
    secret: '#&%1234somekey',
    key: 'key',
    saveUninitialized: false,
    resave: false
}));

app.use('/', routes);


app.listen(3000);
