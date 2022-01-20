<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge;"/>
    <title>TERA Classic test</title>
    <link rel="stylesheet" href="../launcher/css/login_new.css">

    <!-- <link rel="stylesheet" href="//landing.mangot5.com/template/tera/launcher/css/login_new.css"> -->
    <script type="text/javascript" src="../launcher/js/jquery-latest.min.js"></script>
    <script type="text/javascript" src="../launcher/js/login.js?version=2"></script>
    <script type="text/javascript" src="../launcher/js/jquery.cookie.js"></script>
    <script type="text/javascript" src="../launcher/js/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="../launcher/js/jquery-migrate-1.2.1.min.js"></script>
    <script>


        var ACCOUNT_NAME = '';
        var ACCOUNT_KEY = '';
        var PERMISSION = '';
        var CHARCOUNTSTR = '';
        var VIP = '';
        var PASS = '';

        function GetTimestamp() {
            return new Date().getTime();
        }

        function GetAccountID(account_name) {
            //alert('GetAccountID:'+ACCOUNT_NAME);
            return ACCOUNT_NAME;
        }

        function getTicket() {
            //alert('getTicket:'+ACCOUNT_KEY);
            return ACCOUNT_KEY;
        }

        function getCharCnt() {
            $.ajax({
                url: 'http://127.0.0.1:8080/tera/GetAccountInfoByUserNo',
                method: 'post',
                data: {id: ACCOUNT_NAME},
                async: false,
                success: function (data) {
                    CHARCOUNTSTR = data.charcountstr;
                    PERMISSION = data.charcountstr;
                    //alert('getCharCnt()__success_ACCOUNT_NAME:'+ACCOUNT_NAME+'__CHARCOUNTSTR:'+CHARCOUNTSTR+'__PERMISSION:'+PERMISSION);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert(jqXHR.responseText);
                    alert(jqXHR.url);
                    alert(jqXHR.status);
                    alert(jqXHR.readyState);
                    alert(jqXHR.statusText);
                }
            });

            return CHARCOUNTSTR;
        }

        function getPermission() {
            return PERMISSION;
        }

        function DoLogin() {
            $('#playButton').focus();

            var idObj = document.getElementById("userID");
            var pwObj = document.getElementById("userPW");
            if (!idRegCheck(idObj) || !pwRegCheck(pwObj)) {
                return;
            }

            $('.fullBtnBlue').hide();
            jQuery.support.cors = true;
            $.ajax({
                url: 'http://127.0.0.1:8080/LauncherLoginAction',
                method: 'POST',
                data: $('#userloginForm').serialize(),
                success: function (data) {
                    if (data.Return) {
                        ACCOUNT_NAME = data.UserNo;
                        ACCOUNT_KEY = data.AuthKey;
                        PERMISSION = data.Permission;
                        if (data.Permission == '') PERMISSION = 0;
                        CHARCOUNTSTR = data.CharacterCount;
                        PASS = data.PassitemInfo;
                        VIP = data.VipitemInfo;

                        if ($.cookie('idSave') == 'true') {
                            var date = new Date();
                            var m = 60 * 24 * 7;	//7 day
                            date.setTime(date.getTime() + (m * 60 * 1000));
                            $.cookie('idValue', $('#userID').val(), {expires: date});
                        }
                        parent.LoginSuccess();
                    } else {
                        alert(data.msg);
                        $('.fullBtnBlue').show();
                    }

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('failure:' + textStatus + errorThrown);
                }
            });
        }
    </script>
</head>
<body oncontextmenu="return false" ondragstart="return false" onselectstart="return false" style="overflow: hidden;">
<div class="wrap">
    <form class="form-horizontal" name="form1" method="post" id="userloginForm">
        <input type="hidden" name="r" value="478c98a0b14387f3966ebeec6b570348fffac684b96f1d2e48d0caa51b4b4adb"/>
        <div class="form-group">
            <div class="col">
                <input type="text" class="form-control form-uid" id="userID" name="userID" placeholder="username"
                       maxlength="30" onblur="idRegCheck(this)" tabindex="1">
            </div>
        </div>
        <div class="form-group">
            <div class="col">
                <input type="password" class="form-control form-password" id="userPW" name="password"
                       placeholder="password" maxlength="30" tabindex="2" onblur="pwRegCheck(this)"
                       onKeypress="if(event.keyCode ==13 && pwRegCheck(this)) DoLogin();/*$('.g-recaptcha').toggle();*/">
            </div>
        </div>
        <div class="form-group">
            <div class="col">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" id="checkboxIDSave"> remember </label>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="col">
                <button type="button" onclick="DoLogin();" tabindex="3" class="btn-submit">login</button>
                <a target="_blank" href="//127.0.0.1:81/reg/" class="btn-join">register</a></div>
        </div>
        <div class="g-recaptcha" data-callback="DoLogin" data-sitekey="6LcZ2f0SAAAAAD0eUdEP0YdkRZLYrdf8rg2qjsdj"
             data-size="normal" data-theme="dark"
             style="display:none;margin:3px 0px 0px 73px;position: absolute;"></div>
    </form>
    <button class="btn-close" onclick="javascript:parent.SendCommand('command:close')">close</button>
</div>
<!--/wrap-->
</body>
</html>
