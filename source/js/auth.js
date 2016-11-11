$("#authorize").on('click',function(){
  var $this = $(this),
    $login = $this.closest("form").find("[name=login]"),
    $pas = $this.closest("form").find("[name=password]"),
    login = $login.val().trim(),
    pas = $pas.val().trim();
    if(login.length && pas.length){
      $.ajax({
        type: "POST",
        url: "./assets/php/auth.php",
        data: "login="+login+"&password="+pas,
        success: function(msg){
          var res = JSON.parse(msg);
          if (!res){
            alert("Wrong login and/or password");
            $login.val("");
            $pas.val("");
          } else {
            localStorage.LSGroupProject_userID = res.id_user;
            location.href="/main.html";
          }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          console.log('Ajax request error');
        }
      });
    } else {
      alert("Both login & password MUST be filled");
    }
});

$("#quit").on('click',function(){
  localStorage.removeItem('LSGroupProject_userID');
  location.href="/index.html";
});