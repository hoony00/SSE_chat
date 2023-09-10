const id = document.getElementById('_login_id');
const num = document.getElementById('_num');
const login = document.getElementById('login');

login.addEventListener('click', () => {
   
    if( id.value != "" && id.value != null && id.value != undefined ) {
        if ( num.value != "" && num.value != null && num.value != undefined ) {
      
            window.localStorage.setItem("_id", id.value);
            window.localStorage.setItem("_num", num.value);
             alert("채팅방에 입장 합니다!");
	
	location.href="http://localhost:8080/chat.html";

			
        }
             }else {
               		alert("모든 정보를 입력 하십시오.");
                 	location.href="http://localhost:8080/login.html";
             }
})

