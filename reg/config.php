<?php
$env = parse_ini_file('.env');
$config_agentid = 0;
$secret_salt = $env['salt'];

function isAlNum($str) {
	if(preg_match("[^0-9a-zA-Z]",$str))
		return 0;
	return 1;
}
function ismail( $str ) {
	if( preg_match("([a-z0-9\_\-\.]+)@([a-z0-9\_\-\.]+)", $str) )
		return true;
	return false;
}
?>
