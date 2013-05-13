angular.module('finance', []).
  config(['$routeProvider', function($routeProvider) {
  var currentDate = new Date();
  $routeProvider.
      when('/months', {templateUrl: 'views/month-list.html',   controller: MonthListCtrl}).
      when('/month/:date', {templateUrl: 'views/month-detail.html', controller: MonthDetailCtrl}).
      otherwise({redirectTo: '/month/' + currentDate.toLocaleDateString()});
}]);

var directives = angular.module('directives', []);
 
directives.directive('myDatepicker', function ($parse) {
    return function (scope, element, attrs, controller) {
        var ngModel = $parse(attrs.ngModel);
        $(function(){
            element.datepicker({
               onSelect:function (dateText, inst) {
                    scope.$apply(function(scope){
                        // Change binded variable
                        ngModel.assign(scope, dateText);
                    });
               }
            });
        });
    }
});