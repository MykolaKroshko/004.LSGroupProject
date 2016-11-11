$("#register").on('click',function(){
  var $this = $(this),
    $name = $this.closest("form").find("[name=name]"),
    $mail = $this.closest("form").find("[name=email]"),
    $pas = $this.closest("form").find("[name=password]"),
    name = $name.val().trim(),
    mail = $mail.val().trim(),
    pas = $pas.val().trim();
    if(name.length && mail.length && pas.length){
      $.ajax({
        type: "POST",
        url: "./assets/php/reg.php",
        data: "name="+name+"&mail="+mail+"&pas="+pas,
        success: function(msg){
          var res = JSON.parse(msg);
          if (!parseInt(res.newUserId)){
            alert(" Current E-mail is already taken");
            $name.val("");
            $mail.val("");
            $pas.val("");
          } else {
            localStorage.LSGroupProject_userID = res.newUserId;
            location.href="/main.html";
          }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          console.log('Ajax request error');
        }
      });
    } else {
      alert("All fields MUST be filled");
    }
});