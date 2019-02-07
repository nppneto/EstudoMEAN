var express = require('express');
var home = require('../app/routes/home');
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function() {

    var app = express();
    //Variáveis de Ambiente
    app.set('port', 3000);
    //Middlewares
    //express.static faz com que o usuário tenha acesso a pasta public
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());

    // Mesma função do consign
    // Carregará todos os scripts de models, controllers e routes
    // Dentro de app
    // cwd:'app' muda o diretorio para app (por padrão busca no diretório raiz)
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}