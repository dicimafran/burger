
/* ======================= Server Table of contents =====================
    
    Dependencies: 
        express
        bodyparser
        routes: burger_controller.js
        express-handlebars
    
    Connections: port 8080

    ---------------
    Server stuff: 
        - serves static content from 'public' directory'
        - parses application: 
            x-www-form-urlencoded 
            json

    Handlebars
        app.engine & app.set: sets up handlebars as default templating engine

======================================================================= */

//  Dependencies
    const express = require('express');
    const bodyparser= require('body-parser');

    var exphbs = require('express-handlebars');
    var routes = require('./controllers/burgers_controller.js');

// Connections
    var PORT= process.env.PORT || 8080;
    var app= express();

// Server stuff 
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