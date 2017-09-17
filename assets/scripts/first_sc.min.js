"use strict";
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
                minlength: 6,
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
                maxlength: 20,
            },
            checkbox:{
                required: true,
            },

       }

    });

$(document).on('submit', form, function(e){
  e.preventDefault(); 
  var msg = form.serialize();
  console.log(msg)
  $.ajax({
    type: 'POST',
    url: 'http://codeit.pro/frontTestTask/user/registration',
    data: msg,
    success: function(data) {
      console.log(data);
      if (data.status === 'OK') {
        window.location.href='second_page.html'
      }
      else {
        alert("You are not worthy! \n" + data.status + ": " + data.message)
      };
    }
   });
  });
});

