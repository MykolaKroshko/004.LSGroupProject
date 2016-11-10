
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

        var object = {'images':[
            {
                'name': 'Гена',
                'title': 'Путешествие на речном трамвайчике',
                'url': 'assets/img/slider/slide1.jpg',
                'likes': '0',
                'slidedescription':'<p>Мы отправились в <a href="#">#путешествие</a> два дня назад, но уже сейчас такое ощущение, что мы посмотрели целый новый мир. Далее будет ещё одно описательное предложение. Возможно оно также будет с <a href="#"> #тегами.</a></p>',
                'comments': [{
                    'name':'Шапокляк',
                    'comment':'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением. Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца.'
                },{
                    'name':'Муму',
                    'comment':'Доплыла. Где этот Герасим!!!!!!'
                }
                ]},

            {
                'name': 'Чебурашка',
                'title': 'Новый лежак',
                'url': 'assets/img/slider/slide2.png',
                'likes': '12',
                'slidedescription': '<p>Я лежу в <a href="#">#гамаке</a></p>',
                'comments': [{
                    'name': 'Гена',
                    'comment': 'Крутая рогатка'
                }
                ]},
            {
                'name': 'Амиго',
                'title': 'Забугорье',
                'url': 'assets/img/slider/slide3.png',
                'likes': '15',
                'slidedescription': '<p>Поехали!!! До ближайшего населенного пункта 2000км. Не считая этой <a href="#">#деревни</a>, конечно</p>',
                'comments': [{
                    'name': 'Чебурашка',
                    'comment': 'Отличный лесапед'
                }]
            }
        ]};

        //глобальный счетчик
        var i = 0;
        //запрет частых кликов
        var flag=true;

        //добавление контента в зависимости от слайда
        var addText=function (i){

            var currentUserSrc="assets/img/slider/user-foto.png";
            var stringUserFoto='<img src='+currentUserSrc+' alt="Фото пользователя">';

            $('.user__foto').append(stringUserFoto);
            $('.imgUrl').val(object.images[i].url);
            $('.user__name').text(object.images[i].name);
            $('.description__header').text(object.images[i].title);
            $('.description__main').html(object.images[i].slidedescription);
            $('.likes__quantity').text(object.images[i].likes);
            $('.comments-container').empty();

            for(var k=0; k<object.images[i].comments.length; k++){
                stringComment='<div class="user-comment">';
                stringComment+='<div class="user-comment__name">'+object.images[i].comments[k].name+'</div>';
                stringComment+='<div class="user-comment__text">'+object.images[i].comments[k].comment+'</div>';
                $('.comments-container').append(stringComment);
            }

        };



        //загрузка контента для слайдера
        $('#pictupeContainer').delegate('.new-photo','click', function() {

            //открытие слайдера по клику
            $('.slider_container').css({'display':'block'});



            //загрузка картинок
            for (var j = 0; j < object.images.length; j++){
                //здесь нет путаницы в счетчикаx. i и j на своих местах!!!!!
                stringImg = '<img class="slides__slide-foto" src="'+object.images[j].url+'">';
                $('.slider__inner').append(stringImg);

                addText(i);
            }

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
                    addText(i);
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
                    addText(i);
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

            counter=parseInt(object.images[i].likes)+1;

            text.text(counter);
            object.images[i].likes=counter;


            var countLike =({
                'img': object.images[i].url,
                'likes': counter,
                'user': user
            });
            $.ajax({
                type: 'POST',
                url: '/assets/php/likes.php',
                data: countLike,
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
