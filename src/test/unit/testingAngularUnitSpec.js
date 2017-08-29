describe('Testando ElotechGitHub', function () {

    beforeEach(module('elotechApp'));

    describe('HomeController', function () {
        var scope, controller, pagingParams;
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();

            pagingParams = {search: 'teste', page: 10, order: 'asc', sort: 'stars'};
            controller = $controller('HomeController as vm', {$scope: scope, pagingParams: pagingParams});
        }));

        it('Inicializando variável carregando no escopo', function () {
            expect(scope.vm.carregando).toBeDefined();
            expect(scope.vm.carregando).toBe(true);
        });

        it('Inicializando items per page', function () {
            expect(scope.vm.itemsPerPage).toBeDefined();
            expect(scope.vm.itemsPerPage).toBe(10);
        });

        it('Inicializando Paging Params', function () {
            expect(scope.vm.buscaAtual).toBeDefined();
            expect(scope.vm.buscaAtual).toBe('teste');

            expect(scope.vm.page).toBeDefined();
            expect(scope.vm.page).toBe(10);

            expect(scope.vm.order).toBeDefined();
            expect(scope.vm.order).toBe('asc');

            expect(scope.vm.sort).toBeDefined();
            expect(scope.vm.sort).toBe('stars');
        });


        it('Conclusão de Carregamento', function () {
            expect(scope.vm.carregando).toBeDefined();
            expect(scope.vm.carregando).toBe(true);

            scope.$apply(scope.vm.loadAll);

            expect(scope.vm.carregando).toBe(false);

        });

        it('Testar Load Page', function () {
            scope.vm.page = 1;

            scope.vm.loadPage(2);

            expect(scope.vm.page).toBe(2);
        });
    });

    describe('DetalheRepositorioController', function () {
        var scope, controller, stateParams;
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            stateParams = {id: 1};
            controller = $controller('DetalheRepositorioController as vm', {
                $scope: scope,
                $stateParams: stateParams
            });
        }));

        it('Inicializando variável carregando no escopo', function () {
            expect(scope.vm.carregando).toBeDefined();
            expect(scope.vm.carregando).toBe(true);
        });

        it('Verificando se o parâmetro está preenchido', function () {
            expect(stateParams).toBeDefined();
            expect(stateParams.id).toBe(1);
        });
    });
});