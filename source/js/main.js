

var eventListeners = (function () {
    var init = function () {
        _setUpListeners();
    };

    var _setUpListeners = function () {

        $('.topArrow').on('click', _smoothScrollUp);

        $('#edit').on('click', _editUser);
        $('#addAlbum').on('click', _addAlbum);
        $('#albumsContainer').on('click', '.editAlbum', _editAlbum);
        $('#addPhoto').on('click', _addPhoto);
        $("#photoContainer").on('click', '.editPhoto', _editPhoto);

        $('.popUp__close').on('click', _closePopUp);


    //    AJAX
        $('#form_addAlbum').on('submit', _ajaxAddAlbum);
        $('#form_addPhoto').on('submit', _ajaxAddPhoto);
        // $('#form_editAlbum').on('submit', _ajaxEditAlbum);


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
    //вызов поп-апа редактирования хэдера 2
    var _editUser = function (ev) {
        ev.preventDefault();
        $('#popUp_editUser').addClass("popUp__overlay-show");

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
        //динамическое название альбома
        $('#form_addPhoto').find('.popUp__content__label__value').text($('#albumDescription').text());
    };


    //вызов поп-апа редактирования фотографии
    var _editPhoto = function (ev) {
        // ev.preventDefault();
        $('#popUp_editPhoto').addClass("popUp__overlay-show");

    };

    //закрытие поп-апа
    var _closePopUp = function (ev) {
        $('.popUp__overlay').removeClass("popUp__overlay-show");
    };

    //ajax добавление альбома
    var _ajaxAddAlbum = function (ev) {
        ev.preventDefault();
        var ajaxData = $(this);
        console.log(ajaxData);
        var id = localStorage.LSGroupProject_userID;
        // ajax запрос
        var defObj = commonAjax.ajaxForm(ajaxData, './assets/php/addAlbum.php', id);
        if(defObj){
            console.log('rrrr');
            defObj.done(function (ans) {
                console.log(ans);
                window.parent.location.reload();
            })
        }
        return false;

    };
    //ajax добавление фото
    var _ajaxAddPhoto = function (ev) {
        ev.preventDefault();
        var ajaxData = $(this);
        console.log(ajaxData);
        var id = location.search.replace(/.*?id=(\d*).*/,"$1");
        console.log(id);
        // ajax запрос
        var defObj = commonAjax.ajaxForm(ajaxData, './assets/php/addPhoto.php', id);
        if(defObj){
            console.log('photo added');
            defObj.done(function (ans) {
                console.log(ans);
                window.parent.location.reload();
            })
        }
        return false;

    };

    return {
        init: init
    };

})();

eventListeners.init();
