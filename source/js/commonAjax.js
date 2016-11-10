var commonAjax = (function () {

    var ajaxForm = function (ajaxData, url) {
        if (!validation.validateForm(ajaxData))
            return false;

        var data =ajaxData.serialize();
        var result = $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data,
            success: function (ans) {
                console.log(ans);

            },
            error: function () {
                console.log('error');
            }
        });

        return result;


    };

    return {
        ajaxForm: ajaxForm
    };

})();