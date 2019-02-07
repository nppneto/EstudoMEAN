var http = require('http');
var app = require('./config/express')();

// Criando servidor, recebendo como parâmetro o port, vindo do arquivo ./config/express
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});

