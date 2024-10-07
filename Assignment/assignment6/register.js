window.onload = pageLoad;

function pageLoad() {
    var form = document.getElementById("myRegister");
    form.onsubmit = validateForm; //เรียก ฟังก์ชันเมื่อกดปุ่ม submit
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var Firstname = document.forms["myRegister"]["firstname"].value;
    var Lastname = document.forms["myRegister"]["lastname"].value;
    var Gender = document.forms["myRegister"]["gender"].value;
    var Birthday = document.forms["myRegister"]["bday"].value;
    var Email = document.forms["myRegister"]["email"].value;
    var Username = document.forms["myRegister"]["username"].value;
    var Password = document.forms["myRegister"]["password"][0].value; //ใช้ [0] [1] เพราะว่ามีฟิลด์ Input หลายฟิลด์ที่มีชื่อเดียวกันคือ password
    var RetypePassword = document.forms["myRegister"]["password"][1].value;

    var ErrorMsg = document.getElementById("errormsg");

    if ((Firstname == "") || (Lastname == "") || (Gender == "") || (Birthday == "") || (Email == "") || (Username == "") || (Password == "") || (RetypePassword == "")) {
        ErrorMsg.innerHTML = "กรุณากรอกข้อมูลให้ครบทุกช่อง";
        return false;
    }

    if (Password != RetypePassword) {
        ErrorMsg.innerHTML = "รหัสผ่านไม่ตรงกัน กรุณากรอกรหัสผ่านใหม่";
        return false;
    }

    alert("ลงทะเบียนสำเร็จ");
}