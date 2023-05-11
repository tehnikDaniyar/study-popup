const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');


let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	popupLinks.forEach(popupLink => {
		popupLink.addEventListener('click', (event) => {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			event.preventDefault();
		});
	});
};

const popupCloseIcons = document.querySelectorAll('.close-popup');

if (popupCloseIcons.length > 0) {
	popupCloseIcons.forEach(popupCloseIcon => {
		popupCloseIcon.addEventListener('click', (event) => {
			popupClose(popupCloseIcon.closest('.popup'));
			event.preventDefault();
		});
	});
};

function popupOpen(curentPopup) {
	if (curentPopup, unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		};

		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', (event) => {
			if (!event.target.closest('.popup__content')) {
				popupClose(event.target.closest('.popup'));
			};
		});
	}
}
