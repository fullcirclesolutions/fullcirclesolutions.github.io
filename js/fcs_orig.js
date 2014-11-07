function do_it(event) {
	alert("here");
	//alert(event.data.name);
	//alert(event.data.company);
	//alert(event.data.email);
	//alert(event.data.product);
	nameVal = $('#name').val();
	companyVal = $('#company').val();
	emailVal = $('#email').val();
	alert("nameVal INSIDE=" + nameVal);
	alert("companyVal INSIDE=" + companyVal);
	alert("emailVal INSIDE=" + emailVal);
	var hostAddress = '847055f0c7ed496490d0d5a13a805d55.cloudapp.net';
	var url = "http://"+ hostAddress + "/Service.svc/EmailLicence/?name=" + event.data.name + "&companyName=" + event.data.company + "&emailTo=" + event.data.email + "&productCode=" + event.data.product;
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