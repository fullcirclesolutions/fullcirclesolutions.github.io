var ref = document.referrer.toLowerCase();
if (ref.indexOf("5ff4adab-3ef9-4788-b655-8c874cedfcb1.html") == -1) {
	window.location.href = "home.html"
}

function doCheck(){
	var allFilled = true;
	$('input[type=text][name$="-field"]').each(function(){
		if($(this).val() == ''){
			allFilled = false;
			return false;
		}
	});
	$('input[type=submit]').prop('disabled', !allFilled);
}

$(document).ready(function(){
	Recaptcha.create("6LcbcP0SAAAAAOpl10xbPyzgTxUDJJcMZBq0j4ny",
					"recaptcha_div", {
					theme: "clean",
					callback: Recaptcha.focus_response_field
			   });
	$('input[type=text][name$="-field"]').keyup(doCheck).focusout(doCheck);
});


function checkCaptcha() {
	var v = $('#recaptcha_response_field').val();
	if (v == '' || v == undefined) {
		alert('Captcha is required');
		return false;
	}
	return true;
}