function renderAlbum(){
  console.log(dataStoreObject);
  var header = dataStoreObject.album,
    photos = dataStoreObject.photos,
    comments = dataStoreObject.comments,
    likes = dataStoreObject.likes,
    $photoContainer = $('#photoContainer');

  $('#userName').text(header.name);
  $('#albumTitle').text(header.album_name);
  $('#albumDescription').text(header.description);
  $('#photosCount').text(photos.length);
  $('#commentsCount').text(comments.length);
  $('#likesCount').text(likes.length);
  if (header.avatar) {
    $('#avatar').attr('src',header.avatar);
  }
  if (header.cover){
    $(".headerContainer").css("background-image","url("+header.cover+")");
    $(".footer").css("background-image","url("+header.cover+")");
  }
  $photoContainer.html("");
  if (photos.length){
    for (var i = 0; i < photos.length; i++) {
      var likeCount = 0,
        commentCount = 0;

      for (var j = 0; j < comments.length; j++){    //counting comments for each picture
        if(comments[j].id_photo == photos[i].id_photo){
          ++commentCount;
        }
      }

      for (var k = 0; k < likes.length; k++){    //counting likes for each picture
        if(likes[k].id_photo == photos[i].id_photo){
          ++likeCount;
        }
      }

      var newPhoto = '<div class="photo">\
                        <div class="photo__img"><img src="'+photos[i].source+'" alt="new photo">\
                          <div class="photo__like clearfix">\
                            <div class="photo__like__amount clearfix"><i class="photo__like__amount_item fa fa-commenting" aria-hidden="true"></i>'+commentCount+'</div>\
                            <div class="photo__like__amount"><i class="photo__like__amount_item fa fa-heart" aria-hidden="true"></i>'+likeCount+'</div>\
                          </div>\
                        </div>\
                        <div class="photo__name clearfix"><i class="photo__name__img editPhoto fa fa-pencil" aria-hidden="true"></i><span class="photo__name__text">'+photos[i].photo+'</span></div>\
                      </div>';
      $photoContainer.append(newPhoto);
    } 
  }
};