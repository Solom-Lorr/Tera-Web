var launcher_status = 0;
var login_success = false;
var browser = false;

var http = "http:";
var slashes = http.concat("//");
var host = slashes.concat(window.location.hostname);

var patch_url = '';	
var sls_url = host +':81/server/serverList.xml';

var language = 'TW';//'USA';

function SendCommand(str) {
	if (browser) return;
    document.location.replace(str);
}
function LoginSuccess() {
	if(OTP_STATUS == 'true')ShowOTPUser(true, ID);
	else {
		SendCommand('command:size|960,610');
		$('.wrap').show().focus();
	}
	
    displayLoginIFrame(false);
    displayMarkCheck(loginIFrame.VIP, loginIFrame.PASS);
    login_success = true;
    SendCommand('command:login|'+ loginIFrame.ACCOUNT_NAME);
    //SendCommand('command:check_p');
}
function displayMarkCheck(vip, pass){
	if(vip == true)$('.vipMark').show();
	if(pass== true)$('.passMark').show();
}
function displayLoginIFrame(bShow) {
    if (bShow) 
        $('#loginScreen').show();
    else 
        $('#loginScreen').hide();
}
function displayError(strTitle, strError) {
    $('#errorTitle', $('#errorIFrame').contents()).html(strTitle);
    $('#errorText', $('#errorIFrame').contents()).html(strError);
    $("#errorScreen").show();
}

function CloseErrorFrame() {
    $("#errorScreen").hide();
}
function CloseInfoFrame() {
    $("#infoScreen").hide();
}
function enableLaunchButton(str,cls) {
	$('#playButton').addClass('ready');
	 
	$('#playButton').attr('class','btn '+cls);
    $('#playButton').text(str);
    $("#repair").show();
}
function disableLaunchButton(str,cls) {
	$('#playButton').removeClass('ready');
	
	$('#playButton').attr('class','btn '+cls);
    $('#playButton').text(str);
    $("#repair").show();
}
function OnButtonClick()
{
	switch($('#playButton').text())
	{
		case "遊戲啟動":	//PLAY
			LaunchGame();
			break;
		case "更新":
			PatchGame();
			break;
		case "REPAIR":
			RepairGame();
			break;
		case "中斷":	//ABORT
			AbortPatch();
			break;
	}
}
function LaunchGame() {
    disableLaunchButton('等待中','btn-wait');	//WAIT
    launcher_status = 3;
    //SendCommand('command:start_p|0'); //Original
    launcher_status = 0;
    SendCommand('command:execute|' + language);  //Start Game
}
function PatchGame() {
    enableLaunchButton('中斷','btn-break');	//ABORT
    $("#repair").hide();
    launcher_status = 1;
    SendCommand('command:start_p|1');
}
function RepairGame() {
    enableLaunchButton('中斷','btn-break');//ABORT
    $("#repair").hide();
    launcher_status = 2;
    SendCommand('command:start_p|2');
}
function AbortPatch() {
    disableLaunchButton('等待中','btn-wait'); //WAIT
    SendCommand('command:abort_p');
}
function l2w_getBaseUrl() {
	var http = "http:";
	var slashes = http.concat("//");
	var host = slashes.concat(window.location.hostname);
	var update_url = host +':81/patch';
	//alert('l2w_getBaseUrl:'+update_url);
	return update_url;
	//return 'http://127.0.0.1/patch';	
	
	
	var mode = 'live';
	if(window.location.hostname.indexOf('qa.') > -1) mode = 'test';
	else if(window.location.hostname.indexOf('preview.') > -1) mode = 'preview';
	return 'http://terapatch.mangot5.com/tera_patch/'+mode+'/patch';	
}
function l2w_getServerList() {
	//alert('l112w_getServerList:'+sls_url);
	return sls_url;
}
function l2w_getOTP() {
	//alert('l2w_getOTP:'+loginIFrame.getTicket());
    return loginIFrame.getTicket();
}
function l2w_getUserPermission() {
	//alert('l2w_getUserPermission:'+loginIFrame.getPermission());
    return loginIFrame.getPermission();
}
function l2w_getUserCharCnt() {
	//alert('l2w_getUserCharCnt:'+loginIFrame.getCharCnt());
    return loginIFrame.getCharCnt();
}
function l2w_tooManyRetry() {
    DEBUG_STR('Too many retries on patching');
    return 1;
}
function l2w_checkPatchResult(patch_result, patch_error, file, reason, code) {
    DEBUG_STR(sprintf('Check patch finished with %d %d [%s] %d, %d', patch_result, patch_error, file, reason, code));
    enableLaunchButton('遊戲啟動','btn-gamestart');	//PLAY
	return;
	
	switch (patch_result) {
        case 2:     // RESULT_LATEST_VERSION
            enableLaunchButton('遊戲啟動','btn-gamestart');	//PLAY
            break;
        case 3:     // RESULT_NEED_UPDATE
            enableLaunchButton('更新','btn-update');
            break;
        case 4:     // RESULT_NEED_FILE_CHECK
            enableLaunchButton('REPAIR','btn-repair');
            break;
        default:
        	if(patch_error == 3 || patch_error == 13 || patch_error == 14  ) enableLaunchButton('REPAIR');
	        else disableLaunchButton('錯誤','btn-wrong');	//ERROR
        	
            DisplayPatchError(patch_error, file, reason, code);
            break;
    }
}
function filecheck(){
	if($('#playButton').hasClass('btn-break'))return false;
	//launcher_status = 0;
	//SendCommand('command:start_p|2');
	RepairGame()
	//SendCommand('command:check_p');
}
function l2w_patchResult(patch_result, patch_error, file, reason, code) {
    DEBUG_STR(sprintf('Patch finished with %d %d [%s] %d, %d', patch_result, patch_error, file, reason, code));
    switch (patch_result) {
		case 0:
        case 2:
			$('#progressBar1').width('100%');
			$('#progressBar2').width('100%');
			$('#fileName').text('');
			$('#totalText').text('');
        	if (launcher_status == 3)
        	{
				disableLaunchButton('WAIT','btn-wait');		//WAIT
				launcher_status = 4;
				SendCommand('command:execute|' + language);
        	}
        	else
        	{
			    launcher_status = 0;
            	enableLaunchButton('遊戲啟動','btn-gamestart');	//PLAY
        	}
            break;
        case 3:
            break;
        case 4:
            enableLaunchButton('REPAIR','btn-repair');
            break;
        default:
       
	        if(patch_error == 3 || patch_error == 13 || patch_error == 14  ) 
				enableLaunchButton('REPAIR','btn-repair');
	        else disableLaunchButton('錯誤','btn-wrong');	//ERROR
	        
            DisplayPatchError(patch_error, file, reason, code);
            break;
    }
}
function l2w_currentFile(process, file) {
	var patch_info = '';
	switch (process)
	{
		case 0:		// PATCH_FILE_PROCESS_NONE
			patch_info = "preparing";
			break;
		case 1:		// PATCH_FILE_PROCESS_DOWNLOAD
			patch_info = "download : " + file;
			break;
		case 2:		// PATCH_FILE_PROCESS_EXTRACT
			patch_info = "extract : " + file;
			break;
		case 3:		// PATCH_FILE_PROCESS_PATCH
			patch_info = "patch : " + file;
			break;
		case 4:		// PATCH_FILE_PROCESS_HASH
			patch_info = "hash check : " + file;
			break;
		case 5:		// PATCH_FILE_PROCESS_DELETE
			patch_info = "delete : " + file;
			break;
		case 6:		// PATCH_FILE_PROCESS_FILE_CHECK
			patch_info = "size check : " + file;
			break;
		case 11:	// PATCH_FILE_PROCESS_MAKE_PATCH_LIST
			patch_info = "making patch list";
			break;
		default:
			patch_info = file;
			break;
	}
    $('#fileName').text(patch_info);
}
function l2w_currentProgress(rate, current, total, speed) {
    $('#progressBar1').width(rate+ '%');
//    $('#percent').text(sprintf('%d/%d', current, total));
//    $('#incomingAvgSpeed').text(speed);
}
function l2w_totalProgress(rate, current, total) {
    $('#progressBar2').width(rate+ '%');
    $('#totalText').text(sprintf('%d / %d', current, total));
}
function l2w_gameEvent(event) {
    DEBUG_STR(sprintf('Game event 0x%X', event));
    
    _gaq.push(['_trackPageview', 'game_event/' + event.toString()]);
    
}
function l2w_gameEnd(end_type1, end_type2) {
    DEBUG_STR(sprintf('Game end 0x%X, 0x%X', end_type1, end_type2));
    
    if(end_type2 == '')
    	_gaq.push(['_trackEvent', 'endPopup', end_type1.toString(16)]);		//1207
    else
    	_gaq.push(['_trackEvent', 'endPopup', end_type1.toString(16), end_type2.toString(16)]);
    
    launcher_status = 0;
    DisplayLauncherError(end_type1, end_type2);
    SendCommand('command:close');
}
function l2w_getExeInfo()
{
    //if (game_path.length == 0) return '';
    //if (exe_path.length == 0) return game_path;
    return '';
}
function l2w_systemInfoResult(result)
{
    DEBUG_STR(result);
    json_res = JSON.parse(result);
    if (json_res.result)
    {
    	//alert(json_res.processor_name);
    }
}
function l2w_displayInfoResult(result)
{
    DEBUG_STR(result);
    json_res = JSON.parse(result);
    if (json_res.result)
    {
    	//alert(json_res.description);
    }
}
function ShowOTPUser(status, userNo){
	if(status){
		$('#otpScreen').show();
		$('#otpFrame').attr('src','launcherMemberOTP?userNo='+userNo);
	}else {
		$('#otpScreen').hide();
		SendCommand('command:size|960,610');
		$('.wrap').show().focus();
	}
}

function ShowPhonelock(status){
	if(status){
		$('#phonelockScreen').show();
	}else $('#phonelockScreen').hide();
}

function l2w_getLauncherInfoUrl() {
	var http = "http:";
	var slashes = http.concat("//");
	var host = slashes.concat(window.location.hostname);
	var update_url = host +':81/patch/launcher_info.ini';
	//alert('l2w_getLauncherInfoUrl:'+update_url);
	return update_url;	
	
	
	
	//return 'http://127.0.0.1/patch/launcher_info.ini';
	
	
	var mode = 'live';
		if(window.location.hostname.indexOf('qa.') > -1) mode = 'test';
		else if(window.location.hostname.indexOf('preview.') > -1) mode = 'preview';
	return 'http://terapatch.mangot5.com/tera_patch/'+mode+'/patch/launcher_info.ini';
}

function l2w_openPopup(page_id) {
    if (page_id=30) {	//Facebook
        setTimeout(function() {
        	window.open('https://www.facebook.com/TERAonlineFansTW/'); }, 0);
        return;
    }
    /*if (page_id=31) {	//Twitter
        setTimeout(function() {
        	window.open('https://www.twitter.com'); }, 0);
        return;
    }*/
    if (page_id=33) {	//Youtube
        setTimeout(function() {
        	window.open('https://www.youtube.com/playlist?list=PLtAlnD6JwujJYGEWtYva0ILWcrnHJlhxt'); }, 0);
        return;
    }
}

$(function() {
    initErrorMsgArray();
    if(ID == '')displayLoginIFrame(true);
    SendCommand('command:size|320,500');
    
    //SendCommand('command:size|1000,670');
    SendCommand('command:client|0,80,1024,768');
    SendCommand('command:loaded');
    $('#progressBar1').width(0);
    $('#progressBar2').width(0);
    $('#fileName').text('');
    $('#totalText').text('');
});

if(window.location.hostname.indexOf('qa.') > -1 || window.location.hostname.indexOf('preview.') > -1) DebugEnable();
