function do_it(event) {
	var hostAddress = '847055f0c7ed496490d0d5a13a805d55.cloudapp.net';
	
	if($("#recaptcha_challenge_field").val() == '') {
		return;
	} else {
		var validCaptcha = false;
		debugger;
		var url = "http://"+ hostAddress + "/Service.svc/Validate/?ip=" + event.data.ip + "&challenge=" + $('#recaptcha_challenge_field').val() + "&response=" + $('#recaptcha_response_field').val();
			debugger;
			$.ajax({
				url : url,
				method: 'GET',
				success : function(data) { //On Successful service call
							debugger;
							validCaptcha = data;
						  },
				error: function(data) { // When Service call fails
							debugger;
							validCaptcha = false;
						  }
			});		
		if(validCaptcha){
			var url = "http://"+ hostAddress + "/Service.svc/EmailLicence/?name=" + $('#name').val() + "&companyName=" + $('#company').val() + "&emailTo=" + $('#email').val() + "&productCode=" + event.data.product;
			$.ajax({
				url : url,
				method: 'GET',
				success : function(msg) { //On Successful service call
							window.location = "activation.html";
						  },
				error: function(msg) { // When Service call fails
							window.location = "home.html";
						  }
			});
		}
	}
}