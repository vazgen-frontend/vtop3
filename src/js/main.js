const headerBody = document.querySelector(".header-body");
const menuBtn = document.querySelector(".menu-btn");
const translaterBtn = document.querySelector(".translater__active");
const translater = document.getElementById("translater");
const ss = document.getElementById("smooth-scrolling");

menuBtn.addEventListener("click", () => {
	headerBody.classList.toggle("active");
	document.body.classList.toggle("hidden");
});

translater.addEventListener("click", (e) => {
	translaterBtn.querySelector(".lang").innerText = e.target.innerText;
	translater.classList.remove("active");
});

translaterBtn.addEventListener("click", () => {
	translater.classList.toggle("active");
});

