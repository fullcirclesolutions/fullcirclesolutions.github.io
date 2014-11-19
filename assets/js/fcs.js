var hostAddress = '847055f0c7ed496490d0d5a13a805d55.cloudapp.net';
function do_it(event) {
	if($("#recaptcha_challenge_field").val() == '') {
		return;
	} else {
		var validCaptcha = false;
		var url = "http://"+ hostAddress + "/Service.svc/Validate/?ip=127.0.0.1&challenge=" + $('#recaptcha_challenge_field').val() + "&response=" + $('#recaptcha_response_field').val();
		$.ajax({
			url : url,
			method: 'GET',
			dataType: 'xml',
			success : function(xml) { //On Successful service call
						validCaptcha = xml.children[0].innerHTML;
						if(validCaptcha != undefined && validCaptcha == 'true') {
							sendEmail(event);
						}
					  },
			error: function(data) { // When Service call fails
						validCaptcha = false;
					  }
		});		
		
	}
}

function sendEmail(event){
	var url = "http://"+ hostAddress + "/Service.svc/EmailLicence/?name=" + $('#name').val() + "&companyName=" + $('#company').val() + "&emailTo=" + $('#email').val() + "&productCode=" + event.data.product;
	$.ajax({
		url : url,
		method: 'GET',
		success : function(msg) { //On Successful service call
					document.referrer = '';
					window.location = "activation.html";
				  },
		error: function(msg) { // When Service call fails
					document.referrer = '';
					window.location = "home.html";
				  }
	});
}