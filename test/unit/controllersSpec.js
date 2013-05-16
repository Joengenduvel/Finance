'use strict';
describe('Finance Application', function(){
	
	beforeEach(function(){
		angular.mock.module('finance');
	});
	
	/* jasmine specs for controllers go here */
	describe('controllers', function() {
		var indexScope, indexCtrl;
		beforeEach(inject(function($rootScope, $controller) {
		  indexScope = $rootScope.$new();
		  indexCtrl = $controller('IndexCtrl', {$scope: indexScope});
		}));

	  describe('MonthListCtrl', function(){
		var scope, ctrl

		beforeEach(inject(function($controller) {
		  scope = indexScope.$new();
		  ctrl = $controller('MonthListCtrl', {$scope: scope});
		}));

		it('should set the title', function(){
			expect(scope.title).toBe("Maanden overzicht");
		});
		
		it('should set the correct current month', function(){
			expect(scope.currentMonth).toEqual(new Date().getMonth()+1);
		});

		it('should return a number of months up to this month', function() {
		
		  expect(scope.availableMonths.length).toEqual(scope.currentMonth);
		  
		});
		
		
	   
	  });


	  describe('MonthDetailCtrl', function(){
	  var scope, ctrl

		beforeEach(inject(function($controller) {
		  scope = indexScope.$new();
		  ctrl = $controller('MonthDetailCtrl', {$scope: scope});
		}));

	  it('should return the correct total value', function(){
			expect(scope.totalValue()).toBe(20);
		});
	  });
	});
});
