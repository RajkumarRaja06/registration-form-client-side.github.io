const userNameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const button = document.getElementById('btn-Submit');
const formEl = document.getElementById('form');

function showError(input, message) {
  //parent element
  const parentEl = input.parentElement
  //child element
  const errorEl = parentEl.querySelector('.error');
  //update class
  errorEl.classList.add('error-msg');
  //display in HTML
  errorEl.innerHTML = message;
}

function successMsg(input) {
  input.classList.add('success')
  //parent element
  const parentEl = input.parentElement
  //child element
  const errorEl = parentEl.querySelector('.error');
  //update class
  errorEl.classList.remove('error-msg');
}

const array = [
  {
    input : userNameInput,
    message :"Username is Mandatory"
  },
  {
    input : emailInput,
    message :"Email is Mandatory"
  },
  {
    input : passwordInput,
    message :"Password is Mandatory"
  },
  {
    input : confirmPasswordInput,
    message :"Confirm Password is Mandatory"
  }
]

const checkRequired = function(input, message) {
  if(input.value.trim()) {
    successMsg(input);
  }
  else {
    showError(input, `${message}`);
  }
}


formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  
  for (let i = 0; i < array.length; i++) {
    input = array[i].input;
    message = array[i].message;
    checkRequired(input, message);
  }
})