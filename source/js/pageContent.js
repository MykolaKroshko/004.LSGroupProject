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
          albumContent();
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
          userContent();
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
      dataStoreObject = JSON.parse(msg);
      renderMainPage();
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log('Ajax request error');
    }
  });
}

$("#showMore").on('click',function(){
  $.ajax({
    type: "POST",
    url: "/assets/php/LITW_addMore.php",
    data: "imageIdList="+dataStoreObject.photoIdList,
    success: function(msg){
      LITW_addMore(JSON.parse(msg));
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log('Ajax request error');
    }
  });
});

function albumContent(){
  $.ajax({
    type: "POST",
    url: "/assets/php/albumContent.php",
    data: "album_id="+location.search.replace(/.*?id=(\d*).*/,"$1"),
    success: function(msg){
      dataStoreObject = JSON.parse(msg);
      renderAlbum();
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log('Ajax request error');
    }
  });
}

function userContent(){
  $.ajax({
    type: "POST",
    url: "/assets/php/userContent.php",
    data: "user_id="+location.search.replace(/.*?id=(\d*).*/,"$1"),
    success: function(msg){
      dataStoreObject = JSON.parse(msg);
      renderUser();
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log('Ajax request error');
    }
  });
}