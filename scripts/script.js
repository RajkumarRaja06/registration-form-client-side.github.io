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

formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  const userName = userNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if(userName){
    successMsg(userNameInput)

  }else{
    showError(userNameInput, "Username is Mandatory")
  }

  if(email){
    successMsg(emailInput)
  }else{
    showError(emailInput, "Email is Mandatory")
  }

  if(password){
    successMsg(passwordInput)
  }else{
    showError(passwordInput, "Password is Mandatory")
  }

  if(confirmPassword){
    successMsg(confirmPasswordInput)
  }else{
    showError(confirmPasswordInput, "Confirm Password is Mandatory")
  }
})