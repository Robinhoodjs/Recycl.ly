var log = document.getElementById("login");
var reg = document.getElementById("register");
var but = document.getElementById("buttons");


function login() {
	log.style.left = "50px";
	reg.style.left = "450px";
	but.style.left = "0px";
};

function register() {
	log.style.left = "-400px";
	reg.style.left = "50px"
	but.style.left = "110px";
};


