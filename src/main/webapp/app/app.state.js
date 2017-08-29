(function () {
    'use strict';

    angular
        .module('elotechApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('app', {
            abstract: true,
            url: '/app',
            templateUrl: 'app/templates/template.html',
        });
    }
})();
