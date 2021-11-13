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


