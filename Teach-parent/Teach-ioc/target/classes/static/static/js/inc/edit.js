function Check(t,n)
{
if(n==1) t.className ="Up"
else
if(n==2) t.className ="Down"
else t.className ="None"
}

function fortable()
{message.focus();

  var range =message.document.selection.createRange();

  var arr = showModalDialog("inc/html/table.htm", "", "dialogWidth:22em; dialogHeight:20em; status:0;help:0");
  
  if (arr != null){
  var ss;
  ss=arr.split("*")
  a=ss[0];
  b=ss[1];
  c=ss[2];
  d=ss[3];
  e=ss[4];
  f=ss[5];
  g=ss[6];
  h=ss[7];
  var string;
  string="<table border="+d+" cellpadding="+e+" cellspacing="+f+" style='border-collapse: collapse' bordercolor="+g+" bgcolor="+h+" width=100 align="+c+">";
  for(i=1;i<=a;i++){
  string=string+"<tr>";
  for(j=1;j<=b;j++){
  string=string+"<td width="+100/a+"%></td>";
  }
  string=string+"</tr>";
  }
  string=string+"</table>";
    range.pasteHTML(string);
  }
  else message.focus();
}

function swf()
{ message.focus();

  var range =message.document.selection.createRange();
  var arr = showModalDialog("inc/html/flash.htm", "", "dialogWidth:20em; dialogHeight:18em; status:0;help:0");
  
  if (arr != null){
  var ss;
  ss=arr.split("*")
  a=ss[0];
  b=ss[1];
  c=ss[2];
  d=ss[3];
  e=ss[4];
  f=ss[5];
  g=ss[6];
  h=ss[7];
  j=ss[8];
  var string;
string="<table align="+g+"><tr><td><object width='"+f+"' height='"+e+"' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'  codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0'><param name=movie value='"+a+"'><param name=quality value=high><param name='Play' value='"+b+"'><param name='Loop' value='"+c+"'><param name='Menu' value='"+d+"'><embed src='"+a+"' pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash' type='application/x-shockwave-flash'></embed></object><br>"+h+"</td></tr></table>"
   //form1.PicUrl.value=j;
   //form1.PicList.options[form1.PicList.length] = new Option(j,j);
   range.pasteHTML(string);
  }
  else message.focus();
}

function wmv()
{message.focus();

var range =message.document.selection.createRange();

  var arr = showModalDialog("inc/html/media.asp", "", "dialogWidth:19em; dialogHeight:12em; status:0;help:0");
  
  if (arr != null){
  var ss;
  ss=arr.split("*")
  a=ss[0];
  b=ss[1];
  c=ss[2];
  d=ss[3];
  e=ss[4];
  f=ss[5];
  g=ss[6];
  h=ss[7];
  var string;
string="<p align="+g+"><embed src="+a+"  width="+e+" height="+e+"></embed><br>"+h+"</p>"
   range.pasteHTML(string);
  }
  else message.focus();
}


function rm()
{message.focus();

var range =message.document.selection.createRange();

  var arr = showModalDialog("inc/html/rm.asp", "", "dialogWidth:19em; dialogHeight:12em; status:0;help:0");
  
  if (arr != null){
  var ss;
  ss=arr.split("*")
  a=ss[0];
  b=ss[1];
  c=ss[2];
  d=ss[3];
  e=ss[4];
  f=ss[5];
  g=ss[6];
  h=ss[7];
  var string;
  if (h=="1"){
string="<p align="+d+"><object classid='clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA' width="+e+" height="+f+"><param name='CONTROLS' value='ImageWindow'><param name=src value="+a+"><param name='CONSOLE' value='Clip1'><param name='AUTOSTART' value="+b+"><param name='LOOP' value="+c+"></object><br><object classid='clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA' width="+e+" height=60><param name='CONTROLS' value='ControlPanel,StatusBar'><param name='CONSOLE' value='Clip1'></object><br>"+g+"</p>"
  }else{
string="<p align="+d+"><object classid='clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA' width="+e+" height=60><param name=src value="+a+"><param name='CONTROLS' value='ControlPanel,StatusBar'><param name='CONSOLE' value='Clip1'><param name='AUTOSTART' value="+b+"><param name='LOOP' value="+c+"></object><br>"+g+"</p>"
  }
  range.pasteHTML(string);
 }
  else message.focus();
}

function pic()
{message.focus();

var range =message.document.selection.createRange();

  var arr = showModalDialog("inc/html/pic.asp", "", "dialogWidth:19em; dialogHeight:13em; status:0;help:0");
  
  if (arr != null){
  var ss;
  ss=arr.split("*")
  a=ss[0];
  b=ss[1];
  c=ss[2];
  d=ss[3];
  e=ss[4];
  f=ss[5];
  var str1;
str1="<a target='_blank' href='"+a+"'>"
str1=str1+"<p align=center><img src='"+a+"' alt='"+b+"' style='"+c+"'"
str1=str1+" onload='javascript:if(this.width>screen.width-333)this.width=screen.width-333'"
str1=str1+" border=0 align='"+e+"'></a><br>"+d+"</P>"
   //form1.PicUrl.value=f;
   //form1.PicList.options[form1.PicList.length] = new Option(f,f);
   range.pasteHTML(str1);
   }
  else message.focus();
}

function pic1()
{message.focus();

var range =message.document.selection.createRange();

  var arr = showModalDialog("inc/html/pic.asp", "", "dialogWidth:19em; dialogHeight:13em; status:0;help:0");
  
  if (arr != null){
  var ss;
  ss=arr.split("*")
  a=ss[0];
  b=ss[1];
  c=ss[2];
  d=ss[3];
  e=ss[4];
  f=ss[5];
  var str1;
str1="<a target='_blank' href='"+a+"'>"
str1=str1+"<p align=center><img src='"+a+"' alt='"+b+"' style='"+c+"'"
str1=str1+" onload='javascript:if(this.width>screen.width-333)this.width=screen.width-333'"
str1=str1+" border=0 align='"+e+"'></a><br>"+d+"</P>"
   //form1.PicUrl.value=f;
   //form1.PicList.options[form1.PicList.length] = new Option(f,f);
   range.pasteHTML(str1);
   }
  else message.focus();
}


function pic2()
{message.focus();

var range =message.document.selection.createRange();

  var arr = showModalDialog("ad_addhw.asp", "", "dialogWidth:19em; dialogHeight:13em; status:0;help:0");
  
  if (arr != null){
  var ss;
  ss=arr.split("*")
  a=ss[0];
  b=ss[1];
  c=ss[2];
  d=ss[3];
  e=ss[4];
  f=ss[5];
  var str1;
str1="<a target='_blank' href='"+a+"'>"
str1=str1+"<p align=center><img src='"+a+"' alt='"+b+"' style='"+c+"'"
str1=str1+" onload='javascript:if(this.width>screen.width-333)this.width=screen.width-333'"
str1=str1+" border=0 align='"+e+"'></a><br>"+d+"</P>"
   //form1.PicUrl.value=f;
   //form1.PicList.options[form1.PicList.length] = new Option(f,f);
   range.pasteHTML(str1);
   }
  else message.focus();
}

function FIELDSET()
{message.focus();

var range =message.document.selection.createRange();

  var arr = showModalDialog("inc/html/fieldset.htm", "", "dialogWidth:16.5em; dialogHeight:13.5em; status:0;help:0");
  
  if (arr != null){
  var ss;
  ss=arr.split("*")
  a=ss[0];
  b=ss[1];
  c=ss[2];
  d=ss[3];
  var str1;
str1="<FIELDSET "
str1=str1+"align="+a+""
str1=str1+" style='"
if(c.value!='')str1=str1+"color:"+c+";"
if(d.value!='')str1=str1+"background-color:"+d+";"
str1=str1+"'><Legend"
str1=str1+" align="+b+""
str1=str1+">标题</Legend>内容</FIELDSET>"
  range.pasteHTML(str1);
  }
  else message.focus();
}

function iframe()
{message.focus();

var range =message.document.selection.createRange();

  var arr = showModalDialog("inc/html/iframe.asp", "", "dialogWidth:22em; dialogHeight:13.5em; status:0;help:0");
  
  if (arr != null){
  var ss;
  ss=arr.split("*")
  a=ss[0];
  b=ss[1];
  c=ss[2];
  d=ss[3];
  e=ss[4];
  var str1;
str1="<iframe src='"+a+"'"
str1+=" scrolling="+b+""
str1+=" frameborder="+c+""
if(d!='')str1+=" marginheight="+d
if(e!='')str1+=" marginwidth="+e
str1=str1+"></iframe>"
  range.pasteHTML(str1);
 }
  else message.focus();
}

function hr()
{message.focus();

var range =message.document.selection.createRange();

  var arr = showModalDialog("inc/html/hr.htm", "", "dialogWidth:20em; dialogHeight:13.5em; status:0;help:0");
  
  if (arr != null){
  var ss;
  ss=arr.split("*")
  a=ss[0];
  b=ss[1];
  c=ss[2];
  d=ss[3];
  e=ss[4];
  var str1;
str1="<hr"
str1=str1+" color='"+a+"'"
str1=str1+" size="+b+"'"
str1=str1+" "+c+""
str1=str1+" align="+d+""
str1=str1+" width="+e
str1=str1+">"
  range.pasteHTML(str1);
  }
  else message.focus();
}

function insertbr(br){

	document.form1.title.value+=br;
	document.form1.title.focus();
}

function insertbr1(br){

	document.form1.hongtou.value+=br;
	document.form1.hongtou.focus();
}

function title_color_onchange() {
	var title_colorIndex;
	title_colorIndex = form1.title_color.selectedIndex;
	form1.title.select ();
	switch (title_colorIndex)
	{
		case 1: form1.title.style.color = "#000000";
				break;
		case 2:	form1.title.style.color = "#000000";
				break;
		case 3:	form1.title.style.color = "#FFFFFF";
				break;
		case 4:	form1.title.style.color = "#008000";
				break;
		case 5:	form1.title.style.color = "#800000";
				break;
		case 6:	form1.title.style.color = "#808000";
				break;
		case 7:	form1.title.style.color = "#000080";
				break;
		case 8:	form1.title.style.color = "#800080";
				break;
		case 9:	form1.title.style.color = "#808080";
				break;
		case 10:form1.title.style.color = "#FFFF00";
				break;
		case 11:form1.title.style.color = "#00FF00";
				break;
		case 12:form1.title.style.color = "#00FFFF";
				break;
		case 13:form1.title.style.color = "#FF00FF";
				break;
		case 14:form1.title.style.color = "#FF0000";
				break;
		case 15:form1.title.style.color = "#0000FF";
				break;
		case 16:form1.title.style.color = "#008080";
				break;
	}
	form1.title.focus ();
}

function title_size_onchange() {
	var title_sizeIndex;
	title_sizeIndex = form1.title_size.selectedIndex;
	form1.title.select ();
	switch (title_sizeIndex)
	{
		case 1: form1.title.style.fontSize = "9pt";
				break;
		case 2:	form1.title.style.fontSize = "8px";
				break;
		case 3:	form1.title.style.fontSize = "10px";
				break;
		case 4:	form1.title.style.fontSize = "12px";
				break;
		case 5:	form1.title.style.fontSize = "14px";
				break;
		case 6:	form1.title.style.fontSize = "18px";
				break;
		case 7:	form1.title.style.fontSize = "24px";
				break;
		case 8:	form1.title.style.fontSize = "36px";
				break;
	}
	form1.title.focus ();
}

function title_type_onchange() {
	var title_typeIndex;
	title_typeIndex = form1.title_type.selectedIndex;
	form1.title.select ();
	switch (title_typeIndex)
	{
		case 1: form1.title.style.removeAttribute ("fontWeight");
				form1.title.style.removeAttribute ("fontStyle");
				form1.title.style.removeAttribute ("textDecoration");
				break;
		case 2:	form1.title.style.removeAttribute ("fontStyle");
				form1.title.style.removeAttribute ("textDecoration");
				form1.title.style.fontWeight = "bolder";
				break;
		case 3:	form1.title.style.removeAttribute ("fontWeight");
				form1.title.style.removeAttribute ("textDecoration");
				form1.title.style.fontStyle = "italic";
				break;
		case 4:	form1.title.style.removeAttribute ("fontStyle");
				form1.title.style.removeAttribute ("fontWeight");
				form1.title.style.textDecoration = "underline";
				break;
		case 5: form1.title.style.removeAttribute ("textDecoration");
				form1.title.style.fontWeight = "bolder";
				form1.title.style.fontStyle = "italic";
				break;
	}
	form1.title.focus ();
}

function title_face_onchange() {
	var title_faceIndex;
	title_faceIndex = form1.title_face.selectedIndex;
	form1.title.select ();
	switch (title_faceIndex)
	{
		case 1: form1.title.style.family = "宋体";
				break;
		case 2:	form1.title.style.family = "楷体_GB2312";
				break;
		case 3:	form1.title.style.family = "新宋体";
				break;
		case 4:	form1.title.style.family = "黑体";
				break;
		case 5:	form1.title.style.family = "隶书";
				break;
		case 6:	form1.title.style.family = "幼圆";
				break;
	}
	form1.title.focus ();
}

function IsDigit()
{
  return ((event.keyCode >= 48) && (event.keyCode <= 57));
}