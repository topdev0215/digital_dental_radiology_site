export function toggleClasses(els, classNames) {
	els.forEach((el) => {
		classNames.split(' ').forEach((className) => {
			el.classList.toggle(className);
		});
	});
}

export const removeClasses = (els, classNames) => {
	els.forEach((el) => {
		classNames.split(' ').forEach((className) => {
			el.classList.remove(className);
		});
	});
}

export const addClass = (el, className) => el.classList.add(className);

export const removeClass = (el, className) => el.classList.remove(className);

export function scaleValue(value, from, to) {
	const scale = (to[1] - to[0]) / (from[1] - from[0]);
	const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
	return (capped * scale + to[0]);
}


export function setSectionElsTranslate(parent = document){
	const jsSlideLeftEls = parent.querySelectorAll('.js-slide-left');
	const jsSlideRightEls = parent.querySelectorAll('.js-slide-right');
	const jsSlideUpEls = parent.querySelectorAll('.js-slide-up');
	const jsSlideDownEls = parent.querySelectorAll('.js-slide-down');
	const jsSlideBot = parent.querySelectorAll('.js-slide-bot');
	const layers = parent.querySelectorAll('.layer-item');
	jsSlideLeftEls.forEach(el => {
		el.style.transform = 'translateX(-150%)';
	});
	jsSlideRightEls.forEach(el => {
		el.style.transform = 'translateX(150%)';
	});
	jsSlideUpEls.forEach(el => {
		el.style.transform = 'translateY(-150%)';
	});
	jsSlideDownEls.forEach(el => {
		el.style.transform = 'translateY(150%)';
	});
	jsSlideBot.forEach(el => {
		el.style.transform = 'translateY(150%)';
	});
	layers.forEach((el, idx) => {
		if (idx % 2 === 0) el.style.transform = 'translateX(150%) translateY(-150%)';
		else {
			el.style.transform = 'translateX(-150%) translateY(150%)';
		}
		// el.style.opacity = 0;
	});
}