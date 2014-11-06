var hostAddress = '847055f0c7ed496490d0d5a13a805d55.cloudapp.net';
$(document).ready(function () {
	var varUrl; 
	function CallService() {
		$.ajax({
			url : varUrl, // Location of the service
			method: 'GET',
			success : function(msg) { //On Successful service call
						window.location = "../activated.html";
					  },
			error: function(msg) { // When Service call fails
						window.location = "../buy.html";
					  } 
		});
	}
	
	$("#btnEmailLicenceKey").click(function () {
		varUrl = "http://"+ hostAddress + "/Service.svc/EmailLicence/?name=" + $('#name').val() + "&companyName=" + $('#compname').val() + "&emailTo=" + $('#email').val() + "&productCode=SauceryNUnit";
		CallService();
	});
});