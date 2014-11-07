function do_it(event) {
	alert("name INSIDE=" + $('#name').val());
	alert("company INSIDE=" + $('#company').val());
	alert("email INSIDE=" + $('#email').val());
	alert("product INSIDE=" + event.data.product);
	var hostAddress = '847055f0c7ed496490d0d5a13a805d55.cloudapp.net';
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