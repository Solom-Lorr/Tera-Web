<?php

require('class-JS.php');
$JS = new JS();
ob_start();
?>
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Launcher</title>
        <link rel="stylesheet" href="./css/core.css">
        <link rel="stylesheet" href="./css/ad.css">
        <script type="text/javascript" src="./js/jquery-latest.min.js"></script>
        <script src="./js/util.js"></script>
        <script src="./js/functions_launcher.js"></script>
        <script src="./js/error_msg.js?v=3"></script>
        <script type="text/javascript">
			<?php
                echo $JS->variables();
    			echo $JS->news();
			?>
        </script>
        <style type="text/css">
            html {
                overflow: hidden;
                padding: 0;
                margin: 0;
            }
        </style>
    </head>
    <body oncontextmenu="return false" ondragstart="return false" onselectstart="return false">
    <div class="wrap" style="display:none;">
        <div class="header">
            <div class="logo"><a href="http://bbs.47.93.47.124" target="_blank"><img src="images/logo.png"></a></div>
            <div class="col">
                <ul class="ico-wrap">
                    <li class="ico-fb"><a title="FaceBook" target="_blank" href="http://bbs.47.93.47.124">fb</a></li>
                    <li class="ico-gamer"><a title="巴哈姆特" target="_blank" href="http://bbs.47.93.47.124">gamer</a></li>
                    <li class="ico-vip vipMark" style="display:none;"><span>vip</span></li>
                </ul>
                <ul class="nav" style="clear: both;">
                    <li class="nav-all"><a target="_blank" href="http://bbs.47.93.47.124">綜合消息</a></li>
                    <li class="nav-guide"><a target="_blank" href="http://bbs.47.93.47.124">新手指南</a></li>
                    <li class="nav-billing"><a target="_blank" href="http://bbs.47.93.47.124">儲值購點</a></li>
                    <li class="nav-cs"><a target="_blank" href="http://bbs.47.93.47.124">客服中心</a></li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="notice">
                <h3>綜合消息</h3>
                <ul>
                    <li><a href="http://bbs.47.93.47.124" target="_blank"><span class="tit" style="float:left;"> 例行維護開機公告</span><span
                                    class="time">2020-04-16</span></a></li>
                    <li><a href="http://bbs.47.93.47.124" target="_blank"><span class="tit" style="float:left;"> 覺醒吧!紅龍迪亞哥 釣魚大滿足系列活動</span><span
                                    class="time">2020-04-16</span></a></li>
                    <li><a href="http://bbs.47.93.47.124" target="_blank"><span class="tit" style="float:left;"> 桃心領露肩時裝扭蛋</span><span
                                    class="time">2020-04-16</span></a></li>
                    <li><a href="http://bbs.47.93.47.124" target="_blank"><span class="tit"
                                                                                style="float:left;"> 例行維護公告</span><span
                                    class="time">2020-04-15</span></a></li>
                </ul>
            </div>
            <div class="ad">
                <h3>最新活動</h3>
                <div id="abgneBlock">
                    <div id="player">
                        <ul class="list">
                            <li><a target="_blank" href="http://bbs.47.93.47.124"><img
                                            src="images/20200415/1586936353808.jpg" width="460" height="162"></a></li>
                            <li><a target="_blank" href="http://bbs.47.93.47.124"><img src="images/1586319549881.jpg"
                                                                                       width="460" height="162"></a>
                            </li>
                            <li><a target="_blank" href="http://bbs.47.93.47.124"><img src="images/586242844367.jpg"
                                                                                       width="460" height="162"></a>
                            </li>
                            <li><a target="_blank" href="http://bbs.47.93.47.124"><img src="images/1585207796289.jpg"
                                                                                       width="460" height="162"></a>
                            </li>
                            <li><a target="_blank" href="http://bbs.47.93.47.124"><img src="images/1575944540867.jpg"
                                                                                       width="460" height="162"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style="display: block;width:840px;">
                <div class="progress">
                    <h3></h3>
                    <div class="total">
                        <div class="tit">total</div>
                        <div class="progress-bar progressAll">
                            <div class="progress-bar-complete" id="progressBar2" style=" width:30%;"></div>
                            <span class="file-name" id="totalText"></span>
                        </div>
                    </div>
                    <div class="now">
                        <div class="tit">now</div>
                        <div class="progress-bar progressNow">
                            <div class="progress-bar-complete" id="progressBar1" style=" width:80%;"></div>
                            <span class="file-name" id="fileName"></span>
                        </div>
                    </div>
                </div>
                <div class="check">
                </div>
                <div class="gamestart">
                    <button class="btn-gamestart btn" id="playButton" onclick="OnButtonClick()">遊戲啟動</button>
                </div>
            </div>
        </div>
        <div class="footer">©HappyTuk Co., Ltd. & Bluehole INC. All Rights Reserved.</div>
        <button class="btn-close" onclick="javascript:SendCommand('command:close')">close</button>
    </div>
    <div id="loginScreen" class="modalScreen">
        <iframe src="../tera/LauncherloginForm.php?id=&key=&permission=&charcountstr="
                id="loginIFrame" name="loginIFrame">
        </iframe>
    </div>
    <div id="otpScreen" class="modalScreen">
        <iframe id="otpFrame"></iframe>
    </div>
    </body>
    </html>
<?php

echo ob_get_clean();