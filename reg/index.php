<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Tera Registration</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="" />
	<meta name="keywords" content="" />

  	<!-- Facebook and Twitter integration -->
	<meta property="og:title" content=""/>
	<meta property="og:image" content=""/>
	<meta property="og:url" content=""/>
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content=""/>
	<meta name="twitter:title" content="" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:url" content="" />
	<meta name="twitter:card" content="" />

	<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
	<link rel="shortcut icon" href="favicon.ico">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="./css/bootstrap.min.css">
	<link rel="stylesheet" href="./css/animate.css">
	<link rel="stylesheet" href="./css/style.css">
	<!-- Modernizr JS -->
	<script src="./js/modernizr-2.6.2.min.js"></script>
	<!-- FOR IE9 below -->
	<!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<![endif]-->

	</head>
	<body>
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<ul class="menu">

					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 col-md-offset-4">
					<!-- Start Sign In Form -->
					<form method='post' action='index_act.php' class="fh5co-form animate-box" >
						<h2>Registration</h2>
						<div class="form-group">
							<label for="username" class="sr-only">用户名</label>
							<input name="id_N" type="text" class="form-control" id="username" placeholder="Nickname" autocomplete="off">
						</div>
						<div class="form-group">
							<label for="password1" class="sr-only">密码</label>
							<input name="pwd_P" type="password" class="form-control" id="password1" placeholder="Password" autocomplete="off">
						</div>
						<div class="form-group">
							<label for="password2" class="sr-only">确认密码</label>
							<input name="pwd1_P" type="password" class="form-control" id="password2" placeholder="Password" autocomplete="off">
						</div>		

						<div class="form-group">
							<input  style="width:60%;vertical-align:middle;margin-left:5px" type="text"  name="captcha" id ="captcha" placeholder="Verify code">
							<img  style="vertical-align:middle;" src="code.php" name="KeyImg" id="KeyImg"  onClick="document.getElementById('KeyImg').src='code.php?'+Math.random()">	
						</div>

						<div class="form-group" style = "text-align:center;vertical-align:middle;" >
						<input type="submit" value="Register" class="btn btn-primary" style = "font-size:20px;" >
						</div>
					</form>
					<!-- END Sign In Form -->
				</div>
			</div>
		</div>
	<!-- jQuery -->
	<script src="js/jquery.min.js"></script>
	<!-- Bootstrap -->
	<script src="js/bootstrap.min.js"></script>
	<!-- Placeholder -->
	<script src="js/jquery.placeholder.min.js"></script>
	<!-- Waypoints -->
	<script src="js/jquery.waypoints.min.js"></script>
	<!-- Main JS -->
	<script src="js/main.js"></script>
	</body>
</html>

