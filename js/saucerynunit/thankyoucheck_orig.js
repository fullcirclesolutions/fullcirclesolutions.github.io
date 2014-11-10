var ref = document.referrer.toLowerCase();
if (ref.indexOf("5ff4adab-3ef9-4788-b655-8c874cedfcb1.html") == -1) {
	window.location.href = "home.html"
}

function doCheck(){
        var allFilled = true;
        $('input[type=text]').each(function(){
            if($(this).val() == ''){
                allFilled = false;
                return false;
            }
        });
		if($("#recaptcha_response_field").val() == ''){
			allFilled = false;
            return false;
		}
        $('input[type=submit]').prop('disabled', !allFilled);
}

$(document).ready(function(){
	Recaptcha.create("6LcbcP0SAAAAAOpl10xbPyzgTxUDJJcMZBq0j4ny",
					"recaptcha_div", {
                    theme: "clean",
                    callback: Recaptcha.focus_response_field
               });
	$('input[type=text]').keyup(doCheck).focusout(doCheck);
	$("#recaptcha_response_field").keyup(doCheck).focusout(doCheck);
});

function validate_captcha(event) {
	var hostAddress = '847055f0c7ed496490d0d5a13a805d55.cloudapp.net';
	var url = "http://"+ hostAddress + "/Service.svc/Validate/?ip=" + event.data.ip + "&challenge=" + $('#').val() + "&response=" + $('#').val();
	$.ajax({
		url : url,
		method: 'GET',
		success : function(data) { //On Successful service call
					debugger;
				  },
		error: function(data) { // When Service call fails
					debugger;
				  }
	});
}