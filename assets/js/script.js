document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");
    const button = document.querySelectorAll(".btn");
    for (let i = 0; i < button.length; i++) {
		button[i].addEventListener("click", function () {
			alert("Thank you for your message, we will get back to you soon!");
		});
	}
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.getAttribute("id");
					navLinks.forEach((link) => {
						if (link.classList.contains("active")) {
							link.classList.remove("active");
						}
					});
					document
						.querySelector(`.nav-link[href="#${id}"]`)
						.classList.add("active");
				}
			});
		},
		{ threshold: 0.5 }
	);
	sections.forEach((section) => observer.observe(section));
});
