

var eventListeners = (function () {
    var init = function () {
        _setUpListeners();
    };

    var _setUpListeners = function () {

        $('.topArrow').on('click', _smoothScrollUp);

        $('#edit').on('click', _editHeader);
        $('#addAlbum').on('click', _addAlbum);
        $('.editAlbum').on('click', _editAlbum);
        $('#addPhoto').on('click', _addPhoto);
        $('.editPhoto').on('click', _editPhoto);

        $('.popUp__close').on('click', _closePopUp);


    //    AJAX
        $('#form_addAlbum').on('submit', _ajaxAddAlbum);


    };

    //плавный скролл вверх
    var _smoothScrollUp = function (ev) {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    };

    //вызов поп-апа редактирования хэдера
    var _editHeader = function (ev) {
        ev.preventDefault();
        $('#popUp_editHeader').addClass("popUp__overlay-show");

    };

    //вызов поп-апа добавления альбома
    var _addAlbum = function (ev) {
        ev.preventDefault();
        $('#popUp_addAlbum').addClass("popUp__overlay-show");

    };

    //вызов поп-апа редактирования альбома
    var _editAlbum = function (ev) {
        ev.preventDefault();
        $('#popUp_editAlbum').addClass("popUp__overlay-show");

    };

    //вызов поп-апа добавления фотографии
    var _addPhoto = function (ev) {
        ev.preventDefault();
        $('#popUp_addPhoto').addClass("popUp__overlay-show");

    };


    //вызов поп-апа редактирования фотографии
    var _editPhoto = function (ev) {
        ev.preventDefault();
        $('#popUp_editPhoto').addClass("popUp__overlay-show");

    };

    //закрытие поп-апа
    var _closePopUp = function (ev) {
        $('.popUp__overlay').removeClass("popUp__overlay-show");
    };

    //ajax добавление альбома
    var _ajaxAddAlbum = function (ev) {
        ev.preventDefault();
        var ajaxData = $(this),

        // ajax запрос
            defObj = commonAjax.ajaxForm(ajaxData, './assets/php/addAlbum.php');
        if(defObj){
            console.log('rrrr');
            defObj.done(function (ans) {
                console.log(ans);
            })
        }

        // defObj.done(function (ans) {
        //
        // })

    };


    return {
        init: init
    };

})();

eventListeners.init();
