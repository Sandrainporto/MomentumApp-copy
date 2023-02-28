const nameInput = document.querySelector('.name');

function setLocalStorage() {
	localStorage.setItem('name', nameInput.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
	if (localStorage.getItem('name')) {
		nameInput.value = localStorage.getItem('name');
	}
}
window.addEventListener('load', getLocalStorage)
