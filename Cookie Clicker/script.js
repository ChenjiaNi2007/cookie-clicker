const myform = document.querySelector('#my-form');
const msg = document.querySelector('.msg');

let amount = 0;

myform.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  msg.classList.add('error');
  msg.innerHTML = amount;
  amount += 1;
}