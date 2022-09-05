function login(){
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
     
     if((username=='adnan'||username=='sakr'||username=='mena'||username=='mayar'||username=='tony') && (password=='sakr')){
          document.location.href='./htmls/takhtet1.html'
     }else{
          alert('Username or Password is incorrect !')
     }
}