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
        $('input[type=submit]').prop('disabled', !allFilled);
}

$(document).ready(function(){
	$('input[type=text]').keyup(doCheck).focusout(doCheck);
});