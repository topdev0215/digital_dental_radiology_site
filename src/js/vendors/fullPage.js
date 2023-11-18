import fullpage from 'fullpage.js';
import { sectionAnimation, sectionLeaveAnimation } from '../animations';
import { setSectionElsTranslate } from '../utils';


let timeLine;
let currentSection;

const fullpageInstance = new fullpage('#fullpage', {
    anchors: ['home', 'home', 'home', 'about', 'plan-visit', 'prices', 'contact'],
    menu: '.fullpage-menu',
    recordHistory: false,
    scrollingSpeed: 1000,
    easingcss3: 'cubic-bezier(.56,.4,.19,.84)',

    afterRender: function() {
        const jsSlideLeftEls = document.querySelectorAll('.js-slide-left');
        const jsSlideRightEls = document.querySelectorAll('.js-slide-right');
        const jsSlideUpEls = document.querySelectorAll('.js-slide-up');
        const jsSlideDownEls = document.querySelectorAll('.js-slide-down');
        setSectionElsTranslate();
    },

    afterLoad: function(origin, destination, direction) {
        currentSection = destination.item;
        // console.log(section.querySelector('.js-slide-left'));
        timeLine = sectionAnimation(currentSection);
    },

    onLeave: function(origin, destination, direction) {
        const leaveSection = origin.item;
        // setTimeout(() => {
        //     setSectionElsTranslate(leaveSection);
        // }, 1000)
        sectionLeaveAnimation(leaveSection);
    },

    afterResponsive: function() {
        sectionAnimation(currentSection);
    }
});