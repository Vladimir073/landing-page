$(document).ready(function () {
    
    $('.loaderArea').css('display', 'none');
    
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
    $('a[href^="#"]').click(function(){
       let valHref = $(this).attr('href');
        $('html, body').animate({scrollTop: $(valHref).offset().top + "px"});
    });
});

//const modal = document.querySelector('.modal'),
//	  btnClose = document.getElementById('modal__close');
//
//const showModal = () => {
//	modal.classList.add('active');
//	document.body.style.overflow = "hidden";
//}
//
//btnClose.addEventListener('click', () => {
//	modal.classList.remove('active');
//	document.body.style.overflow = "auto";
//})
//
//setTimeout(showModal, 2000);

const linkAboutMe = document.getElementById('link__about-me'),
	  linkSkills = document.getElementById('link__skills'),
	  linkPortfolio = document.getElementById('link__portfolio'),
	  linkFooter = document.getElementById('link__footer');

const sectionHome = document.getElementById('home'),
	  sectionAboutMe = document.getElementById('about-me'),
	  sectionSkills = document.getElementById('skills'),
	  sectionPortfolio = document.getElementById('portfolio'),
	  footer = document.getElementById('footer');

const headerBurger = document.querySelector('.header__burger'),
	  headerNav = document.querySelector('.header__nav');

function scrollAbout () {
	sectionAboutMe.scrollIntoView();
	removeActive();
}

function scrollSkills () {
	sectionSkills.scrollIntoView();
	removeActive();
}

function scrollPortfolio () {
	sectionPortfolio.scrollIntoView();
	removeActive();
}

function scrollFooter () {
	footer.scrollIntoView();
	removeActive();
}

const removeActive = () => {
	headerBurger.classList.remove('active');
	headerNav.classList.remove('active');
	document.body.style.overflow = 'auto';
}


linkAboutMe.addEventListener('click', scrollAbout);
linkSkills.addEventListener('click', scrollSkills);
linkPortfolio.addEventListener('click', scrollPortfolio);
linkFooter.addEventListener('click', scrollFooter);


