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