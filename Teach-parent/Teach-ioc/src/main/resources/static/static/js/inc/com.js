function hidecom(){
  obj=document.getElementById("floatcom");
  obj.style.display='none';
}
lastScrollY = 0;
function heartBeat()
{
	diffY	= document.body.scrollTop;
	percent =1*(diffY-lastScrollY);

	if(percent>0) percent = Math.ceil(percent);
	else   percent = Math.floor(percent);
	document.all.floatcom.style.pixelTop+= percent;
	lastScrollY = lastScrollY+percent;
}
window.setInterval("heartBeat()",1);