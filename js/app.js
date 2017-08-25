// Making the Angular Module of my App
var myApp = angular.module('profileApp', ['ngRoute']);

// Routs
myApp.config(function ($routeProvider, $locationProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/profile_page.html',
        controller: 'mainController'
    })
    
    .when('/category_page_bracelets.html', {
        templateUrl: 'pages/category_page_bracelets.html',
        controller: 'categoryController'
    })
    
    .when('/category_page_earrings.html', {
        templateUrl: 'pages/category_page_earrings.html',
        controller: 'categoryController'
    })
    
    .when('/category_page_necklaces.html', {
        templateUrl: 'pages/category_page_necklaces.html',
        controller: 'categoryController'
    })
    
    .when('/category_page_rings.html', {
        templateUrl: 'pages/category_page_rings.html',
        controller: 'categoryController'
    });
    
    $locationProvider.hashPrefix('');
});

// Defining Controllers for the application
myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
	$log.log("MainController is working fine");

    $scope.userProfile = user.profile;
    
    // console.log($scope.userProfile);
    
}]);

myApp.controller('categoryController', ['$scope', '$log', function ($scope, $log) {
    
    $log.log("Category Controller is also working fine");
    
    $log.log(location.hash);

    var collection = $scope.collections = user.collections;
    // console.log(collection);
    
    $scope.currentCollection = [];
    
//    $scope.bracelets = collection.bracelets;
//    $scope.rings = collection.rings;
//    $scope.necklaces = collection.necklaces;
//    $scope.earrings = collection.earrings;
    
    if (location.hash === "#/category_page_bracelets.html") {
        $scope.currentCollection.length = 0;
        
        $scope.currentCollection = collection.bracelets;
    } else if (location.hash === "#/category_page_earrings.html") {
    	$scope.currentCollection.length = 0;
        
        $scope.currentCollection = collection.earrings;
    } else if (location.hash === "#/category_page_necklaces.html") {
    	$scope.currentCollection.length = 0;
        
        $scope.currentCollection = collection.necklaces;
    } else if (location.hash === "#/category_page_rings.html") {
    	$scope.currentCollection.length = 0;
        
        $scope.currentCollection = collection.rings;
    }
    
}]);

// Using custom directives
/*myApp.directive('categoryItem', function () {
	return {
		restrict: "A",
		replace: true,
		templateUrl: "directives/collection-items.html",
		scope: {
			categoryItemObject: "="
		}
	}
});*/