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
		alert('allFilled: ' + allFilled);
		alert('!allFilled: ' + !allFilled);
        $('input[type=submit]').prop('disabled', !allFilled);
		alert($('input[type=submit]').attr('disabled'));
}

$(document).ready(function(){
	alert('Num submits=' + $('input[type=submit]').length);
    $('input[type=text]').keyup(doCheck).focusout(doCheck);
});