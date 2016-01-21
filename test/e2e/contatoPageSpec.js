var ContatoPage = require('./pages/contatoPage');

describe('Cadastro de contato', function(){

    var pagina = new ContatoPage();

    beforeEach(function(){
        pagina.visitar();
    });

    it('Deve cadastrar um contato', function(){
        var aleatorio = Math.floor((Math.random() * 10000000) + 1);
        var nome = 'teste '+aleatorio;
        var email = 'teste'+aleatorio+'@gmail.com';

        pagina.digitarNome(nome);
        pagina.digitarEmail(email);
        pagina.selecionarPrimeiraEmergenciaDaLista();
        pagina.salvar();

        expect(pagina.obterMensagem()).toContain('sucesso');
    });

});