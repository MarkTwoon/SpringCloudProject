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
      alert("Email��ַ��ʽ����ȷ��");
      document.youjian.useremail.focus();
      return false;
      }
   }
 else
  {
   alert("Email����Ϊ�գ�");
   document.youjian.useremail.focus();
   return false;
   }
}