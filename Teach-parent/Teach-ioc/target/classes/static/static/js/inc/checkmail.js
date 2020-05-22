function checkmail()
{
 if(document.youjian.useremail.value.length!=0)
  {
    if (document.youjian.useremail.value.charAt(0)=="." ||        
         document.youjian.useremail.value.charAt(0)=="@"||       
         document.youjian.useremail.value.indexOf('@', 0) == -1 || 
         document.youjian.useremail.value.indexOf('.', 0) == -1 || 
         document.youjian.useremail.value.lastIndexOf("@")==document.youjian.useremail.value.length-1 || 
         document.youjian.useremail.value.lastIndexOf(".")==document.youjian.useremail.value.length-1)
     {
      alert("Email地址格式不正确！");
      document.youjian.useremail.focus();
      return false;
      }
   }
 else
  {
   alert("Email不能为空！");
   document.youjian.useremail.focus();
   return false;
   }
}