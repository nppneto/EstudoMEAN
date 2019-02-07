var express = require('express');
var home = require('../app/routes/home');

module.exports = function() {

    var app = express();
    //Variáveis de Ambiente
    app.set('port', 3000);
    //Middlewares
    //express.static faz com que o usuário tenha acesso a pasta public
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    home(app);

    return app;
}