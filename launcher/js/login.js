
	$(function() {
		var date = new Date();
 		var m = 60*24*7;	//7 day
 		date.setTime(date.getTime() + (m * 60 * 1000));

		if(ACCOUNT_NAME != '' && ACCOUNT_KEY != '' ){ //&& !isNaN(ACCOUNT_NAME)
			parent.LoginSuccess();	
		}//else $('#loginScreen').show();
		
		var idSave = $.cookie('idSave');
		var idValue = $.cookie('idValue');
		$('#userID').val(idValue);
		if(idValue != '' && idValue != null){			
			$('#checkboxIDSave').attr("checked",true);
		}
		
		$("#checkboxIDSave").click(function(){
			if($(this).attr("checked") == 'checked')
			{
				$.cookie('idSave', true, { expires: date });
				$.cookie('idValue', $('#userID').val(), { expires: date });				
			}
			else
			{
				$.cookie('idSave', false, { expires: date });
				$.cookie('idValue', null, { expires: date });			
				
			}
		});
		
	  });

	function idRegCheck(id){
		var id_regx=/^[0-9a-zA-Z]{4,13}$/;
		
		if(!id_regx.test(id.value)){
			alert('帳號請輸入4-13個英數字元');
			id.value="";
			//id.focus();
			return false;
		}else{
			return true;
		}
	}
	function pwRegCheck(pw){
		if(pw.value.length < 8 || pw.value.length >14){
			alert('密碼請輸入8-14個英數字元');
			pw.value="";
			//pw.focus();
			return false;
		}else{
			return true;
		}
	}	