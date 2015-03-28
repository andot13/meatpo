$(document).ready(function() {

	// Bootstrap nav toggle on hover instead of click
	$('.dropdown').hover(function(){ 
		$('.dropdown-toggle', this).trigger('click'); 
	});

	$("#contact-us-form").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: "Please enter your name",
			email: "Please provide a valid email address"
		},
		errorElement: "div",
		wrapper: "div",  // a wrapper around the error message
		errorPlacement: function(error, element) {
			element.before(error);
			offset = element.offset();
			error.addClass('message');  // add a class to the wrapper
			offset = element.offset();
		},
		submitHandler: function (form) {
			$.ajax({
				type: $(form).attr('method'),
				url: $(form).attr('action'),
				data: $(form).serialize(),
				timeout: 400,
				complete: function() {
					$("#success").html("Thank you! Your message has been sent.").fadeIn();
					$("#name, #email, #message, #subject").val("");
				}
			});
			
			return false; // required to block normal submit since you used ajax
		}
	});

});