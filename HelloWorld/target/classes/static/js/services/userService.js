myApp.factory('UserService',['$http','$q', function($http,$q){
	return{
		getUser: function(){
			return  $http({
				  method: 'GET',
				  url: '/hello',
				  data: '',
				  headers: {
					  'Accept':'application/json; charset=utf-8',
					  'Content-Type':'application/json; charset=utf-8'
				  }
				}).then(function(response) {
					
				return response;
			}, function(errResponse) {
				console.log(errResponse);
				console.log(errResponse.data);
				console.error('Error '+errResponse);
				return $q.reject(errResponse);
			})
		}
	}
	
}]);