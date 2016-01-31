'use strict';

angular.module('uiApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


