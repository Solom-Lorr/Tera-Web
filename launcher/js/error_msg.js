var PATCH_ERROR;
var PATCH_REASON;
var LAUNCHER_ERROR;

function initErrorMsgArray() {
    PATCH_ERROR = new Array();
    PATCH_ERROR['0'] = 'ERROR_NONE';
    PATCH_ERROR['1'] = 'patcher is not initialized';
    PATCH_ERROR['2'] = 'update information is not prepared';
    PATCH_ERROR['3'] = 'corrupted file found - run repair';
    PATCH_ERROR['4'] = 'invalid file path';
    PATCH_ERROR['5'] = 'invalid version.ini';
    PATCH_ERROR['6'] = 'download failed';
    PATCH_ERROR['7'] = 'cannot extract file';
    PATCH_ERROR['8'] = 'cannot patch file';
    PATCH_ERROR['9'] = 'cannot get file information';
    PATCH_ERROR['10'] = 'cannot access file';
    PATCH_ERROR['11'] = 'cannot move file';
    PATCH_ERROR['12'] = 'invalid server.db';
    PATCH_ERROR['13'] = 'invalid local.db - run repair';
    PATCH_ERROR['14'] = 'file mismatch - run repair';
    PATCH_ERROR['15'] = 'internal error';
    PATCH_ERROR['16'] = 'no memory';

    PATCH_REASON = new Array();
    PATCH_REASON['-1'] = 'UNKNOWN';
    PATCH_REASON['0'] = 'NONE';
    PATCH_REASON['1'] = 'ABORTED';
    PATCH_REASON['2'] = 'internal error';
    PATCH_REASON['3'] = 'invalid file size';
    PATCH_REASON['4'] = 'cannot open file';
    PATCH_REASON['5'] = 'cannot create file';
    PATCH_REASON['6'] = 'cannot read file';
    PATCH_REASON['7'] = 'cannot write file';
    PATCH_REASON['8'] = 'cannot extract file';
    PATCH_REASON['9'] = 'cannot patch file';
    PATCH_REASON['10'] = 'cannot calculate file hash value';
    PATCH_REASON['11'] = 'download disconnected';
    PATCH_REASON['12'] = 'download timeout';
    PATCH_REASON['13'] = 'invalid url';
    PATCH_REASON['14'] = 'url not found';
    PATCH_REASON['15'] = 'url busy';

    // Launcher는 ErrorCode로 2개의 16비트 integer를 반환한다. 이를 Error Code와 Additional info로 구분한다. Additional info는 프로그래머(현재 박광진님)이 체크하기 위한 것이고, 외부 공유에는 error code만 주면 된다.
    LAUNCHER_ERROR = new Object();
    LAUNCHER_ERROR['x0'] = 'Normal'; 								// 0	: 정상종료
    LAUNCHER_ERROR['x5'] = 'Error causing window to close'; 							// 5	: DirectX API 에러로 인한 크래시
    LAUNCHER_ERROR['x6'] = 'Data Center exception';						// 6	: 비정상 데이터센터
    LAUNCHER_ERROR['x7'] = 'Normal';								// 7 	: 정상종료
    LAUNCHER_ERROR['x8'] = 'During the game, a network error occurred';						// 8	: network error
    LAUNCHER_ERROR['x9'] = 'Connection timed out';								// 9	: ticket요청을 받고 5초 이내에 ticket을 전달하지 못했을 때
    LAUNCHER_ERROR['x10'] = 'Insufficient memory';								// 10	: 메모리 부족
    LAUNCHER_ERROR['x11'] = 'DirectX initialization failed';						// 11	: DirectX 초기화 실패
    LAUNCHER_ERROR['x12'] = 'Using an unsupported graphics card';							// 12	: 지원하지 않는 그래픽카드 사용
    LAUNCHER_ERROR['x15'] = 'Ended without input for a long time';						// 15	: 오랫동안 입력이 없어서 종료

    LAUNCHER_ERROR['x16'] = 'End normally through the connection end menu';						// 16	: 접속종료 메뉴를 통해서 정상종료

    LAUNCHER_ERROR['x32'] = 'Lost connection to server';							// 32	: 웹운영툴로 직접 접속종료
    LAUNCHER_ERROR['x33'] = 'Lost connection to server';							// 33	: 웹운영툴로 강제 접속종료
    LAUNCHER_ERROR['x34'] = 'Lost connection to server';							// 34	: 인게임 운영툴로 접속종료

    LAUNCHER_ERROR['x257'] = 'Member authentication failed';								// 257	: 인증 실패 : 인증키 불일치
    LAUNCHER_ERROR['x258'] = 'Billing error';							// 258	: billing fail
    LAUNCHER_ERROR['x259'] = 'Repeat login';								// 259	: 중복접속(기존접속)
    LAUNCHER_ERROR['x260'] = 'Goods expire';								// 260	: 상품만료(현재 사용안함) - ex. playtime 소진
    LAUNCHER_ERROR['x261'] = 'Error connecting to server';							// 261	: server network fail (현재 사용안함?-심재한) -ex. userEntityServer down.
    LAUNCHER_ERROR['x262'] = 'Repeat login';								// 262	: 중복접속(신규접속)
    LAUNCHER_ERROR['x263'] = 'No server connection permission';							// 263	: 서버 접속 권한 없음
    LAUNCHER_ERROR['x264'] = 'locking';									// 264	: BANNED

    LAUNCHER_ERROR['x273'] = 'SLS error';								// 273	: SLS 오류
    LAUNCHER_ERROR['x274'] = 'ini error';								// 274	: ini 오류
    LAUNCHER_ERROR['x275'] = 'TERA.EXE failed to execute';						// 275	: TERA.EXE 실행 실패
    LAUNCHER_ERROR['x276'] = 'Launcher update failed';						// 276	: 런처 업데이트 실패
    LAUNCHER_ERROR['x277'] = 'Update file initialization failed';							// 277	: 패처 초기화 실패
    LAUNCHER_ERROR['x278'] = 'Tampering with TERA.EXE or failing to connect to the TERA.EXE file';		// 278	: TERA.EXE가 변조되었거나 TERA.EXE파일에 접근 불가 상태

    LAUNCHER_ERROR['x65280'] = 'Game guard is related, Game guard causes the end.';		// 65280: 게임가드관련. 게임가드에 의한 종료.
    LAUNCHER_ERROR['x65285'] = 'Game guard is related, Game guard causes the end.';		// 65285: 게임가드관련. 게임가드에 의한 종료.
    //Additional info : 게임가드 오류코드. (2900~3700 : GameGuard의 CSAuth 관련 오류코드. 나머지 : GameGuard Client의 오류 코드)
    //Additional info : Game guard 錯誤碼。(2900~3700 : GameGuard的CSAuth相關錯誤碼，其餘 : GameGuard Client的錯誤碼)

    LAUNCHER_ERROR['x65535'] = 'Client unexpectedly crashed';								// 65535: Client crashed
    LAUNCHER_ERROR['x65520'] = 'Game program closes';								// 65520: Client crashed (client know)

    LAUNCHER_ERROR['0x000x'] = 'game program';			//Client	0~15
    LAUNCHER_ERROR['0x001x'] = 'Unable to connect to server';		//Arbiter	16~31
    LAUNCHER_ERROR['0x002x'] = 'Operating tools'; 			//운영툴		31~47
    LAUNCHER_ERROR['0x010x'] = 'Unable to connect to server';		//arg_gw	256~271
    LAUNCHER_ERROR['0x011x'] = 'launcher';		//launcher	272~287
    LAUNCHER_ERROR['0x0109'] = 'The client file is corrupted, please perform a file check.';		//클라이언트 파일이 손상 되었습니다. 파일 검사를 실행해 주시기 바랍니다.*/
}

function DisplayPatchError(patch_error, file, reason, code)
{
    error_msg = PATCH_ERROR[patch_error.toString()] + '\n';
    if (file.length > 0) error_msg += '\nfile : ' + file;
    if (reason > 0) error_msg += '\nreason : ' + PATCH_REASON[reason.toString()];
    error_msg += '\ncode : ' + code.toString();
    alert(error_msg);
}
function DisplayLauncherError(end_type1, end_type2)
{
    if (end_type1 == 0 || end_type1 == 7 || end_type1 == 16) return;
    var errorMsg = LAUNCHER_ERROR['x'+end_type1];
    errorMsg += "\nError code: " + end_type1 + '('+ end_type2 +')';
    errorMsg += '\nWould you like to move to the FAQ page?';
    if(confirm(errorMsg)){
    	window.open("../game/tera/faq?searchText="+end_type1);
    }
}
