angular
  .module('supriments')
  .factory('SupriFactory', SupriFactory);

// SupriFactory.$inject = '$window';

function SupriFactory($window) {

  var suprArr = [];

  function submit(value) {
    suprArr.push(value);
    $window.localStorage.setItem('supriments',JSON.stringify(suprArr));
    console.log(suprArr);
  };

  function get(key) {
    return $window.localStorage.getItem(key);
  }

  return {
    submit: submit,
    get: get
  };
}
