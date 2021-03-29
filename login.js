
  
  function login()
  {
     let number = 1;
     var log=prompt("Login ID (admin)");
     var pass=prompt("Password (password)");
     if(log=="admin" && pass=="password")
    {
      alert("Access to resume granted!");
      function javascript_abort()
        {
           throw new Error('ignore');
        }
      }
   else
      {
    alert("Access Denied!!");
    }
  }
login();
  
  } 
