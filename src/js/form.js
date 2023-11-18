export function initForm(formSelector) {
	const form = document.querySelector(formSelector);
	const inputs = Array.from(form.querySelectorAll('input'));
	inputs.push(...form.querySelectorAll('textarea'));
	inputs.forEach(input => {
		input.addEventListener('input', (e) => {
			const inputValue = e.target.value;
			if (inputValue.trim().length > 0) {
				input.classList.add('input-selected')
			} else {
				input.classList.remove('input-selected');
			}
		});
	});
}