function validate(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
     if(email =="19oviya@gmail.com" && password == "12345678"){
        alert("You are a valid user")
     }
     else{
        alert("You are not a valid user")
     }
}