'use strict';


var storkApp = angular.module('storkApp', ['ngRoute']);

// configure our routes
storkApp.config(function ($routeProvider, $locationProvider) {
    //console.log("Configured Routes");
    
    $routeProvider

    // route for the home page
        .when('/home', {
        templateUrl : 'views/home.html',
        controller  : 'mainController'
    })

    // route for the about page
        .when('/about', {
        templateUrl : 'views/about.html',
        controller  : 'aboutController'
    })

    // route for the contact page
        .when('/contact', {
        templateUrl : 'views/contact.html',
        controller  : 'contactController'
    });
    
    //Remove # in url
    $locationProvider.html5Mode(true);
});

storkApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

storkApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

storkApp.controller('mainController', function ($scope) {
    $scope.message = 'Welcome to Stork';
});
    

