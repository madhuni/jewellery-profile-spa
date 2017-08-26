// Making the Angular Module of my App
var myApp = angular.module('profileApp', ['ngRoute']);

// Defining the Routs for the different pages
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
	// $log.log("MainController is working fine");
    $scope.userProfile = user.profile;
    $scope.isToggleClicked = false;
    // console.log($scope.userProfile);
    
}]);

myApp.controller('categoryController', ['$scope', '$log', function ($scope, $log) {
    
    /* 
    * Getting the item collection from the model defined in "model.js". This
    * collection can be get through AJAX call. I am mocking
    * the AJAX call here and setting the value to the
    * $scope object for the controller.
    */
    var collection = $scope.collections = user.collections;
    
    /* this array will have the collection for the currenlty visited Category. */
    $scope.currentCollection = [];
    
    /* 
    * Setting the variable to get the Material Type for the item being newly
    * added to the collection
    */
    $scope.nativeMaterial = "";
    
    $scope.isEditClicked = false; // This variable will look for the Edit button to be clicked
    
    $scope.isAddClicked = false; // This variable will look for the Add button to be clicked
    
    /*
	* Initializing the new empty object which will have the data for the item
	* to be Edited. This will be the original copy for the item to be edited.
    */
    $scope.editableObject = {};
    
    // Defined the new Empty Object
    $scope.item = {
        type: "",
        material: "",
        imageUrl: ""
    };
    
    /* 
    * Constructor function to create a new Jewellery item.
    * It accepts the 'type', 'material' and 'imageUrl' for the
    * new item to be added in the collection 
    */
    $scope.JewelleryItem = function (type, material, imageUrl) {
        this.type = type;
        this.material = material;
        this.imageUrl = imageUrl;
    }
    
    // function to reset the 'item' object
    $scope.resetItemObject = function (obj) {
    	$scope.nativeMaterial = "";
        obj.type = "";
        obj.imageUrl = "";
        obj.material= "";
    }

    // function to open the modal window when the Add button is clicked
    $scope.addButtonClicked = function () {
    	// console.log("I am clicked.");
        $scope.isAddClicked = true;
        $scope.item.material = $scope.nativeMaterial;
    }

    // function for closing of modal window once the user added the item
    $scope.closeModal = function () {
    	$scope.isAddClicked = false;
    	$scope.isEditClicked = false;
     	$scope.resetItemObject($scope.item);
    }
    
    /*
	* This function adds the new item into the collections
    */
    $scope.addItem = function () {
        var obj = $scope.item;

        // creating the new instance of the jewellery item
        var newItem = new $scope.JewelleryItem(obj.type, obj.material, obj.imageUrl);
        
        // adding the newly created item to the current collection object
        $scope.currentCollection.push(newItem);
        
        // Updating the affecting properties after adding the new item
        $scope.isAddClicked = false;
        $scope.resetItemObject($scope.item);
    }
    
    /* 
    * This function activates once the user click the edit button.
    * This function accepts the current object being clicked in arguments.
    * This will then set the editable object to the editable object in scope
    */
    $scope.editItem = function (obj) {
        $scope.resetItemObject($scope.item);
        $scope.isEditClicked = true;
        $scope.editableObject = obj;
    }
    
    // This function will update the item
    $scope.updateItem = function () {
        var newObject = $scope.item; // creating new empty object
        var oldObject = $scope.editableObject;
        
        // resetting the values of the item being edited with the new values
        oldObject.type = newObject.type;
        oldObject.material = newObject.material.toLowerCase();
        oldObject.imageUrl = newObject.imageUrl;
        
        // resetting the item object
        $scope.isEditClicked = false;
        $scope.resetItemObject(newObject);
    }
    
    /*
    * conditions for setting the values of the currentCollection based on the
    * category page
    */
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

