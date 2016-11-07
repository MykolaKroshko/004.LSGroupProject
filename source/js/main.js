

var eventListeners = (function () {
    var init = function () {
        _setUpListeners();
    };

    var _setUpListeners = function () {

        $('.topArrow').on('click', _smoothScrollUp);

git         $('#edit').on('click', _editHeader);
        $('#addAlbum').on('click', _addAlbum);
        $('.editAlbum').on('click', _editAlbum);
        $('#addPhoto').on('click', _addPhoto);
        $('.editPhoto').on('click', _editPhoto);

        $('.popUp__close').on('click', _closePopUp);


    };

    var _smoothScrollUp = function (ev) {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    }

    var _editHeader = function (ev) {
        ev.preventDefault();
        $('#popUp_editHeader').addClass("popUp__overlay-show");

    };

    var _addAlbum = function (ev) {
        ev.preventDefault();
        $('#popUp_addAlbum').addClass("popUp__overlay-show");

    };

    var _editAlbum = function (ev) {
        ev.preventDefault();
        $('#popUp_editAlbum').addClass("popUp__overlay-show");

    };

    var _addPhoto = function (ev) {
        ev.preventDefault();
        $('#popUp_addPhoto').addClass("popUp__overlay-show");

    };


    var _editPhoto = function (ev) {
        ev.preventDefault();
        $('#popUp_editPhoto').addClass("popUp__overlay-show");

    };

    var _closePopUp = function (ev) {
        $('.popUp__overlay').removeClass("popUp__overlay-show");
    };


    return {
        init: init
    };

})();

eventListeners.init();


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
                'slidedescription': 'Мы отправились в <a href="#">#путешествие</a> два дня назад, но уже сейчас такое ощущение, что мы посмотрели целый новый мир. Далее будет ещё одно описательное предложение. Возможно оно также будет с <a href="#"> #тегами.</a>',
                'comments': {
                    'name':'Шапокляк',
                    'comment':'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением. Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца.'
                }
            },

            {
                'name': 'Чебурашка',
                'title': 'Новый лежак',
                'url': 'assets/img/slider/slide2.png',
                'likes': '12',
                'slidedescription': 'Я лежу в <a href="#">#гамаке</a>',
                'comments': {
                    'name': 'Гена',
                    'comment': 'Крутая рогатка'
                }
            },
            {
                'name': 'Амиго',
                'title': 'Забугорье',
                'url': 'assets/img/slider/slide3.png',
                'likes': '15',
                'slidedescription': 'Поехали!!! До ближайшего населенного пункта 2000км. Не считая этой <a href="#">#деревни</a>, конечно',
                'comments': {
                    'name': 'Чебурашка',
                    'comment': 'Отличный лесапед'
                }
            }
        ]};
        var i = 0;

        //добавление контента в зависимости от слайда
        var addText=function (i) {
            $('.user__name').text(object.images[i].name);
            $('.user-comment__name ').text(object.images[i].comments.name);
            $('.user-comment__text ').text(object.images[i].comments.comment);
            $('.description__header').text(object.images[i].title);
            $('.description__main').html(object.images[i].slidedescription);
            $('.likes__quantity').text(object.images[i].likes);
        };

        //сам слайдер
        $('.arrow').on('click', function (e) {
            e.preventDefault();

            var $this=$(this),
                container=$this.closest('.slider'),
                sliderWindow=container.find('.slider__inner'),
                slide=sliderWindow.find('.slides__slide-foto')
               ;


            if($this.hasClass('arrow_left')){
                i--;
                if(i < 0){
                    i = slide.length-1;

                   }
                pos=-i*100;
                slide.animate({'left': pos+'%'});


;

                addText(i);
            }


            if($this.hasClass('arrow_right')){
                i++;
                if(i >=slide.length){
                    i = 0;
                }

                if(i<=0){
                    pos=0;
                    slide.animate({'left': pos+'%'});
                }

                else{
                    pos=(-i)*100;
                    slide.animate({'left': pos+'%'});
                }

                addText(i);

            }

        });


        //загрузка картинок для слайдера
        $(window).on('load', function() {
            for (var j = 0; j < object.images.length; j++){
                stringImg = '<img class="slides__slide-foto" src="'+object.images[j].url+'">';
                $('.slider__inner').append(stringImg);

            };
        });

        //лайки
        $('.slide__likes').on('click', function (e) {
            e.preventDefault();

            var
                $this=$(this),
                heart=$this.find('.heart');
                text=$this.find('.likes__quantity');

            counter=parseInt(object.images[i].likes)+1;

           text.text(counter);
            object.images[i].likes=counter;



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
