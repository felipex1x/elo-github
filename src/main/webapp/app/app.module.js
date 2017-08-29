(function () {
    'use strict';

    angular
        .module('elotechApp', ['ui.router', 'ngResource', 'ui.bootstrap']).run(run);


    run.$inject = ['$state'];

    function run($state) {
        $state.go('home');
    }
})();
