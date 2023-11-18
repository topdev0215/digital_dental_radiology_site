import '../sass/style.scss';

import "@fontsource/plus-jakarta-sans/800.css"

//appending background images
// import '../images/bg1.png'
// import '../images/bg2.png'
// import '../images/bg3.png'
// import '../images/bg4.png'
// import '../images/bg5.png'
// import '../images/bg6.png'
// import '../images/bg7.png'

import videojs from 'video.js';
import '../../node_modules/video.js/dist/video-js.min.css';
import  './vendors/swiperInit.js';

import NavMenu from './NavMenu';
import { initForm } from './form';

import './vendors/fullPage.js';
import './loader.js';

const menu = new NavMenu();

initForm('#get-in-touch');