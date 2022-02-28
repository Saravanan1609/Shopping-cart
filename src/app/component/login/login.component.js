const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

LogInButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

logInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});