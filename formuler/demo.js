function validation(){

  
  if(document.myform.fn.value=="yassin" &&document.myform.psw.value=="1234"){return true}
  else{   alert("your not admis");document.myform.fn.focus();  return false}
  
  }