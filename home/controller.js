"use strict";

(function () {
	angular
	.module("home")
	.controller("HomeController", [
		"$scope",
		"HomeFactory",
		HomeControllerFunction
	]);

	function HomeControllerFunction($scope, HomeFactory) {
		$scope.homepage = true;
		$scope.products;
		$scope.total = 0;
		$scope.cartCount = {};
		$scope.cart = [];
		$scope.toggle = function() {
			$scope.homepage = !$scope.homepage;
		}

		$scope.addToCart = function(product) {
			var total = 0;
			if (product.index in $scope.cartCount) {
				$scope.cartCount[product.index] += 1;
				$scope.cart.find(item => item.index == product.index)["count"] += 1;
			}
			else {
				$scope.cartCount[product.index] = 1;
				product["count"] = 1;
				$scope.cart.push(product);
			}

			angular.forEach($scope.cartCount ,function(key, val) {
				var price = $scope.products.find(item => item.index == val).productPrice;

				var num = parseFloat(price.split('$')[1]);
				total += (num * key);
			})
			$scope.total = total.toFixed(2);
		}

		HomeFactory.products().success(function(data) {
			$scope.products = data;
			console.log($scope.products)
		})
		.error(function() {
			console.log("Cannot find products");
		})
	}
}());