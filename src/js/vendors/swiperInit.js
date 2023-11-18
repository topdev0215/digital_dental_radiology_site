import Swiper from 'swiper/bundle';
import SwiperCore from 'swiper/core';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

let pricesSwiper;

// const pricesSwiper = new Swiper('.prices__swiper', {
//     grabCursor: true,
//     spaceBetween: 30,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//         600: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//         },
//         900: {
//             noSwiping: true,
//         }
//     }
// })


export function initPricesSwiper() {
    const winWidth = window.innerWidth;

    if (winWidth >= 1250) {
        if (pricesSwiper !== undefined) pricesSwiper.destroy(true, true);
        document.querySelector('.prices .swiper-wrapper').classList.add('prices__wrapper');
    } else {
        document.querySelector('.prices .swiper-wrapper').classList.remove('prices__wrapper');
        pricesSwiper = new Swiper('.prices__swiper', {
                grabCursor: true,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                }
            })
    }
}

initPricesSwiper();

const animalSwiper = new Swiper('.animals__swiper', {
    // slidesPerView: 3,
    // autoplay: true,
    // grabCursor: true,
    //loop: true,
})

window.addEventListener('resize', initPricesSwiper);