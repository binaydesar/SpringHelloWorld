var myApp = angular.module('practice',[]);
myApp.config(['$routeProvider',function($routerProvider){
	$routerProvider
	.when('/',{templateUrl:'static/pages/index.html',controller:'practiceController'})
	.otherwise({
		redirectTo : '/'
	})
}])