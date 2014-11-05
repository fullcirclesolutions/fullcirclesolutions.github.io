var ref = document.referrer.toLowerCase();
if (ref.match(/^https?:\/\/([^\/]+\.)?paypal\.com(\/|$)/i)) {
	alert("Came from paypal: " + ref);
} else {
	alert("Not from paypal: " + ref);
	window.location.href = "http://fullcirclesolutions.com.au"
}

if(ref == null){
alert("ref is null");
}
if(ref == ''){
alert("ref is empty");
}