const firstlist = document.querySelector('.list1');
const secondlist = document.querySelector('.list2');
const thirdlist = document.querySelector('.list3');

const first = document.querySelector('.year2020');
const second = document.querySelector('.year2021');
const third = document.querySelector('.year2025');


first.addEventListener('click', () => first.classList.toggle('analysis__inner-itemgreen1'));
first.addEventListener('click', () => second.classList.remove('analysis__inner-itemgreen2'));
first.addEventListener('click', () => third.classList.remove('analysis__inner-itemgreen3'));
//
first.addEventListener('click', () => firstlist.classList.toggle('list1active'));
first.addEventListener('click', () => secondlist.classList.remove('list2active'));
first.addEventListener('click', () => thirdlist.classList.remove('list3active'));

second.addEventListener('click', () => second.classList.toggle('analysis__inner-itemgreen2'));
second.addEventListener('click', () => first.classList.remove('analysis__inner-itemgreen1'));
second.addEventListener('click', () => third.classList.remove('analysis__inner-itemgreen3'));
//
second.addEventListener('click', () => secondlist.classList.toggle('list2active'));
second.addEventListener('click', () => firstlist.classList.remove('list1active'));
second.addEventListener('click', () => thirdlist.classList.remove('list3active'));

third.addEventListener('click', () => third.classList.toggle('analysis__inner-itemgreen3'));
third.addEventListener('click', () => first.classList.remove('analysis__inner-itemgreen1'));
third.addEventListener('click', () => second.classList.remove('analysis__inner-itemgreen2'));
//
third.addEventListener('click', () => thirdlist.classList.toggle('list3active'));
third.addEventListener('click', () => firstlist.classList.remove('list1active'));
third.addEventListener('click', () => secondlist.classList.remove('list2active'));


// modals 
const makeModal = modalSel => {
	const modalEl = document.querySelector(modalSel);
		btnEl = document.querySelector(modalSel + '-btn'),
		closeEl = document.querySelector(modalSel + ' .modal-wrapper__bg'),

	btnEl.addEventListener('click', () => modalEl.classList.add('active'));
	closeEl.addEventListener('click', () => modalEl.classList.remove('active'));
}

makeModal('#modal-1');
makeModal('#modal-2');
makeModal('#modal-3');
makeModal('#modal-4');
makeModal('#modal-5');
makeModal('#modal-6');
makeModal('#modal-7');
// end modals

const onelist = document.querySelector('.ul1');
const twolist = document.querySelector('.ul2');
const threelist = document.querySelector('.ul3');

const one = document.querySelector('.blink__switch-item1');
const two = document.querySelector('.blink__switch-item2');
const three = document.querySelector('.blink__switch-item3');

one.addEventListener('click', () => one.classList.toggle('analysis__inner-itemgreen1'));
one.addEventListener('click', () => two.classList.remove('analysis__inner-itemgreen2'));
one.addEventListener('click', () => three.classList.remove('analysis__inner-itemgreen3'));

//
one.addEventListener('click', () => onelist.classList.toggle('list1active'));
one.addEventListener('click', () => twolist.classList.remove('list2active'));
one.addEventListener('click', () => threelist.classList.remove('list3active'));


two.addEventListener('click', () => two.classList.toggle('analysis__inner-itemgreen2'));
two.addEventListener('click', () => one.classList.remove('analysis__inner-itemgreen1'));
two.addEventListener('click', () => three.classList.remove('analysis__inner-itemgreen3'));
//
two.addEventListener('click', () => twolist.classList.toggle('list2active'));
two.addEventListener('click', () => onelist.classList.remove('list1active'));
two.addEventListener('click', () => threelist.classList.remove('list3active'));

three.addEventListener('click', () => three.classList.toggle('analysis__inner-itemgreen3'));
three.addEventListener('click', () => one.classList.remove('analysis__inner-itemgreen1'));
three.addEventListener('click', () => two.classList.remove('analysis__inner-itemgreen2'));
//
three.addEventListener('click', () => threelist.classList.toggle('list3active'));
three.addEventListener('click', () => onelist.classList.remove('list1active'));
three.addEventListener('click', () => twolist.classList.remove('list2active'));


//slider
let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
    	slideIndex = 1
    }
    if (n < 1) {
    	slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";    
}

//slider

const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
const icon3 = document.querySelector('.icon3');
const icon4 = document.querySelector('.icon4');
const icon5 = document.querySelector('.icon5');
const icon6 = document.querySelector('.icon6');
const icon7 = document.querySelector('.icon7');
const icon8 = document.querySelector('.icon8');

const icon1text = document.querySelector('.icon1text');
const icon2text = document.querySelector('.icon2text');
const icon3text = document.querySelector('.icon3text');
const icon4text = document.querySelector('.icon4text');
const icon5text = document.querySelector('.icon5text');
const icon6text = document.querySelector('.icon6text');
const icon7text = document.querySelector('.icon7text');
const icon8text = document.querySelector('.icon8text');

icon1.addEventListener('click', () => icon1.classList.toggle('icon__active'));
icon1.addEventListener('click', () => icon1text.classList.toggle('icontext__active'));
icon2.addEventListener('click', () => icon2.classList.toggle('icon__active'));
icon2.addEventListener('click', () => icon2text.classList.toggle('icontext__active'));
icon3.addEventListener('click', () => icon3.classList.toggle('icon__active'));
icon3.addEventListener('click', () => icon3text.classList.toggle('icontext__active'));
icon4.addEventListener('click', () => icon4.classList.toggle('icon__active'));
icon4.addEventListener('click', () => icon4text.classList.toggle('icontext__active'));
icon5.addEventListener('click', () => icon5.classList.toggle('icon__active'));
icon5.addEventListener('click', () => icon5text.classList.toggle('icontext__active'));
icon6.addEventListener('click', () => icon6.classList.toggle('icon__active'));
icon6.addEventListener('click', () => icon6text.classList.toggle('icontext__active'));
icon7.addEventListener('click', () => icon7.classList.toggle('icon__active'));
icon7.addEventListener('click', () => icon7text.classList.toggle('icontext__active'));
icon8.addEventListener('click', () => icon8.classList.toggle('icon__active'));
icon8.addEventListener('click', () => icon8text.classList.toggle('icontext__active'));

//мобильный список

const mfirst = document.querySelector('.myear2020');
const msecond = document.querySelector('.myear2021');
const mthird = document.querySelector('.myear2025');


//
mfirst.addEventListener('click', () => firstlist.classList.toggle('list1active'));
mfirst.addEventListener('click', () => secondlist.classList.remove('list2active'));
mfirst.addEventListener('click', () => thirdlist.classList.remove('list3active'));
mfirst.addEventListener('click', () => mthird.classList.toggle('mactive'));
mfirst.addEventListener('click', () => msecond.classList.toggle('mactive'));


//
msecond.addEventListener('click', () => secondlist.classList.toggle('list2active'));
msecond.addEventListener('click', () => firstlist.classList.remove('list1active'));
msecond.addEventListener('click', () => thirdlist.classList.remove('list3active'));
msecond.addEventListener('click', () => mfirst.classList.toggle('mactive'));
msecond.addEventListener('click', () => mthird.classList.toggle('mactive'));

//
mthird.addEventListener('click', () => thirdlist.classList.toggle('list3active'));
mthird.addEventListener('click', () => firstlist.classList.remove('list1active'));
mthird.addEventListener('click', () => secondlist.classList.remove('list2active'));
mthird.addEventListener('click', () => mfirst.classList.toggle('mactive'));
mthird.addEventListener('click', () => msecond.classList.toggle('mactive'));

const mbfirst = document.querySelector('.mbyear2020');
const mbsecond = document.querySelector('.mbyear2021');
const mbthird = document.querySelector('.mbyear2025');


//
mbfirst.addEventListener('click', () => onelist.classList.toggle('list1active'));
mbfirst.addEventListener('click', () => twolist.classList.remove('list2active'));
mbfirst.addEventListener('click', () => threelist.classList.remove('list3active'));
mbfirst.addEventListener('click', () => mbthird.classList.toggle('mactive'));
mbfirst.addEventListener('click', () => mbsecond.classList.toggle('mactive'));


//
mbsecond.addEventListener('click', () => twolist.classList.toggle('list2active'));
mbsecond.addEventListener('click', () => onelist.classList.remove('list1active'));
mbsecond.addEventListener('click', () => threelist.classList.remove('list3active'));
mbsecond.addEventListener('click', () => mbfirst.classList.toggle('mactive'));
mbsecond.addEventListener('click', () => mbthird.classList.toggle('mactive'));

//
mbthird.addEventListener('click', () => threelist.classList.toggle('list3active'));
mbthird.addEventListener('click', () => onelist.classList.remove('list1active'));
mbthird.addEventListener('click', () => twolist.classList.remove('list2active'));
mbthird.addEventListener('click', () => mbfirst.classList.toggle('mactive'));
mbthird.addEventListener('click', () => mbsecond.classList.toggle('mactive'));


const burger = document.querySelector('.nav__burger');
const sidebar = document.querySelector('.sidebar');
burger.addEventListener('click', () => burger.classList.toggle('nav__burger-active'));
burger.addEventListener('click', () => sidebar.classList.toggle('sidebar-active'));

const link1 = document.querySelector('.nav__link-first');
const link2 = document.querySelector('.nav__link-second');
const link3 = document.querySelector('.nav__link-third');
const link4 = document.querySelector('.nav__link-fourth');
const link5 = document.querySelector('.nav__link-fifth');

link1.addEventListener('click', () => sidebar.classList.remove('sidebar-active'));
link1.addEventListener('click', () => burger.classList.remove('nav__burger-active'));
link2.addEventListener('click', () => sidebar.classList.remove('sidebar-active'));
link2.addEventListener('click', () => burger.classList.remove('nav__burger-active'));
link3.addEventListener('click', () => sidebar.classList.remove('sidebar-active'));
link3.addEventListener('click', () => burger.classList.remove('nav__burger-active'));
link4.addEventListener('click', () => sidebar.classList.remove('sidebar-active'));
link4.addEventListener('click', () => burger.classList.remove('nav__burger-active'));
link5.addEventListener('click', () => sidebar.classList.remove('sidebar-active'));
link5.addEventListener('click', () => burger.classList.remove('nav__burger-active'));


