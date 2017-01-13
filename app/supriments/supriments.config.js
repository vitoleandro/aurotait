angular
  .module('supriments')
  .config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'supriments/supriments.list.html',
      controller: 'SuprimentsController',
      controllerAs: 'supri'
    })
    .when('/supriment/new', {
      templateUrl: 'supriments/supriments.new.html',
      controller: 'SuprimentsController',
      controllerAs: 'supri'
    });
}
