var step = 1;
var createTour = angular.module("createTour",["ngRoute"]);
createTour.config(function ($routeProvider) {
  $routeProvider
  .when("/",{
    templateUrl: 'form1.html',
    controller: 'createTourController'
  })
  .when("/step2",{
    templateUrl:"form2.html",
    controller: 'form2Controller'
  })
  .when('/step3',{
    templateUrl: "form3.html"
  });
});

createTour.controller("createTourController",function($scope){
  $scope.hello = "hello world";
});
createTour.controller("form2Controller",function($scope){
  $scope.hello = "hello step2"
})
