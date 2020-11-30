const msg = document.querySelector('.msg');
const button = document.querySelector('.increase');

if(localStorage.getItem("amount") == null){
	localStorage.setItem("amount", "0");
}
if(localStorage.getItem("increase") == null){
	localStorage.setItem("increase", "1");
}
if(localStorage.getItem("cost") == null){
	localStorage.setItem("cost", "100")
}


msg.innerHTML = localStorage.getItem("amount");
button.value = `Increase cookie  speed (${localStorage.getItem("cost")} cookies)`;


function onSubmit() {
  localStorage.setItem("amount", String(parseInt(localStorage.getItem("amount"))+parseInt(localStorage.getItem("increase"))));
  msg.innerHTML = localStorage.getItem("amount");
}

function increase() {
	if(parseInt(localStorage.getItem("amount")) >= parseInt(localStorage.getItem("cost"))) {
		localStorage.setItem("increase", String(parseInt(localStorage.getItem("increase"))+1));
		localStorage.setItem("amount", String(parseInt(localStorage.getItem("amount"))-parseInt(localStorage.getItem("cost"))));
		localStorage.setItem("cost", String(parseInt(localStorage.getItem("cost"))+50));
		button.value = `Increase cookie  speed (${localStorage.getItem("cost")} cookies)`;
	}
}