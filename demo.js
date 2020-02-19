function validateForm()
{
    temp=0;
    console.log("function called");
    
    var fname=document.forms["registration-page"]["fname"].value;
    var email=document.forms["registration-page"]["email"].value;
    var phone=document.forms["registration-page"]["phone"].value;
   
    var pattern_mail=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    var pattern_phone=/^[\+]([0-9]{2})[\-]([0-9]{10})$/;
    
    console.log(fname);
    console.log(email);
    console.log(phone);
    if(fname == "")
    {  
      document.getElementById("error-info1").innerHTML ="First Name can't be a blank!";   
    document.getElementById("fname").focus();
    temp=1;
    }
    else
    {
        console.log("1st else");
        document.getElementById("error-info1").innerHTML ="";
       
    }
    if(email == "")
    {
        document.getElementById("error-info2").innerHTML ="Email-Id can't be a blank!";
        document.getElementById("fname").focus();
        temp=1;
        
    }
    else if(!(pattern_mail.test(email)))
    {
         
        console.log("mail not validated");
        document.getElementById("error-info2").innerHTML ="please enter a valid email id";
        document.getElementById("fname").focus();
        temp=1;
    }
    else
    {
        document.getElementById("error-info2").innerHTML ="";
       
    }
    if(phone == "")
    {
        document.getElementById("error-info3").innerHTML ="phone number can't be a blank!";
        document.getElementById("fname").focus();
        temp=1;
    }
    else if(!(pattern_phone.test(phone)))
    {
        document.getElementById("error-info3").innerHTML ="please enter a valid phone number";
        document.getElementById("fname").focus();
        temp=1;
    }
    else
    {
        console.log("phone number validated successfully");
        document.getElementById("error-info3").innerHTML ="";
    }
    
    if(temp == 0)
    {
        window.alert("form data submitted successfully");
        return true;
        
    }
    else
    {
        console.log("failed");
        return false;
    }
    
   
}
