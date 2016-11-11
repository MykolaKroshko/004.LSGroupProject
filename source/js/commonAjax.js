var commonAjax = (function () {

    var ajaxForm = function (ajaxData, url) {
        if (!validation.validateForm(ajaxData))
            return false;
        //преобразование в
        var data = new FormData(ajaxData[0]);
        data.append('user_id', localStorage.LSGroupProject_userID);
        var result = $.ajax({
            url: url,
            type: 'POST',
            // dataType: 'json',
            data: data,
            // async: false,
            processData: false,
            success: function (ans) {
                console.log(ans);

            },
            error: function () {
                console.log('error');
            },
            cache: false,
            contentType: false,
            processData: false
        });

        return result;

    };

    return {
        ajaxForm: ajaxForm
    };

})();