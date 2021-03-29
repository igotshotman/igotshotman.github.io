let number = 1;
do {
  
  function login()
  {
     var log=prompt("Login ID");
     var pass=prompt("Password");
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
