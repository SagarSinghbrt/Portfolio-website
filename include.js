document.addEventListener("DOMContentLoaded", function () {
	// Get the repository name from the URL path
	const repoName = window.location.pathname.split("/")[1];
	const basePath = `/${repoName}/html/`;

	fetch(basePath + "header.html")
		.then((res) => res.text())
		.then((data) => {
			const header = document.querySelector("header");
			if (header) {
				header.innerHTML = data;
				document.dispatchEvent(new Event("headerLoaded"));
			}
		});

	fetch(basePath + "footer.html")
		.then((res) => res.text())
		.then((data) => {
			const footer = document.querySelector("footer");
			if (footer) {
				footer.innerHTML = data;
			}
		});

	fetch(basePath + "qnsAns.html")
		.then((res) => res.text())
		.then((data) => {
			const qnsAnsSection = document.querySelector(".qnsAns-section");
			if (qnsAnsSection) {
				qnsAnsSection.innerHTML = data;
				document.dispatchEvent(new Event("qnsAnsLoaded"));
			}
		});
});
