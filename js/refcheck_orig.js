var ref = document.history(-1);
if (ref.match(/^https?:\/\/([^\/]+\.)?paypal\.com(\/|$)/i)) {
	alert("Came from paypal: " + ref);
} else {
	alert("Not from paypal: " + ref);
}