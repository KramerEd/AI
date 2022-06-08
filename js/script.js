const body = document.body;

const burger = document.querySelector(".header__burger");
const links = document.querySelector(".header__list");
const blur = document.querySelector(".blur");

const toggleMenu = () => {
	body.classList.toggle("active");

	burger.classList.toggle("active");
	links.classList.toggle("active");
	blur.classList.toggle("active");
};

burger.addEventListener("click", () => {
	toggleMenu();
});
blur.addEventListener("click", () => {
	if (blur.classList.contains("active")) toggleMenu();
});
