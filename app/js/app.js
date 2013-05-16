var financeModule = angular.module('finance', []);

financeModule.config(['$routeProvider', function($routeProvider) {
  var currentDate = new Date();
  $routeProvider.
      when('/months', {templateUrl: 'views/month-list.html',   controller: 'MonthListCtrl'}).
      when('/month/:date', {templateUrl: 'views/month-detail.html', controller: 'MonthDetailCtrl'}).
      otherwise({redirectTo: '/month/' + currentDate.toLocaleDateString()});
}]);

financeModule.controller('IndexCtrl', function IndexCtrl($scope){
	$scope.title = "Financial app";
	$scope.setTitle = function(title){
		$scope.title = title;
	};
	injectDateFunctions($scope);
});



Date.prototype.toYMD = Date_toYMD;
    function Date_toYMD() {
        var year, month, day;
        year = String(this.getFullYear());
        month = String(this.getMonth() + 1);
        if (month.length == 1) {
            month = "0" + month;
        }
        day = String(this.getDate());
        if (day.length == 1) {
            day = "0" + day;
        }
        return year + "-" + month + "-" + day;
    }
	
function injectDateFunctions(scope){
		scope.currentDate = new Date();
		scope.currentDateString = scope.currentDate.toYMD();
		scope.currentMonth = scope.currentDate.getMonth()+1;
		scope.availableMonths=new Array();
		for(var i = 0;i<scope.currentMonth;i++){
		scope.availableMonths[i] = i+1;
		}
}