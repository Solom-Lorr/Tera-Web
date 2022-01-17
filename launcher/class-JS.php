<?php

class JS
{
	function variables()
	{
		return "
			OTP_STATUS = '';
			ID = '';
			MODE = 'LIVE';
			VIP = '';
			PASS = '';
			IP = '127.0.0.1';";
	}
	function news()
	{
		ob_start();
		?>
			$(function () {
				var $block = $('#abgneBlock'),
					$slides = $('#player ul.list', $block),
					_height = 162,//$slides.find('li').height(),
					$li = $('li', $slides),
					_animateSpeed = 400,
					timer, _speed = 4000;

				// 產生 li 選項
				var _str = '';
				for (var i = 0, j = $li.length; i < j; i++) {
					// 每一個 li 都有自己的 className = playerControl_號碼
					_str += '<li class="playerControl_' + (i + 1) + '">' + (i + 1) + '</li>';
				}

				// 產生 ul 並把 li 選項加到其中
				// 並幫 li 加上 mouseover 事件
				var $controlLi = $('<ul class="playerControl"></ul>').html(_str).appendTo($('#player', $block).parent()).find('li');
				$controlLi.mouseover(function () {
					clearTimeout(timer);

					var $this = $(this);
					$this.addClass('current').siblings('.current').removeClass('current');
					// 移動位置到相對應的號碼
					$slides.stop().animate({
						top: _height * $this.index() * -1
					}, _animateSpeed, function () {
						if (!_isOver) timer = setTimeout(moveNext, _speed);
					});

					return false;
				}).eq(0).mouseover();

				// 當滑鼠移到 $block 時則停止輪播
				// 移出時則繼續輪播
				var _isOver = false;
				$block.mouseenter(function () {
					clearTimeout(timer);
					_isOver = true;
				}).mouseleave(function () {
					_isOver = false;
					timer = setTimeout(moveNext, _speed);
				});

				// 用來控制移動的函式
				function moveNext() {
					var _now = $controlLi.filter('.current').index();
					$controlLi.eq((_now + 1) % $controlLi.length).mouseover();
				}
			});

			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-59571872-17']);
			_gaq.push(['_trackPageview']);

			(function () {
				var ga = document.createElement('script');
				ga.type = 'text/javascript';
				ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl'
						: 'http://www')
					+ '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(ga, s);
			})();

			function noEvent() {
				if (event.keyCode == 116) {
					event.keyCode = 2;
					return false;
				} else if (event.ctrlKey
					&& (event.keyCode == 78 || event.keyCode == 82)) {
					return false;
				}
			}

			document.onkeydown = noEvent;
		<?php
		return ob_get_clean();
	}
}