(function() {
    'use strict';
    angular
        .module('elotechApp')
        .factory('DetalheRepositorioService', DetalheRepositorioService);

    DetalheRepositorioService.$inject = ['$state'];

    function DetalheRepositorioService ($state) {

        var service = {
            logout: logout
        };

        return service;

        function logout() {
            $state.go('login');
        }
    }
})();
