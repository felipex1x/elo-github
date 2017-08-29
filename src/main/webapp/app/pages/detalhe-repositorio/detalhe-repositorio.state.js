(function () {
    'use strict';

    angular
        .module('elotechApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('detalheRepositorio', {
            parent: 'app',
            url: '/detalhes-repositorio/{id}',
            views: {
                '@app': {
                    templateUrl: 'app/pages/detalhe-repositorio/detalhe-repositorio.html',
                    controller: 'DetalheRepositorioController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
