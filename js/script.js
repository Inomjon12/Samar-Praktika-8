// 1
const slides = document.querySelectorAll('.offer__slide'),
prev = document.querySelector('.offer__slider-prev'),
next = document.querySelector('.offer__slider-next'),
total = document.querySelector('#total'),
current = document.querySelector('#current'),
slidesWrapper = document.querySelector('.offer__slider-wrapper'),
width = window.getComputedStyle(slidesWrapper).width,
slidesField = document.querySelector('.offer__slider-inner'),
slider = document.querySelector(".offer__slider");

// 5
let offset = 0;
let slideIndex = 1;

if (slides.length < 10) {
	total.textContent = `0${slides.length}`;
	current.textContent =  `0${slideIndex}`;
} else {
	total.textContent = slides.length;
	current.textContent =  slideIndex;
}

// 2
slidesField.style.width = 100 * slides.length + '%';

// 4
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';
slidesWrapper.style.overflow = 'hidden';

// 3
slides.forEach(slide => {
	slide.style.width = width;
});

slider.style.position = 'relative';
let indicator = document.createElement('ol');
indicator.style.cssText = `
position: absolute;
right: 0;
bottom: 0;
left: 0;


z-index: 0;
display: flex;
justify-content: center;
margin-right: 15%;
margin-left: 15%;
list-style: none;
`

// 6
next.addEventListener('click', () => {
	if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
		offset = 0;
	} else {
		offset += +width.slice(0, width.length - 2);
	}

	slidesField.style.transform = `translateX(-${offset}px)`;

	// 8
	if (slideIndex == slides.length) {
		slideIndex = 1;
	} else {
		slideIndex++;
	}

	if (slides.length < 10) {
		current.textContent =  `0${slideIndex}`;
	} else {
		current.textContent =  slideIndex;
	}
});

// 7
prev.addEventListener('click', () => {
	if (offset == 0) {
		offset = +width.slice(0, width.length - 2) * (slides.length - 1);
	} else {
		offset -= +width.slice(0, width.length - 2);
	}

	slidesField.style.transform = `translateX(-${offset}px)`;

	// 9
	if (slideIndex == 1) {
		slideIndex = slides.length;
	} else {
		slideIndex--;
	}

	if (slides.length < 10) {
		current.textContent =  `0${slideIndex}`;
	} else {
		current.textContent =  slideIndex;
	}
});