function hideright(){
  obj=document.getElementById("tright");
  obj.style.display='none';
}
lastScrollYright = 0;
function heartBeatright()
{
	diffYright	= document.body.scrollTop;
	percentright =1*(diffYright-lastScrollYright);

	if(percentright>0) percentright = Math.ceil(percentright);
	else   percentright = Math.floor(percentright);
	document.all.tright.style.pixelTop+= percentright;
	lastScrollYright = lastScrollYright+percentright;
}
window.setInterval("heartBeatright()",1);