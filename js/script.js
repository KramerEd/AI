const body = document.body;

const burger = document.querySelector(".header__burger");
const links = document.querySelector(".header__list");
const blur = document.querySelector(".blur");

burger.addEventListener("click", () => {
	body.classList.toggle("active");

	burger.classList.toggle("active");
	links.classList.toggle("active");
	blur.classList.toggle("active");
});
blur.addEventListener("click", () => {
	body.classList.toggle("active");

	burger.classList.toggle("active");
	links.classList.toggle("active");
	blur.classList.toggle("active");
});
