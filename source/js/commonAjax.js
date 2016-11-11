var commonAjax = (function () {

    var ajaxForm = function (ajaxData, url, id) {
        if (!validation.validateForm(ajaxData))
            return false;
        //преобразование в FormData
        var data = new FormData(ajaxData[0]);
        data.append('id', id);
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