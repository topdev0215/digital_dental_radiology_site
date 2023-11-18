const loader = document.querySelector('.loader');

window.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		loader.classList.add('hidden');
	}, 1000)
});