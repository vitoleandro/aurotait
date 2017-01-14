/**
 * @desc supriments module
 * Modulo responsável pelo tratamento dos dados de suprimentos
 */
angular
  .module('supriments')
  .controller('SuprimentsController', SuprimentsController);

/**
 * SuprimentsController dependences
 * @type {Array}
 */
SuprimentsController.$inject = ['$scope', '$window', 'SupriFactory']

/**
 * [SuprimentsController description]
 * @method SuprimentsController
 * @param  {Angular Object}             $scope        [description]
 * @param  {Angular Object}             $window       [description]
 */
function SuprimentsController ($scope, $window, SupriFactory) {
  // vm é o object utilizado para o data bind
  let vm  = this,
  dateNow = new Date();

  /**
   * Teste de validade da data
   * @method isValid
   * @param  {Date}
   * @return {Boolean}
   */
  vm.isValid = function(date) {
    if (date.toDateString() <= dateNow.toDateString()) {
      angular.element(document.getElementById("validade")).addClass('help-block');
    }
    else {
      angular.element(document.getElementById("validade")).removeClass('help-block');
    }
  }

  // Método que salva o array no localStorage. É criado um objeto com
  // as variáveis (ng-model) do formulario
  // cada click em salvar é adicionado um novo objeto no array e ai sim
  // o mesmo é inserido na chave já existente.
  vm.save = function () {
    vm.supri = {
      name: vm.nome,
      tipo: vm.tipo,
      validade: vm.validade,
      localizacao: vm.localizacao
    };
    // Submit é o metodo criado na factory SupriFactory, para inserir os dados
    // nas chave.
    SupriFactory.submit(vm.supri);
  }

  // Get é um metodo de SupriFactory que retorna os dados da chave passada.
  let supr = SupriFactory.get('supriments');
  // Apos adiquirir os dados, é feito um parse.
  vm.supriments = JSON.parse(supr);
}
