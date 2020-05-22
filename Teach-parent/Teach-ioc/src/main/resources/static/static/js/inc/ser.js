function hideser() {
	obj = document.getElementById("floatser");
	obj.style.display = 'none';
}
lastScrollYser = 0;
function heartBeatser() {
	diffY = document.body.scrollTop;
	percent = 1 * (diffY - lastScrollYser);

	if (percent > 0)
		percent = Math.ceil(percent);
	else
		percent = Math.floor(percent);
	//document.all.floatser.style.pixelTop += percent;
	lastScrollYser = lastScrollYser + percent;
}
window.setInterval("heartBeatser()", 1);