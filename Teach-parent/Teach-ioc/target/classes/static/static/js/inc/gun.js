var speed=30
demo2.innerHTML=demo1.innerHTML;
demo3.innerHTML=demo1.innerHTML;
demo4.innerHTML=demo1.innerHTML;
demo5.innerHTML=demo1.innerHTML;
demo6.innerHTML=demo1.innerHTML; 
demo7.innerHTML=demo1.innerHTML;
function Marquee(){
if(demo2.offsetWidth-demo.scrollLeft<=0)
demo.scrollLeft-=demo1.offsetWidth
else{
demo.scrollLeft++
}
}
var MyMar=setInterval(Marquee,speed)
demo.onmouseover=function() {clearInterval(MyMar)}
demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}