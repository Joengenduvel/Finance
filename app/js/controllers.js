'use strict';




financeModule.controller('MonthListCtrl', function MonthListCtrl($scope){
	$scope.setTitle("Maanden overzicht");
	//injectDateFunctions($scope);
});


financeModule.controller('MonthDetailCtrl', function MonthDetailCtrl($scope){
	$scope.setTitle("Maand overzicht");
	//injectDateFunctions($scope);
	$scope.payments = new Array();
	$scope.payments[0] = new Payment("2013-01-20","Test uitgave",20);
	$scope.newPayment = new Payment($scope.currentDateString,"",0);
	
	$scope.saveNewPayment = function(){
	$scope.payments.push($scope.newPayment);
	$scope.newPayment = new Payment($scope.currentDateString,"",0);
	};
	
	$scope.removePayment = function (payment){
		var index = $scope.payments.indexOf(payment);
		$scope.payments.splice(index,1);
	};
	
	$scope.totalValue = function (){
	var total = 0;
	for(var i=0; i<$scope.payments.length; i++){
		total += $scope.payments[i].value;
	}
	total += $scope.newPayment.value;
	return total;
	};

});
