const backToTopButton = document.querySelector(".up")
const container = document.querySelector("html")

backToTopButton.addEventListener("click", function () {

	console.log(container)
	container.scrollTo({
		top: 0,
		behavior: "smooth"
	})
})