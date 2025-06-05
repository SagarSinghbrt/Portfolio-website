// script.js this will show your footer multiple pages
document.addEventListener("DOMContentLoaded", function () {
	fetch("/html/header.html")
		.then((res) => res.text())
		.then((data) => {
			document.querySelector("header").innerHTML = data;

			// Signal that the header is now loaded
			document.dispatchEvent(new Event("headerLoaded"));
		});

	fetch("/html/footer.html")
		.then((res) => res.text())
		.then((data) => {
			document.querySelector("footer").innerHTML = data;
		});

	fetch("/html/qnsAns.html")
		.then((res) => res.text())
		.then((data) => {
			document.querySelector(".qnsAns-section").innerHTML = data;

			document.dispatchEvent(new Event("qnsAnsLoaded"));
		});
});
