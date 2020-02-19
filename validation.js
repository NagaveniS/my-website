
function form()
{
  console.log("function called");
  var error_count=0;

  var name_object=document.getElementById("fname");
  var email_obj=document.getElementById("email");
  var phone_obj=document.getElementById("phone");
  
  var res1 = name_validation(name_object,error_count);
  var res2 = email_validation(email_obj,error_count);
  var res3 = phone_validation(phone_obj,error_count);
  
  if(res1 == 0 && res2 == 0 && res3 == 0)
  {
      window.alert("form data submitted successfully");
     // document.getElementsByClassName("page").reset();
      return true;
   
  }
  else
  {
      return false;
  }

}
function name_validation(name,error_count)
{
    var pobj=name.parentElement.getElementsByTagName("p"); 
    var err_msg="First name cannot be empty";
    console.log("name validation function called");
    if(name.value == "")
    {  
        setError(pobj,err_msg); 
        error_count += 1;
    }
    else
    {
        console.log("1st else");
        clearError(pobj);      
    }
    return error_count;
}
function email_validation(mail,error_count)
{
  var pobj=mail.parentElement.getElementsByTagName("p");
  var err_msg="Mail cannot be empty";
  var pattern_mail=/^\w+@[a-zA-Z_0-9]+?\.[a-zA-Z]{2,3}$/; 
  if(mail.value == "")
  {
      setError(pobj,err_msg);
      error_count += 1;
      console.log(error_count);
        
  }
  else if(!(pattern_mail.test(mail.value)))
  { 
      var err_msg="mail is not valid";
      console.log("mail not validated");
      check_valid(pobj,err_msg);
      error_count +=1;

  }
  else
  {
      clearError(pobj);
       
  }
  return error_count;
}

function phone_validation(phone,error_count)
{
    var pobj=phone.parentElement.getElementsByTagName("p");
    var err_msg="phone Number cannot be empty";
 
  var pattern_phone=/^[\+]([0-9]{1,3})[\-]([0-9]{5,10})$/;
  if(phone.value == "")
    {
        setError(pobj,err_msg);
        error_count += 1;
    }
    else if(!(pattern_phone.test(phone.value)))
    {
       var err_msg="phone no is not valid";
       
        check_valid(pobj,err_msg);
        error_count += 1;
    }
    else
    {
        console.log("phone number validated successfully");
        clearError(pobj);
     
    }
    return error_count;

}
function setError(obj,err_msg)
{
  

obj[0].innerHTML=err_msg;
console.log(obj[0]);
 // document.getElementById(field_name).innerHTML ="This field can't be a blank!";
  document.getElementById("fname").focus();
}
 function clearError(field_name)
 {
  console.log("clear error function called ");

    field_name[0].innerHTML="";
 }
 function check_valid(pobj,err_msg)
 {
   console.log("set error function called");
   pobj[0].innerHTML=err_msg;
   document.getElementById("fname").focus();
 }

