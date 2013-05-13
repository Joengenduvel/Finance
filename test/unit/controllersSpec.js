'use strict';

/* jasmine specs for controllers go here */
describe('Finance controllers', function() {

  describe('MonthListCtrl', function(){
    var scope, ctrl

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller(MonthListCtrl, {$scope: scope});
    }));

	it('should set the title', function(){
		expect(scope.title).toBe("Maand overzicht")
	});
	
	it('should set the correct current month', function(){
		expect(scope.currentMonth).toEqual(new Date().getMonth()+1);
	});

    it('should return a number of months up to this month', function() {
	
      expect(scope.availableMonths.length).toEqual(scope.currentMonth);
	  
    });
   
  });


  describe('PhoneDetailCtrl', function(){
  });
});
