<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf8" />
<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<title></title>
</head>
<script language="javascript">
</script>

<body>
	<?PHP
	session_start();
	include('config.php');

	
	$id = $_POST["id_N"];
	$passo = $_POST["pwd_o"];
	$pass1 = $_POST["pwd_P"];
	$pass2 = $_POST["pwd1_P"];
	$isallok = 1;


	if($_SESSION['checkkey'] != strtolower($_POST['captcha']) || '' == strtolower($_POST['captcha']))
	{
		echo '<script language="JavaScript">alert("验证码为空或不正确");location.href="index.php";</script>';
		$isallok = 0;
	}	
	if (!isAlNum($id)) 
	{
		echo '<script language="JavaScript">alert("请使用数字或英文作用户名");location.href="index.php";</script>';
		$isallok = 0;
	}
	if (strlen($id) <4 && $isallok) 
	{
		echo '<script language="JavaScript">alert("用户名不得少于4个字符");location.href="index.php";</script>';		
		$isallok = 0;
	}
	if ((strlen($pass1) <8 || strlen($pass2) <8) && $isallok)
	{
		echo '<script language="JavaScript">alert("你输入的密码少于8个字符");location.href="index.php";</script>';				
		$isallok = 0;
	}
	if ($pass1 != $pass2 && $isallok) 
	{
		echo '<script language="JavaScript">alert("两次密码输入不符");location.href="index.php";</script>';					
		$isallok = 0;
	}
	//-- ----连接数据库---- --//
	$conn = new mysqli($config_dbHost, $config_dbUser, $config_dbPasswd, $config_dbName);
	// 检测连接
	if ($conn->connect_error) {
		$conn->close();
		die("连接失败: ");
	} 
	
	if($isallok)
	{
		$query="select userName,passWord from accountinfo where userName='$id'";
		$result = $conn->query($query);
		if($result->num_rows == 0 )
		{
			$conn->close();
			echo '<script language="JavaScript">alert("用户不存在。");location.href="index.php";</script>';
			die();			
		}
		else
		{
			$row = $result->fetch_assoc();

			echo $passo;
			echo '<br>';
			echo  $row["passWord"];
			if($passo != $row["passWord"])
			{
				$conn->close();
				echo '<script language="JavaScript">alert("原密码不正确。");location.href="index.php";</script>';
				die();	
			}
			else
			{
				$query="update accountinfo set passWord='".$pass1."' where userName = '".$row['userName']."'";
				if($conn->query($query) === TRUE){
					$conn->close();
					echo '<script language="JavaScript">alert("修改密码成功!!!");location.href="index.php";</script>';
				}else{
					$conn->close();
					echo '<script language="JavaScript">alert("修改密码失败!!!");location.href="index.php";</script>';
				}				
			}
		}
		
	}

?>

</body>
</html>
