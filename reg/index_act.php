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
	$pass1 = $_POST["pwd_P"];
	$pass2 = $_POST["pwd1_P"];
    
	if($_SESSION['checkkey'] != strtolower($_POST['captcha']) && $env['protect'] || '' == strtolower($_POST['captcha']) && $env['protect'])
	{
		echo '<script language="JavaScript">alert("The verification code is empty or incorrect");location.href="index.php";</script>';
		die();
	}
	
	if (!isAlNum($id)) 
	{
		echo '<script language="JavaScript">alert("Please use numbers or English as username");location.href="index.php";</script>';
		die();
	}
	if (strlen($id) <4)
	{
		echo '<script language="JavaScript">alert("User name must not be less than 4 characters");location.href="index.php";</script>';
		die();
	}
	if ((strlen($pass1) <8 || strlen($pass2) <8))
	{
		echo '<script language="JavaScript">alert("The password you entered is less than 8 characters");location.href="index.php";</script>';
		die();
	}
	if ($pass1 != $pass2)
	{
		echo '<script language="JavaScript">alert("Two password entries do not match");location.href="index.php";</script>';
		die();
	}

	$conn = new mysqli($env['host'], $env['user'], $env['pwd'], $env['db']);
	// 检测连接
	if ($conn->connect_error) {
		$conn->close();
		die("Connection failed: ");
	}
    $query="SELECT userName FROM accountinfo WHERE userName='test'";
    $result = $conn->query($query);
		
    if($result->num_rows > 0)
    {
        $conn->close();
        echo '<script language="JavaScript">alert("Username already exists, please register again.");location.href="index.php";</script>';
        die();
    }
    else {
        $pwdhash = hash('sha512', $secret_salt . $pass1);
        $query = "INSERT INTO accountinfo (userName, passWord) VALUES ('$id','$pwdhash')";
        if ($conn->query($query) === TRUE) {
            $conn->close();
            echo '<script language="JavaScript">alert("registration success !!!");location.href="index.php";</script>';
        } else {
			$conn->close();
			echo '<script language="JavaScript">alert("registration failed !!!");location.href="index.php";</script>';
		}
    }
?>

</body>
</html>
