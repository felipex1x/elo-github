(function () {
    'use strict';

    angular
        .module('elotechApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('home', {
            parent: 'app',
            url: '?page&sort&search&order',
            views: {
                '@app': {
                    templateUrl: 'app/pages/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            },
            params: {
                page: {
                    value: '1',
                    squash: true
                },
                sort: {
                    value: 'stars',
                    squash: true
                },
                order: {
                    value: 'asc',
                    squash: true,
                },
                search: null
            },
            resolve: {
                pagingParams: ['$stateParams', 'PaginationUtil', function ($stateParams, PaginationUtil) {
                    return {
                        page: PaginationUtil.parsePage($stateParams.page),
                        sort: $stateParams.sort,
                        order : $stateParams.order,
                        search: $stateParams.search
                    };
                }]
            }
        });
    }
})();
