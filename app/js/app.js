angular.module('finance', []).
  config(['$routeProvider', function($routeProvider) {
  var currentDate = new Date();
  $routeProvider.
      when('/months', {templateUrl: 'views/month-list.html',   controller: MonthListCtrl}).
      when('/month/:date', {templateUrl: 'views/month-detail.html', controller: MonthDetailCtrl}).
      otherwise({redirectTo: '/month/' + currentDate.toLocaleDateString()});
}]);

var directives = angular.module('directives', []);
 
directives.directive('dateFix', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {
            element.on('change', function() {
                scope.$apply(function () {
                    ngModel.$setViewValue(element.val());
                });         
            });
        }
    };
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