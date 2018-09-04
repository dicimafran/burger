
// Dependencies
    const express = require('express');
    const bodyparser= require('body-parser');

    var routes = require('./controllers/burgers_controller.js');
    var exphbs = require('express-handlebars');

// Connections
    var PORT= process.env.PORT || 8080;
    var app= express();

// Server content --> static content & parsing
    app.use(express.static('public'));

    app.use(bodyparser.urlencoded({ extended:true }));
    app.use(bodyparser.json());

// Handlebars
    app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
    app.set('view engine', handlebars);

// Route importing
    app.use(routes);

// Port listener so server can listen to client requests
    app.listen(PORT, function () {
        console.log('Server listening on: http://localhost:' + PORT);
    });