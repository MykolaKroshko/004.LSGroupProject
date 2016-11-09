

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
