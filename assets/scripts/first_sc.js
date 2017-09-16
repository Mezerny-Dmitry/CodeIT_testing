"use strict";
// $(document).ready(function() {
// 				$("#loginForm").submit(function(event) {
// 					event.preventDefault();
// 					$.ajax({
// 						url: "http://codeit.pro/frontTestTask/user/registration",
// 						type: "post",
// 						data: $("#loginForm").serialize(),
// 						success: function(data) {
// 							$("#result").html(data);
// 						}
// 					});
// 					var url = 'google.com';
// 					$(location).attr('href',url);
// 				});
// 			});

jQuery.validator.setDefaults({
  debug: true,
  success: "val"
});
var form = $( "#form" );
$(document).ready(function(){

    $("#form").validate({

       rules:{

            name:{
                required: true,
                minlength: 3,
                maxlength: 20,
            },

            secondname:{
                required: true,
                minlength: 6,
                maxlength: 20,
            },
            email:{
                required: true,
                email: true,
            },
            gender:{
                required: true,
            },
            pass:{
                required: true,
                minlength: 6,
                maxlength: 10,
            },
            checkbox:{
                required: true,
            },

       }

    });
    $( "button" ).click(function() {
      if(form.val()) {
            var msg = $("#form").serialize();
            console.log(msg);
            $.ajax({
              type: 'POST',
              url: 'http://codeit.pro/frontTestTask/user/registration',
              data: msg,
              success: function(data) {
                console.log(data);
                if (data.status === 'OK') {window.location.href='main.html'}
                else {alert(data.message)};
              }
            });
        };
    });

});
