window.onload = Toptext;
var postCount = 0;

function Toptext() {
    var Top = "Welcome to the Forum";
    document.getElementById("top").innerHTML = Top;
}

function postFunction() {
    var Message = document.getElementById("message").value;
    postCount++;
    if (postCount == 1) {
        document.getElementById("topic").innerHTML = Message;
    }
    else if (postCount == 2) {
        document.getElementById("reply1").innerHTML = Message;
    }
    else if (postCount == 3) {
        document.getElementById("reply2").innerHTML = Message;
    }
    document.getElementById("message").value = null;
}

function clearFunction() {
    var Clear = null;
    document.getElementById("topic").innerHTML = Clear;
    document.getElementById("reply1").innerHTML = Clear;
    document.getElementById("reply2").innerHTML = Clear;
    postCount = 0;
}