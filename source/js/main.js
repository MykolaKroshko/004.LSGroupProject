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
                'likes': '10',
                'slidedescription': 'Мы отправились в <a href="#">#путешествие</a> два дня назад, но уже сейчас такое ощущение, что мы посмотрели целый новый мир. Далее будет ещё одно описательное предложение. Возможно оно также будет с <a href="#"> #тегами.</a>',
                'comments': {
                    'name':'Шапокляк',
                    'comment':'Вау как круто'
                }
            },

            {
                'name': 'Чебурашка',
                'title': 'Новый лежак',
                'url': 'assets/img/slider/slide2.png',
                'likes': '12',
                'slidedescription': 'Описание 2',
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
                'slidedescription': 'Описание 3',
                'comments': {
                    'name': 'Чебурашка',
                    'comment': 'Отличный лесапед'
                }
            }
        ]};
        var i = 0;

        var addText=function (i) {
            //$('.slides__slide-foto').attr('src', object.images[i].url);
            $('.user__name').text(object.images[i].name);
            $('.user-comment__name ').text(object.images[i].comments.name);
            $('.user-comment__text ').text(object.images[i].comments.comment);
            $('.description__header').text(object.images[i].title);
            $('.description__main').html(object.images[i].slidedescription);
            $('.likes__quantity').text(object.images[i].likes);

        };


        $('.arrow').on('click', function (e) {
            e.preventDefault();

            var $this=$(this),
                container=$this.closest('.slider'),
                sliderWindow=container.find('.slider__inner');
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
    }());

});