import { toggleClasses, removeClasses } from './utils';

export default class {
	constructor() {
		this.toggleClass = 'open';
		this.init();
	}


	clickHandler() {
		const openIcon = this.toggler.querySelector('.open');
		const closeIcon = this.toggler.querySelector('.close');
		toggleClasses([this.navigation, this.toggler], this.toggleClass);
		toggleClasses([openIcon, closeIcon], 'hidden');
	}

	goToSection(e) {
		if (e.target.tagName === 'A') {
			this.clickHandler();
		}
	}


	init() {
		this.navigation = document.querySelector('.navigation');
		this.toggler = document.querySelector('.navigation-toggler');
		this.toggler.addEventListener('click', this.clickHandler.bind(this));
		this.navigation.addEventListener('click', this.goToSection.bind(this));
	}
}