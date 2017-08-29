(function () {
    'use strict';
    angular
        .module('elotechApp')
        .factory('HomeService', HomeService);

    HomeService.$inject = ['$resource'];

    function HomeService($resource) {
        var resourceUrl = 'https://api.github.com/search/repositories/:id';

        return $resource(resourceUrl, {}, {
            'query': {method: 'GET'},
            'get': {method: 'GET', isArray: false, url: 'https://api.github.com/repositories/:id'},
        });
    }
})();
