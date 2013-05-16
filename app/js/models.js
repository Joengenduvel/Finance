
//var date, description, value;

function Payment (dateString, description, value){

	this.date = new Date(dateString);
	this.dateString = dateString;
	this.value = typeof value !== 'undefined' ? value : 0;
	
	this.description = description;
	
	this.__defineGetter__("dateString", function(){
        return dateString;
    });
	
	this.__defineSetter__("dateString", function(val){
        date = new Date(val);
		dateString = val;
		markForSave(this);
    });
	
	this.__defineGetter__("description", function(){
        return description;
    });
	
	this.__defineSetter__("description", function(val){
        description = val;
		markForSave(this);
    });
	
	this.__defineGetter__("value", function(){
        return value;
    });
	
	this.__defineSetter__("value", function(val){
        //value = parseFloat(val);
		value = val;
		markForSave(this);
    });
	
	function markForSave(object){
		console.log("Mark for save: " + JSON.stringify(object));
	}
}