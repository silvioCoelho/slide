import Slide from './slide.js';

const slide = new Slide('.slide', '.wrapper');
slide.init();

slide.changeSlide(0)

console.log(slide);