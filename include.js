const basePath = "/html/";

fetch(basePath + "header.html")
	.then((res) => res.text())
	.then((data) => {
		const header = document.querySelector("header");
		if (header) header.innerHTML = data;
	});

fetch(basePath + "footer.html")
	.then((res) => res.text())
	.then((data) => {
		const footer = document.querySelector("footer");
		if (footer) footer.innerHTML = data;
	});

fetch(basePath + "qnsAns.html")
	.then((res) => res.text())
	.then((data) => {
		const qnsAnsSection = document.querySelector(".qnsAns-section");
		if (qnsAnsSection) qnsAnsSection.innerHTML = data;
	});
