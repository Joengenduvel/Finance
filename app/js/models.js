
//var date, description, value;

function Payment (date, description, value){
	this.date = date;
	this.description = description;
	this.value = value;
	
	this.__defineGetter__("date", function(){
        return date;
    });
	
	this.__defineSetter__("date", function(val){
        date = val;
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
        value = val;
		markForSave(this);
    });
	
	function markForSave(object){
		console.log("Mark for save: " + JSON.stringify(object));
	}
}