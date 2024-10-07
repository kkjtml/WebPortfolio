window.onload = loginLoad;

function loginLoad() {
	var login = document.getElementById("myLogin");
	login.onsubmit = checkLogin;
}

function checkLogin() {
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString); //ส่งข้อมูลจาก webpage นึง ไปยังอีก webpage นึง
	const RegisterUsername = urlParams.get('username'); //เรียก paramiter ใน URL //ใช้ดูค่า username
	const RegisterPassword = urlParams.get('password'); //ใช้ดูค่า password

	var LoginUsername = document.forms["myLogin"]["username"].value;
	var LoginPassword = document.forms["myLogin"]["password"].value;

	if (LoginUsername == RegisterUsername && LoginPassword == RegisterPassword) {
		alert("เข้าสู่ระบบสำเร็จ");
	}
	else {
		alert("ข้อมูลผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณากรอกใหม่");
		return false;
	}
}