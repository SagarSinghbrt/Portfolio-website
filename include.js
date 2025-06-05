document.addEventListener("DOMContentLoaded", function () {
	const isLocal =
		window.location.hostname === "localhost" ||
		window.location.hostname === "127.0.0.1";
	const currentPath = window.location.pathname;
	let basePath = "";

	// For GitHub Pages (when hosted under a repo name like /my-portfolio/)
	// Get the directory where your HTML files live
	if (!isLocal) {
		// Example: /my-portfolio/html/about.html → /my-portfolio/html/
		basePath = currentPath.substring(0, currentPath.lastIndexOf("/") + 1);
	} else {
		// Running locally
		basePath = currentPath.includes("/html/") ? "../html/" : "html/";
	}

	// Load header
	fetch(basePath + "header.html")
		.then((res) => res.text())
		.then((data) => {
			const header = document.querySelector("header");
			if (header) {
				header.innerHTML = data;
				document.dispatchEvent(new Event("headerLoaded"));
			}
		})
		.catch((err) => console.error("Header load error:", err));

	// Load footer
	fetch(basePath + "footer.html")
		.then((res) => res.text())
		.then((data) => {
			const footer = document.querySelector("footer");
			if (footer) {
				footer.innerHTML = data;
			}
		})
		.catch((err) => console.error("Footer load error:", err));

	// Load qnsAns.html if present
	fetch(basePath + "qnsAns.html")
		.then((res) => res.text())
		.then((data) => {
			const qnsAnsSection = document.querySelector(".qnsAns-section");
			if (qnsAnsSection) {
				qnsAnsSection.innerHTML = data;
				document.dispatchEvent(new Event("qnsAnsLoaded"));
			}
		})
		.catch((err) => console.warn("qnsAns.html load skipped:", err));
});
