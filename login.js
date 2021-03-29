let number = 1;
do {
  
  function login()
  {
     var log=prompt("Login ID (admin)");
     var pass=prompt("Password (password)");
     if(log=="admin" && pass=="password")
    {
      alert("Access to resume granted!");
      number++;
      }
   else
      {
    alert("Access Denied!!");
    }
  }
login();
  
  } 
while (number = 1);
