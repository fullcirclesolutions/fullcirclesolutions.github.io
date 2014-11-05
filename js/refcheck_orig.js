var ref = document.referrer;
if (ref.match(/^https?:\/\/([^\/]+\.)?paypal\.com(\/|$)/i)) {
	alert("Came from paypal");
}else{
	alert("Not from paypal");
}