var dataStoreObject = {};

$(function(){
  var pageId = $('#pageID').val();
  if (pageId !== 'auth'){
    var userId = localStorage.LSGroupProject_userID;
    if (userId === undefined){
      location.href="/index.html";
    }else{
      switch (pageId) {
        case 'album':
          console.log('album');
          break;
        case 'main':
          mainPageContent(userId);
          break;
        case 'search':
          console.log('search');
          break;
        case 'test':
          console.log('test');
          break;
        case 'user':
          console.log('user');
          break;
        default:
          location.href="/index.html";
      }
    }
  }
});

function mainPageContent(userId){
  $.ajax({
    type: "POST",
    url: "/assets/php/mainPageContent.php",
    data: "user_id="+userId,
    success: function(msg){
      dataStoreObject = jQuery.parseJSON(msg);
      renderMainPage();
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log('Ajax request error');
    }
  });
}