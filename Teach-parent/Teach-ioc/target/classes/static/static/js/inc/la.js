function hideleft(){
  obj=document.getElementById("tleft");
  obj.style.display='none';
}
lastScrollYleft = 0;
function heartBeatleft()
{
	diffYleft	= document.body.scrollTop;
	percentleft =1*(diffYleft-lastScrollYleft);

	if(percentleft>0) percentleft = Math.ceil(percentleft);
	else   percentleft = Math.floor(percentleft);
	document.all.tleft.style.pixelTop+= percentleft;
	lastScrollYleft = lastScrollYleft+percentleft;
}
window.setInterval("heartBeatleft()",1);