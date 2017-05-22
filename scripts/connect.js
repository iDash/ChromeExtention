$(document).ready(function(){

	$('#connect').click(function(e){
		e.preventDefault();

		var domain = $('select[name=domain]').val();;
		var login = $('input[name=login]').val();
		var password = $('input[name=password]').val();
		
		var url = "http://demo.en.cx/Login.aspx?return=%2f";
		
		
		
		$('.setup').show();
		$('.login').hide();
	});

	
	$('.setup').hide();
	
	$('#back').click(function(e){
		e.preventDefault();
		$('.login').show();
		$('.setup').hide();
	});   
	
});