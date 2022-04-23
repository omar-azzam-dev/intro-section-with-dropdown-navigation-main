let drop_down_titles = document.querySelectorAll('.drop-down-title');
let drop_down_menus = document.querySelectorAll('.drop-down-menu');

drop_down_titles.forEach(function (element, key) {
	element.addEventListener('click', function () {
		element.classList.toggle('drop-down-title-click');
		drop_down_menus[key].classList.toggle('drop-down-menu-show');
	});
});

let menu_toggle = document.querySelector('.menu-toggle');
let close_btn = document.querySelector('.close-btn');
let nav_links = document.querySelector('.nav-links');

menu_toggle.addEventListener('click', function () {
	nav_links.classList.add('nav-links-and-close-btn-show');
	close_btn.classList.add('nav-links-and-close-btn-show');
});
close_btn.addEventListener('click', function () {
	nav_links.classList.remove('nav-links-and-close-btn-show');
	close_btn.classList.remove('nav-links-and-close-btn-show');
});
