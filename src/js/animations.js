import anime from 'animejs/lib/anime.es.js';

const DURATION = 800;


export function sectionAnimation(section) {
    let slideBotTranslateX = 0;
    if (window.innerWidth < 900 ) {
        slideBotTranslateX = '-50%';
    }
    const tl = anime.timeline({duration: DURATION, easing: 'cubicBezier(0.375, 0.485, 0.332, 0.99)'});
    tl
    // .add({
    //     targets: section.querySelectorAll('.layer-item:nth-child(odd)'),
    //     translateX: ['-150%', 0],
    //     translateY: ['150%', 0],
    //     easing: 'easeInOutQuad',
    //     translateZ: 0,
    // })
    // .add({
    //     targets: section.querySelectorAll('.layer-item:nth-child(even)'),
    //     translateX: ['150%', 0],
    //     translateY: ['-150%', 0],
    //     easing: 'easeInOutQuad',
    //     translateZ: 0,
    // }, `-=${DURATION}`)
    .add({
        targets: section.querySelector('.js-slide-left'),
        translateX: ['-150%', 0],
        translateZ: 0,
    })
    .add({
        targets: section.querySelector('.js-slide-right'),
        translateX: ['150%', 0],
        translateZ: 0,
    }, `-=${DURATION}`)
    .add({
        targets: section.querySelector('.js-slide-up'),
        translateY: ['-150%', 0],
        translateZ: 0,
    })
    .add({
        targets: section.querySelector('.js-slide-down'),
        translateY: ['150%', 0],
        translateZ: 0,
    }, `-=${DURATION}`)
    .add({
        targets: section.querySelector('.js-slide-bot'),
        translateX: {
            value: slideBotTranslateX,
            duration: 10
        },
        translateY: ['150%', 0],
        translateZ: 0,
    }, `-=${DURATION}`)
    

    return tl;
}


export function sectionLeaveAnimation(section) {
    // if (window.innerWidth < 900 ) {
    //     slideBotTranslateX = '-50%';
    // }
    const tl = anime.timeline({duration: DURATION, easing: 'easeInOutQuad'});
    tl
    .add({
        targets: section.querySelector('.js-slide-left'),
        translateX: '-150%',
        translateZ: 0,
    })
    .add({
        targets: section.querySelector('.js-slide-right'),
        translateX: '150%',
        translateZ: 0,
    }, 0)
    .add({
        targets: section.querySelector('.js-slide-up'),
        translateY: '-150%',
        translateZ: 0,
    })
    .add({
        targets: section.querySelector('.js-slide-down'),
        translateY: '150%',
        translateZ: 0,
    }, `-=${DURATION}`)
    .add({
        targets: section.querySelector('.js-slide-bot'),
        translateY: '150%',
        translateZ: 0,
    }, 0)
    .add({
        targets: section.querySelectorAll('.layer-item:nth-child(odd)'),
        translateX: '-150%',
        translateY: '150%',
        easing: 'easeInOutQuad',
        translateZ: 0,
    }, 0)
    .add({
        targets: section.querySelectorAll('.layer-item:nth-child(even)'),
        translateX: '150%',
        translateY: '-150%',
        easing: 'easeInOutQuad',
        translateZ: 0,
    }, 0)
}