'use strict';


function indexCtrl($scope){
	$scope.title = "Financial app";
	injectDateFunctions($scope);
};


function MonthListCtrl($scope){
	$scope.title = "Maand overzicht";
	injectDateFunctions($scope);
};


function MonthDetailCtrl($scope){
	$scope.title = "Maand overzicht";
	injectDateFunctions($scope);
	$scope.payments = new Array();
	$scope.payments[0] = new Payment(new Date(),"Test uitgave",20);
	$scope.newPayment = new Payment();
	$scope.newPayment.date = $scope.currentDate;
	
	$scope.saveNewPayment = function(){
	$scope.payments.push($scope.newPayment);
	$scope.newPayment = new Payment();
	};
	
	$scope.removePayment = function (payment){
		var index = $scope.payments.indexOf(payment);
		$scope.payments.splice(index,1);
	};
	
};

function injectDateFunctions(scope){
		scope.currentDate = new Date();
		scope.currentMonth = scope.currentDate.getMonth()+1;
		scope.availableMonths=new Array();
		for(var i = 0;i<scope.currentMonth;i++){
		scope.availableMonths[i] = i+1;
		}
}

indexCtrl.$inject = ['$scope'];
MonthListCtrl.$inject = ['$scope'];
MonthDetailCtrl.$inject = ['$scope'];