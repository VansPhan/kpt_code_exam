"use strict";

(function() {
	angular.module('home')
		.factory("HomeFactory", [
			'$http',
			HomeFactoryFunction
		])

		function HomeFactoryFunction($http) {
			return {
				products: function() {
					return $http.get('product.json');
				}
			}
		}
}());