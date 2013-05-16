'use strict';


function IndexCtrl($scope){
	$scope.title = "Financial app";
	$scope.setTitle = function(title){
		$scope.title = title;
	};
	injectDateFunctions($scope);
};


function MonthListCtrl($scope){
	$scope.setTitle("Maanden overzicht");
	//injectDateFunctions($scope);
};


function MonthDetailCtrl($scope){
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

};

function injectDateFunctions(scope){
		scope.currentDate = new Date();
		scope.currentDateString = scope.currentDate.toYMD();
		scope.currentMonth = scope.currentDate.getMonth()+1;
		scope.availableMonths=new Array();
		for(var i = 0;i<scope.currentMonth;i++){
		scope.availableMonths[i] = i+1;
		}
}



IndexCtrl.$inject = ['$scope'];
MonthListCtrl.$inject = ['$scope'];
MonthDetailCtrl.$inject = ['$scope'];