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
    
    // $log.log("Category Controller is also working fine");
    
    // $log.log(location.hash);

    var collection = $scope.collections = user.collections;
    
    $scope.currentCollection = [];
    
    $scope.nativeMaterial = "";
    
    $scope.item = {
        type: "",
        material: $scope.nativeMaterial,
        imageUrl: ""
    };
    
    $scope.JewelleryItem = function (type, material, imageUrl) {
        this.type = type;
        this.material = material;
        this.imageUrl = imageUrl;
    }
    
    $scope.closeModal = function () {
    	$scope.isAddClicked = false;
    	$scope.nativeMaterial = "";
        obj.type = "";
        obj.imageUrl = "";
    }
    
    $scope.addButtonClicked = function () {
    	console.log("I am clicked.");
        $scope.isAddClicked = true;
        $scope.item.material = $scope.nativeMaterial;
    }
    
    $scope.addItem = function () {
        var obj = $scope.item;
        var newItem = new $scope.JewelleryItem(obj.type, obj.material, obj.imageUrl);
        
        $scope.currentCollection.push(newItem);
        
        // Updating the affecting properties after adding the new item
        $scope.isAddClicked = false;
        $scope.nativeMaterial = "";
        obj.type = "";
        obj.imageUrl = "";
        
        // console.log(newItem);
    }
    
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

