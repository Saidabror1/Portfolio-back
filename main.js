let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};



let mask = document.querySelector('.mask')

window.addEventListener('load', () => {
	mask.classList.add('hide')
	setTimeout(()=> { 
		mask.remove()
	}, 1000)
})


const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if(entry.isIntersecting){
			entry.target.classList.add('show')
		}
	})
})
const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))