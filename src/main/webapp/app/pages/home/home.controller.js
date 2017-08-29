(function () {
    'use strict';

    angular
        .module('elotechApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$state', 'HomeService', 'pagingParams', '$timeout','$scope'];

    function HomeController($state, HomeService, pagingParams, $timeout, $scope) {
        var vm = this;

        $scope.doidao = true;
        vm.carregando = true;
        vm.repositorios = [];
        vm.itemsPerPage = 10;
        vm.buscaAtual = pagingParams.search;
        vm.buscaAnterior = pagingParams.search;
        vm.page = pagingParams.page;
        vm.order = pagingParams.order;
        vm.sort = pagingParams.sort;


        vm.loadAll = loadAll;
        vm.transition = transition;
        vm.search = search;
        vm.loadPage = loadPage;

        vm.loadAll();

        function loadAll() {
            var q = vm.buscaAtual != null && vm.buscaAtual.length > 0 ? vm.buscaAtual + '+' : '';
            HomeService.query({
                    q: q + 'stars:>=0',
                    page: vm.page - 1,
                    per_page: vm.itemsPerPage,
                    sort: vm.sort,
                    order: vm.order,
                },
                onSuccess, onError
            );

            function onSuccess(data) {
                vm.totalItems = data.total_count;
                vm.repositorios = data.items;
                vm.carregando = false;
                $timeout(function () {
                    angular.element('#searchQuery').focus();
                });
            }

            function onError(error) {
                vm.carregando = false;
            }
        }

        function search() {
            vm.page = 1;
            vm.sort = 'stars';
            vm.order = 'asc';
            vm.transition();
        }

        function transition() {
            $state.transitionTo($state.$current, {
                page: vm.page,
                sort: vm.sort,
                order: vm.order,
                search: vm.buscaAtual
            });
        }

        function loadPage(pagina){
            vm.page = pagina;
            transition()
        }
    }
})();
