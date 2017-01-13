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
SuprimentsController.$inject = ['$scope','$localStorage', '$window']

/**
 * [SuprimentsController description]
 * @method SuprimentsController
 * @param  {Angular Object}             $scope        [description]
 * @param  {Angular Object}             $localStorage [description]
 * @param  {Angular Object}             $window       [description]
 */
function SuprimentsController ($scope, $localStorage, $window) {
  // vm é o object utilizado para o data bind
  let vm = this;
  // array que é inserido no local storage
  let myarr = [];

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

    myarr.push(vm.supri);
    $window.localStorage.setItem('supriments',JSON.stringify(myarr));
  }

  // é adiquirido a lista de itens pertencente a chave
  // supriments e adicionado em vm.supriments apos um parse.
  let supr = $window.localStorage.getItem('supriments');
  vm.supriments = JSON.parse(supr);
}
