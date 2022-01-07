

function cat_down () {x = 0;
x = document.getElementById("caat").offsetTop;
xn = x + 50;
document.getElementById("caat").style.top = xn+"px"
socket.send(document.getElementById("caat").style.top);
}
function cat_up () {
x = 0;
x = document.getElementById("caat").offsetTop;
xn = x - 50;
document.getElementById("caat").style.top = xn+"px"
socket.send(document.getElementById("caat").style.top);
}
function cat_left () {
x = 0;
x = document.getElementById("caat").offsetLeft;
xn = x - 50;
document.getElementById("caat").style.left = xn+"px"
socket.send(document.getElementById("caat").style.top);
}
function cat_right () {
x = 0;
x = document.getElementById("caat").offsetLeft;
xn = x + 50;
document.getElementById("caat").style.left = xn+"px"
socket.send(document.getElementById("caat").style.top);
}

function cam_down () {x = 0;
x = document.getElementById("cav").offsetTop;
xn = x + 50;
document.getElementById("cav").style.top = xn+"px"
socket.send(document.getElementById("cav").style.top);
}
function cam_up () {
x = 0;
x = document.getElementById("cav").offsetTop;
xn = x - 50;
document.getElementById("cav").style.top = xn+"px"
socket.send(document.getElementById("cav").style.top);
}
function cam_left () {
x = 0;
x = document.getElementById("cav").offsetLeft;
xn = x - 50;
document.getElementById("cav").style.left = xn+"px"
socket.send(document.getElementById("cav").style.top);
}
function cam_right () {
x = 0;
x = document.getElementById("cav").offsetLeft;
xn = x + 50;
document.getElementById("cav").style.left = xn+"px"
socket.send(document.getElementById("caat").style.top);
}



function viewDiv(){
  document.getElementById("div1").style.display = "block";
};
