var ref = document.referrer.toLowerCase();
if (ref.indexOf("checkout-gateway.html") == -1) {
	alert("didnt come through the right door: ");
	window.location.href = "http://fullcirclesolutions.com.au"
}