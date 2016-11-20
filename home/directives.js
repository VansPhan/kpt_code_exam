"use strict";

(function() {
  angular.module('home')
    .directive('navbar', function() {
      return {
        restrict: 'E',
        templateUrl: 'home/templates/navbar.html'
      };
    })
    .directive('products', function() {
      return {
        restrict: 'E',
        templateUrl: 'home/templates/products.html'
      };
    })
    .directive('checkout', function() {
      return {
        restrict: 'E',
        templateUrl: 'home/templates/checkout.html'
      };
    })
}());
