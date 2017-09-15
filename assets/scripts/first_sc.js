"use strict";
$(document).ready(function() {
	$('#loginForm').submit(function(){
	$.post("http://codeit.pro/frontTestTask/user/registration", $("#loginForm").serialize(),  function(data) {
	// $('#loginForm').hide('slow');
	$('.form__answer').html(data);
});
		return false;
	});
});	

// function inf() {
//   var msg   = $('#loginform').serialize();

// $.ajax({
//   type: "POST",
//   url: 'http://codeit.pro/frontTestTask/user/registration',
//   data: msg,
//   success: function (){
//   $('.form__answer').html(data)
//   },
//   dataType: dataType
// });
// };