$('#home').on('pageinit', function(){
	//code needed for home page goes here
});
		
$('#addItem').on('pageinit', function(){

		var myForm = $('#addBill');
		myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
			//getData(data);
			$.mobile.changePage($('#home'));
		}
	});
	
	//any other code needed for addItem page goes here

	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){

};

/*
var getData = function(data){
	var display = '<ul data-role="listview" data-filter="true">';
	$.each(data, function(key, val) {
		console.log(localStorage);
		display+='<li>';
		display+='<h3>' + val.value + '</h3>';
		display+='</li>';
	});
	display+='</ul>';
	$('#display').html(display);
};
*/
var storeData = function(data){
	var id,
		key;
	if(!key){
			id = Math.floor(Math.random() * 100000001);
		} else {
			id = key;
		}
		//store form fields in object
		//object will contain array with form label and input value
		var item = {};
		item.category = ["Bill Category:", $('#categories').val()];
		item.billName = ["Bill Name:", $('#billName').val()];
		item.accountNum = ["Account Number:", $('#accountNum').val()];
		item.billAmount = ["Amount Due:", $('#ammountDue').val()];
		item.dueDate = ["Date Due:", $('#dateDue').val()];
		item.billPaid = ["Is Bill Paid?", $('input:radio[name=isBillPaid]:checked').val()];
		item.priority = ["Priority:", $('#priority').val()];
		item.comments = ["comments:", $('#comments').val()];
		//Save into local storage and convert to string(JSON.stringify)
		localStorage.setItem(id, JSON.stringify(item));
		alert("Bill Saved");
	//$("#addBill")[0].reset();
	//console.log(data[1].value);
};


var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


