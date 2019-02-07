var contatos = [
    {'_id': 1, 'nome': 'Contato Exemplo 1', 'email': 'contatoexemplo1@gmail.com'},
    {'_id': 2, 'nome': 'Contato Exemplo 2', 'email': 'contatoexemplo2@gmail.com'},
    {'_id': 3, 'nome': 'Contato Exemplo 3', 'email': 'contatoexemplo3@gmail.com'},
];

module.exports = function() {

    var controller = {};

    controller.listaContatos = function(req, res) {
        res.json(contatos);
    };

    controller.obtemContato = function(req, res) {
        
        var idContato = req.params.id;
        var contato = contatos.filter(function(contato) {
            return contato._id == idContato;
        })[0];
        contato ? res.json(contato) : res.status(404).send('Contato não encontrado!');
    };

    return controller;
};