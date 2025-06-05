// Menu Icon click event.

document.addEventListener("headerLoaded", () => {
	menuEvent();
});

document.addEventListener("qnsAnsLoaded", function () {
	accordionFnc();
});

function menuEvent() {
	const navContainer = document.querySelector(".navbar .nav-links");
	const menuicon = document.querySelector(".menuicon i");

	if (menuicon && navContainer) {
		menuicon.addEventListener("click", () => {
			navContainer.classList.toggle("active");

			if (menuicon.classList.contains("fa-bars")) {
				menuicon.classList.replace("fa-bars", "fa-times");
			} else {
				menuicon.classList.replace("fa-times", "fa-bars");
			}
		});
	} else {
		console.warn("menuicon or navContainer not found");
	}
}

function accordionFnc() {
	const accIcons = document.querySelectorAll(".accordion-content .acc-icon");

	accIcons.forEach((accIcon) => {
		accIcon.addEventListener("click", function () {
			const content = this.nextElementSibling;

			// Close all other paragraphs
			document.querySelectorAll(".accordion-content p").forEach((p) => {
				if (p !== content) {
					p.classList.remove("active");
				}
			});

			// Toggle the current one
			content.classList.toggle("active");
		});
	});
}

// menuEvent();

// console.log(window.innerHeight);
