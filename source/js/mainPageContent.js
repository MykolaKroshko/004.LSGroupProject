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
    url: "http://004.lsgroupproject/build/assets/php/mainPageContent.php",
    data: "user_id="+userId,
    success: function(msg){
      var result = jQuery.parseJSON(msg);
      console.log(result);
/*      if (result['status']=='ok'){
        BGPage.timeSavedNotification();
        $('table').after('<p class="saved alert">Time was successfully saved</p>');
        setTimeout(deleteElement, 3000);
        projData['dates_list']=result['dates_list'];
        savedTimeCount();
        totalSavedTime();
        loader_remove();
      }
      else if(result['status']=='error'){
        $('table').after('<p class="intError alert">'+result['description']+'</p>');
        loader_remove();
        return false;
      }
      else{                                        //unknown response
        $('table').after('<p class="unknow alert">UNKNOWN ERROR!!! PLEASE TRY AGAIN OR CONTACT YOUR SYSTEM ADMINISTRATOR IF YOU HAVE ALREADY SEEN THIS MESSAGE</p>');
        loader_remove();
        return false;
      }*/
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log('Ajax request error');
    /*  $('table').after('<p class="connect alert">CONNECTION ERROR HAPPENED.<br>Try again or contact your system administrator if you it\'s not the first time you see this message</p>');
      loader_remove();
      return false;*/
    }
  });
}
