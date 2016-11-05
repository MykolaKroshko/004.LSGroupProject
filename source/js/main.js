

var eventListeners = (function () {
    var init = function () {
        _setUpListeners();
    };

    var _setUpListeners = function () {


        $('#edit').on('click', _editHeader);
        $('#addAlbum').on('click', _addAlbum);
        $('#addPhoto').on('click', _addPhoto);

        $('.popUp__close').on('click', function(){
            _closePopUp();
        });

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
        $('.popUp__overlay').removeClass("popUp__overlay-show");
    };


    return {
        init: init
    };

})();

eventListeners.init();

//AJAX

var formData = $("#myform").serializeArray();
var URL = $("#myform").attr("action");
$.post(URL,
    formData,
    function(data, textStatus, jqXHR)
    {
        //data: Data from server.
    }).fail(function(jqXHR, textStatus, errorThrown)
{

});