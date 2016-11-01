/**
 * Created by Ma on 01.11.2016.
 */
var object = {'images':[
    {
        'name': 'Гена',
        'title': 'Водичка',
        'url': 'assets/img/slider/slide1.jpg',
        'likes': '10',
        'slidedescription': 'Описание 1',
        'comments': {
            'name':'Шапокляк',
            'comment':'Вау как круто'
        }
    },

    {
        'name': 'Чебурашка',
        'title': 'Новый лежак',
        'url': 'assets/img/slider/slide2.jpg',
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
        'url': 'assets/img/slider/slide3.jpg',
        'likes': '15',
        'slidedescription': 'Описание 3',
        'comments': {
            'name': 'Чебурашка',
            'comment': 'Отличный лесапед'
        }
    }
]};
var i = 0;


$('.slider__arrows-next').on('click',function(){
    i++;
    if(i > object.images.length-1){
        i = 0;
    }
    $('.slides__slide-foto').attr('src', object.images[i].url);
    $('.user__name').text(object.images[i].name);
    $('.user-comment__name ').text(object.images[i].comments.name);
    $('.user-comment__text ').text(object.images[i].comments.comment);
    $('.description__header').text(object.images[i].title);
    $('.description__main').text(object.images[i].slidedescription);
    $('.likes__quantity').text(object.images[i].likes);
});


$('.slider__arrows-prev').on('click',function(){
    i--;
    if(i < 0){
        i = object.images.length-1;
    }
    $('.slides__slide-foto').attr('src', object.images[i].url);
    $('.user__name').text(object.images[i].name);
    $('.user-comment__name ').text(object.images[i].comments.name);
    $('.user-comment__text ').text(object.images[i].comments.comment);
    $('.description__header').text(object.images[i].title);
    $('.description__main').text(object.images[i].slidedescription);
    $('.likes__quantity').text(object.images[i].likes);
    console.log (object.images[i].likes);
});
