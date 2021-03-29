
  
  function login()
  {
     let number = 1;
     var log=prompt("Login ID (admin)");
     var pass=prompt("Password (password)");
     if(log=="admin" && pass=="password")
    {
      alert("Access to resume granted!");
      
       
      }
   else
      {
    alert("Access Denied!!");
         window.location.replace("http://www.w3schools.com");
    
    }
  }
login();
  
  } 
