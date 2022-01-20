$(function () {
    var date = new Date();
    var m = 60 * 24 * 7;	//7 day
    date.setTime(date.getTime() + (m * 60 * 1000));

    if (ACCOUNT_NAME != '' && ACCOUNT_KEY != '') {
        parent.LoginSuccess();
    }

    var idSave = $.cookie('idSave');
    var idValue = $.cookie('idValue');
    $('#userID').val(idValue);
    if (idValue != '' && idValue != null) {
        $('#checkboxIDSave').attr("checked", true);
    }

    $("#checkboxIDSave").click(function () {
        if ($(this).attr("checked") == 'checked') {
            $.cookie('idSave', true, {expires: date});
            $.cookie('idValue', $('#userID').val(), {expires: date});
        } else {
            $.cookie('idSave', false, {expires: date});
            $.cookie('idValue', null, {expires: date});

        }
    });

});

function idRegCheck(id) {
    var id_regx = /^[0-9a-zA-Z]{4,13}$/;

    if (!id_regx.test(id.value)) {
        alert('ID has to be betweeen 4 and 13 characters');
        id.value = "";
        return false;
    } else {
        return true;
    }
}

function pwRegCheck(pw) {
    if (pw.value.length < 8 || pw.value.length > 14) {
        alert('Password has to be between 8 and 14  characters');
        pw.value = "";
        return false;
    } else {
        return true;
    }
}