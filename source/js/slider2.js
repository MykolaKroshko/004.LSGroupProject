
//слайдер

$(document).ready(function () {
//закрытие окна
    (function() {
        $('.cross').on('click', function (e) {
            e.preventDefault();

            var
                $this=$(this),
                container=$this.closest('.slider_container');

            container.hide();
        });
    }());

//комментарии скрытие по нажатию на стрелку

    (function () {
        $('.comments-arrow').on('click', function (e) {
            e.preventDefault();

            var
                $this=$(this),
                container=$this.closest('.comments__head');

            if(!container.hasClass('comments__head_hide')){
                $this.css({'transform':'rotate(180deg)'});
                container
                    .addClass('comments__head_hide')
                    .siblings()
                    .hide();

            }

            else{
                $this.css({'transform':'rotate(0deg)'});
                container
                    .removeClass('comments__head_hide')
                    .siblings()
                    .show();
            }

        });

    }());



//слайдер
    (function(){
        //глобальный счетчик
        var i = 0;
        //запрет частых кликов
        var flag=true;
        //счетчик лайков
        var countLike=0;


        //добавление контента в зависимости от слайда
        var addText=function (i, object){


            $('.ava_comment').attr('src',object.images.photos[i].avatar);
            $('.imgUrl').val(object.images.photos[i].id_photo);
            $('.userID').val(localStorage.LSGroupProject_userID);
            $('.add-comment__current-commentator').text(object.user.name);
            $('.user__name').text(object.images.photos[i].name);
            $('.description__header').text(object.images.photos[i].photo);
            $('.description__main').html(object.images.photos[i].description);

            $('.comments-container').empty();

            //добавление комментов
            for(var k=0; k<object.images.comments.length; k++){
                if(object.images.comments[k].id_photo==object.images.photos[i].id_photo){

                stringComment='<div class="user-comment">';
                stringComment+='<div class="user-comment__name">'+object.images.comments[k].name+'</div>';
                stringComment+='<div class="user-comment__text">'+object.images.comments[k].text_comment+'</div>';
                $('.comments-container').append(stringComment);

                }
            }

            //добавление лайков
            for(var l=0; l<object.images.likes.length; l++) {

                if(object.images.likes[l].id_photo==object.images.photos[i].id_photo){
                    ++countLike;
                }
            }
            $('.likes__quantity').text(countLike);
            countLike=0;
            photoID='';

            //с фикседа на абсолют доделать
            /*$(window).scroll(function(){






                if($('.slider').height()>$(window).height()){
                    $('.slider_container').css({'position':'absolute'},
                                                {'top': '300px'});

                }

                else {

                    $('.slider_container').css({'position':'fixed'})


            });*/






        };


        //загрузка контента для слайдера
        $('#pictupeContainer').delegate('.new-photo__img','click', function() {

            //открытие слайдера по клику
            $('.slider_container').css({'display':'block'});

            window.scrollTo(0,0);


           //загрузка картинок
            for (var j = 0; j < dataStoreObject.images.photos.length; j++){
                //здесь нет путаницы в счетчикаx. i и j на своих местах!!!!!
                stringImg = '<img class="slides__slide-foto" src="'+dataStoreObject.images.photos[j].source+'">';
                $('.slider__inner').append(stringImg);


            }
            //добавление текста
            addText(i,dataStoreObject);

            var slide=$('.slides__slide-foto');
            //первая настройка высоты
            slide.on('load',function () {
                h=slide[i].height;
                $('.slider__inner').css({'height': h+'px'});
            });



        });


        //сам слайдер

        $('.arrow').on('click', function (e) {
            e.preventDefault();

            if(flag) {
                flag = false;

                var $this = $(this),
                    container = $this.closest('.slider'),
                    sliderWindow = container.find('.slider__inner'),
                    slide = sliderWindow.find('.slides__slide-foto')
                    ;


                if ($this.hasClass('arrow_left')) {


                    if (i <= 0) {
                        i = slide.length - 1;
                        $(slide[0]).animate({'left': '-100%'});
                        $(slide[i]).animate({'left': '0%'});
                        $(slide).css({'left': '100%'});
                    }
                    else {

                        $(slide[i]).animate({'left': '-100%'});
                        $(slide[i - 1]).animate({'left': '0%'});
                        $(slide).css({'left': '100%'});

                        i--;
                    }

                    //добавление текста
                    addText(i, dataStoreObject);
                    //изменение высоты контейнера
                    var h = slide[i].height;
                    $('.slider__inner').css({'height': h + 'px'});


                }


                if ($this.hasClass('arrow_right')) {


                    if (i >= slide.length - 1) {
                        i = 0;
                        $(slide[slide.length - 1]).animate({'left': '100%'});
                        $(slide[i]).animate({'left': '0%'});
                        $(slide).css({'left': '-100%'});
                    }

                    else {
                        $(slide[i]).animate({'left': '100%'});
                        $(slide[i + 1]).animate({'left': '0%'});
                        $(slide).css({'left': '-100%'});
                        i++;
                    }

                    //добавление текста
                    addText(i, dataStoreObject);
                    //изменение высоты контейнера
                    var h = slide[i].height;
                    $('.slider__inner').css({'height': h + 'px'});



                }
                setTimeout(function(){
                    flag=true;}, 500);

            }

        });

        //лайки
        $('.slide__likes').on('click', function (e) {
            e.preventDefault();

            var
                $this=$(this),
                heart=$this.find('.heart');
                text=$this.find('.likes__quantity');
                user=$('.add-comment__current-commentator').html();

            counter=parseInt(countLike)+1;

            text.text(counter);
                countLike=counter;


            var countLikeLast =({
                'img': dataStoreObject.images.photos[i].id_photo,
                'user': localStorage.LSGroupProject_userID
            });
            $.ajax({
                type: 'POST',
                url: '/assets/php/likes.php',
                data: countLikeLast,
                success: function (data) {
                    console.log(data);

                },
                error: function(xhr) {

                    console.log(xhr.responseCode);

                }
            });




        });

        //комментарии
        $('.add-comment__write-comment').on('submit', function(e){
            e.preventDefault();

            var
                $this=$(this);
            textarea=$this.find('.add-comment');

            $(textarea).on('focus', function () {
                $(this).css({'background': 'transparent'});
            });

            if(textarea.val().length==0){
                textarea.css({'background':'rgba(255,0,0,.3)'});
                return false;
            }
            else{
                var user=$('.add-comment__current-commentator').html();
                var commentText=textarea.val();
                var newComment='<div class="user-comment"><div class="user-comment__name">'+user+'</div><div class="user-comment__text">'+commentText+'</div>';
                $('.comments-container').prepend(newComment);

                var comment = $this.serialize();
                $.ajax({
                    type: 'POST',
                    url: '/assets/php/comment.php',
                    data: comment,
                    success: function (data) {
                        console.log(data);
                        textarea.val('');
                    },
                    error: function(xhr) {
                        textarea.css({'background':'rgba(255,0,0,.3)'});
                        console.log(xhr.responseCode);

                    }
                });


            }
        })
    }());

});
