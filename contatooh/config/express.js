//a função require tem como tarefa carregar os modulos que precisamos no nosso script
var express = require('express');
module.exports = function(){ //tudo o que for adicionado numa propriedade exports estará visivel fora do modulo
  var app = express();
  return app; //retorna uma versão configura do express
}
