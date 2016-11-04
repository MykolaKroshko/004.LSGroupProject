

var eventListeners = (function () {
    var init = function () {
        _setUpListeners();
    };

    var _setUpListeners = function () {


        $('#edit').on('click', _editHeader);
        $('#addAlbum').on('click', _addAlbum);
        $('#addPhoto').on('click', _addPhoto);
        // $('#close').on('click', console.log('111'));

    };

    var _editHeader = function (ev) {
        ev.preventDefault();
        $('#popUp_editHeader').addClass("popUp__overlay-show");

    };

    var _addAlbum = function (ev) {
        ev.preventDefault();
        $('#popUp_addAlbum').addClass("popUp__overlay-show");

    };

    var _addPhoto = function (ev) {
        ev.preventDefault();
        $('#popUp_addPhoto').addClass("popUp__overlay-show");

    };

    var _closePopUp = function (ev) {
        console.log('ddd');
        $('.popUp__overlay').removeClass("popUp__overlay-show");
    };


    return {
        init: init
    };

})();

eventListeners.init();

