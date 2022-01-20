var PATCH_ERROR;
var PATCH_REASON;
var LAUNCHER_ERROR;

function initErrorMsgArray()
{
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

	/*PATCH_ERROR = new Array();
	PATCH_ERROR['0'] = '未知的錯誤';
	PATCH_ERROR['1'] = '更新檔無法初始化';
	PATCH_ERROR['2'] = '無法開始更新';
	PATCH_ERROR['3'] = '檔案毀損 – 請重新執行遊戲';
	PATCH_ERROR['4'] = '無效的檔案路徑';
	PATCH_ERROR['5'] = '無效的version.ini';
	PATCH_ERROR['6'] = '下載失敗';
	PATCH_ERROR['7'] = '無法取得檔案';
	PATCH_ERROR['8'] = '無法更新檔案';
	PATCH_ERROR['9'] = '無法取得檔案資訊';
	PATCH_ERROR['10'] = '無法存取檔案';
	PATCH_ERROR['11'] = '無法移動檔案';
	PATCH_ERROR['12'] = 'server.db無效';
	PATCH_ERROR['13'] = 'local.db無效 – 請重新安裝';
	PATCH_ERROR['14'] = '檔案無法匹配 – 請重新安裝';
	PATCH_ERROR['15'] = '內部錯誤';
	PATCH_ERROR['16'] = '記憶體不足';
	
	PATCH_REASON = new Array();
	PATCH_REASON['-1'] = '未知的錯誤';
	PATCH_REASON['0'] = 'NONE' ;
	PATCH_REASON['1'] = '更新發生錯誤';
	PATCH_REASON['2'] = '內部錯誤';
	PATCH_REASON['3'] = '無效的檔案大小';
	PATCH_REASON['4'] = '檔案無法開啟';
	PATCH_REASON['5'] = '無法創建檔案';
	PATCH_REASON['6'] = '檔案無法讀取';
	PATCH_REASON['7'] = '檔案無法寫入';
	PATCH_REASON['8'] = '無法取得檔案';
	PATCH_REASON['9'] = '檔案無法更新';
	PATCH_REASON['10'] = '檔案無法辨識';
	PATCH_REASON['11'] = '中斷下載';
	PATCH_REASON['12'] = '超時下載';
	PATCH_REASON['13'] = '無效的網址';
	PATCH_REASON['14'] = '找不到網址';
	PATCH_REASON['15'] = '處理中請稍候';

//	Launcher는 ErrorCode로 2개의 16비트 integer를 반환한다. 이를 Error Code와 Additional info로 구분한다. Additional info는 프로그래머(현재 박광진님)이 체크하기 위한 것이고, 외부 공유에는 error code만 주면 된다.
	LAUNCHER_ERROR = new Object();
	LAUNCHER_ERROR['x0']='正常結束'; 								// 0	: 정상종료
	LAUNCHER_ERROR['x5']='錯誤導致視窗關閉'; 							// 5	: DirectX API 에러로 인한 크래시
	LAUNCHER_ERROR['x6']='Data Center 異常';						// 6	: 비정상 데이터센터
	LAUNCHER_ERROR['x7']='正常結束';								// 7 	: 정상종료
	LAUNCHER_ERROR['x8']='遊戲中，網路發生錯誤';						// 8	: network error
	LAUNCHER_ERROR['x9']='連線逾時';								// 9	: ticket요청을 받고 5초 이내에 ticket을 전달하지 못했을 때
	LAUNCHER_ERROR['x10']='記憶體不足';								// 10	: 메모리 부족
	LAUNCHER_ERROR['x11']='DirectX 初始化失敗';						// 11	: DirectX 초기화 실패
	LAUNCHER_ERROR['x12']='使用不支援的顯示卡';							// 12	: 지원하지 않는 그래픽카드 사용
	LAUNCHER_ERROR['x15']='許久時間沒有輸入而結束';						// 15	: 오랫동안 입력이 없어서 종료
	
	LAUNCHER_ERROR['x16']='透過連線結束選單正常結束';						// 16	: 접속종료 메뉴를 통해서 정상종료
	
	LAUNCHER_ERROR['x32']='與伺服器連線中斷';							// 32	: 웹운영툴로 직접 접속종료
	LAUNCHER_ERROR['x33']='與伺服器連線中斷';							// 33	: 웹운영툴로 강제 접속종료
	LAUNCHER_ERROR['x34']='與伺服器連線中斷';							// 34	: 인게임 운영툴로 접속종료
	
	LAUNCHER_ERROR['x257']='會員認證失敗';								// 257	: 인증 실패 : 인증키 불일치
	LAUNCHER_ERROR['x258']='Billing 錯誤';							// 258	: billing fail
	LAUNCHER_ERROR['x259']='重複登入';								// 259	: 중복접속(기존접속)
	LAUNCHER_ERROR['x260']='商品到期';								// 260	: 상품만료(현재 사용안함) - ex. playtime 소진
	LAUNCHER_ERROR['x261']='與伺服器連線錯誤';							// 261	: server network fail (현재 사용안함?-심재한) -ex. userEntityServer down.
	LAUNCHER_ERROR['x262']='重複登入';								// 262	: 중복접속(신규접속)
	LAUNCHER_ERROR['x263']='無伺服器連線權限';							// 263	: 서버 접속 권한 없음
	LAUNCHER_ERROR['x264']='鎖定';									// 264	: BANNED
	
	LAUNCHER_ERROR['x273']='SLS 錯誤';								// 273	: SLS 오류
	LAUNCHER_ERROR['x274']='ini 錯誤';								// 274	: ini 오류
	LAUNCHER_ERROR['x275']='TERA.EXE 執行失敗';						// 275	: TERA.EXE 실행 실패
	LAUNCHER_ERROR['x276']='Launcher更新失敗';						// 276	: 런처 업데이트 실패
	LAUNCHER_ERROR['x277']='更新檔初始化失敗';							// 277	: 패처 초기화 실패
	LAUNCHER_ERROR['x278']='竄改TERA.EXE或無法連接TERA.EXE檔案的狀況';		// 278	: TERA.EXE가 변조되었거나 TERA.EXE파일에 접근 불가 상태
	
	LAUNCHER_ERROR['x65280']='Game guard相關，Game guard導致結束。';		// 65280: 게임가드관련. 게임가드에 의한 종료.
	LAUNCHER_ERROR['x65285']='Game guard相關，Game guard導致結束。';		// 65285: 게임가드관련. 게임가드에 의한 종료.
	        //Additional info : 게임가드 오류코드. (2900~3700 : GameGuard의 CSAuth 관련 오류코드. 나머지 : GameGuard Client의 오류 코드)
			//Additional info : Game guard 錯誤碼。(2900~3700 : GameGuard的CSAuth相關錯誤碼，其餘 : GameGuard Client的錯誤碼)
	
	LAUNCHER_ERROR['x65535']='遊戲程式關閉';								// 65535: Client crashed
	LAUNCHER_ERROR['x65520']='遊戲程式關閉';								// 65520: Client crashed (client know)
	
	LAUNCHER_ERROR['0x000x']='遊戲程式';			//Client	0~15
	LAUNCHER_ERROR['0x001x']='伺服器無法連線';		//Arbiter	16~31
	LAUNCHER_ERROR['0x002x']='營運工具'; 			//운영툴		31~47
	LAUNCHER_ERROR['0x010x']='伺服器無法連線';		//arg_gw	256~271
	LAUNCHER_ERROR['0x011x']='launcher';		//launcher	272~287
	LAUNCHER_ERROR['0x0109']='客戶端檔案已經損壞，請執行檔案檢查。';		//클라이언트 파일이 손상 되었습니다. 파일 검사를 실행해 주시기 바랍니다.*/

}


/*
 
	LAUNCHER_ERROR = new Array();
	LAUNCHER_ERROR.set('x0','正常結束'); 								// 0	: 정상종료
	LAUNCHER_ERROR.set('x5','錯誤導致視窗關閉'); 							// 5	: DirectX API 에러로 인한 크래시
	LAUNCHER_ERROR.set('x6','Data Center 異常');						// 6	: 비정상 데이터센터
	LAUNCHER_ERROR.set('x7','正常結束');								// 7 	: 정상종료
	LAUNCHER_ERROR.set('x8','遊戲中，網路發生錯誤');						// 8	: network error
	LAUNCHER_ERROR.set('x9','連線逾時');								// 9	: ticket요청을 받고 5초 이내에 ticket을 전달하지 못했을 때
	LAUNCHER_ERROR.set('x10','記憶體不足');								// 10	: 메모리 부족
	LAUNCHER_ERROR.set('x11','DirectX 初始化失敗');						// 11	: DirectX 초기화 실패
	LAUNCHER_ERROR.set('x12','使用不支援的顯示卡');							// 12	: 지원하지 않는 그래픽카드 사용
	LAUNCHER_ERROR.set('x15','許久時間沒有輸入而結束');						// 15	: 오랫동안 입력이 없어서 종료
	
	LAUNCHER_ERROR.set('x16','透過連線結束選單正常結束');						// 16	: 접속종료 메뉴를 통해서 정상종료
	
	LAUNCHER_ERROR.set('x32','與伺服器連線中斷');							// 32	: 웹운영툴로 직접 접속종료
	LAUNCHER_ERROR.set('x33','與伺服器連線中斷');							// 33	: 웹운영툴로 강제 접속종료
	LAUNCHER_ERROR.set('x34','與伺服器連線中斷');							// 34	: 인게임 운영툴로 접속종료
	
	LAUNCHER_ERROR.set('x257','會員認證失敗');								// 257	: 인증 실패 : 인증키 불일치
	LAUNCHER_ERROR.set('x258','Billing 錯誤');							// 258	: billing fail
	LAUNCHER_ERROR.set('x259','重複登入');								// 259	: 중복접속(기존접속)
	LAUNCHER_ERROR.set('x260','商品到期');								// 260	: 상품만료(현재 사용안함) - ex. playtime 소진
	LAUNCHER_ERROR.set('x261','與伺服器連線錯誤');							// 261	: server network fail (현재 사용안함?-심재한) -ex. userEntityServer down.
	LAUNCHER_ERROR.set('x262','重複登入');								// 262	: 중복접속(신규접속)
	LAUNCHER_ERROR.set('x263','無伺服器連線權限');							// 263	: 서버 접속 권한 없음
	LAUNCHER_ERROR.set('x264','鎖定');									// 264	: BANNED
	
	LAUNCHER_ERROR.set('x273','SLS 錯誤');								// 273	: SLS 오류
	LAUNCHER_ERROR.set('x274','ini 錯誤');								// 274	: ini 오류
	LAUNCHER_ERROR.set('x275','TERA.EXE 執行失敗');						// 275	: TERA.EXE 실행 실패
	LAUNCHER_ERROR.set('x276','Launcher更新失敗');						// 276	: 런처 업데이트 실패
	LAUNCHER_ERROR.set('x277','更新檔初始化失敗');							// 277	: 패처 초기화 실패
	LAUNCHER_ERROR.set('x278','竄改TERA.EXE或無法連接TERA.EXE檔案的狀況');		// 278	: TERA.EXE가 변조되었거나 TERA.EXE파일에 접근 불가 상태
	
	LAUNCHER_ERROR.set('x65280','Game guard相關，Game guard導致結束。');		// 65280: 게임가드관련. 게임가드에 의한 종료.
	LAUNCHER_ERROR.set('x65285','Game guard相關，Game guard導致結束。');		// 65285: 게임가드관련. 게임가드에 의한 종료.
	        //Additional info : 게임가드 오류코드. (2900~3700 : GameGuard의 CSAuth 관련 오류코드. 나머지 : GameGuard Client의 오류 코드)
			//Additional info : Game guard 錯誤碼。(2900~3700 : GameGuard的CSAuth相關錯誤碼，其餘 : GameGuard Client的錯誤碼)
	
	LAUNCHER_ERROR.set('x65535','遊戲程式關閉');								// 65535: Client crashed

 */
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
    //var errorCode = sprintf('0x%X',end_type1);
    var errorMsg = LAUNCHER_ERROR['x'+end_type1];//+'('+errorCode+')';
    errorMsg += '\n錯誤編碼 : ' + end_type1 + '('+ end_type2 +')'; //종료 코드
    errorMsg += '\n要移動到FAQ頁面嗎？';//FAQ페이지로 이동하시겠습니까?
    if(confirm(errorMsg)){
    	window.open("../game/tera/faq?searchText="+end_type1);
    }
}
