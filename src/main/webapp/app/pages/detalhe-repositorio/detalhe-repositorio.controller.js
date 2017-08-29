(function () {
    'use strict';

    angular.module('elotechApp').filter('simOuNao', function() {
        return function(input) {
            return input ? 'Sim' : 'Não';
        }
    });

    angular
        .module('elotechApp')
        .controller('DetalheRepositorioController', DetalheRepositorioController);

    DetalheRepositorioController.$inject = ['$stateParams','HomeService'];

    function DetalheRepositorioController($stateParams,HomeService) {
        var vm = this;

        vm.carregando = true;
        vm.id = $stateParams.id
        vm.recuperarRepositorio = recuperarRepositorio;
        vm.voltarParaPaginaAnterior = voltarParaPaginaAnterior;

        vm.recuperarRepositorio();

        function recuperarRepositorio(){
            HomeService.get({id : vm.id}, onSuccess, onError);

            function onSuccess(data, headers) {
                vm.repositorio = data;
                vm.carregando = false;
            }
            function onError(error) {
                vm.carregando = false;
            }
        }


        function voltarParaPaginaAnterior() {
            window.history.back();
        }
    }
})();
