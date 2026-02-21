const mobileBtn = document.querySelector(".btn-mobile"); // aspas simples ou duplas não importam
const navlinks = document.getElementById("nav-links");
const icon = document.querySelector(".btn-mobile i"); 


mobileBtn.addEventListener('click', () => {
    navlinks.classList.toggle('show');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');

})

window.addEventListener('scroll', () => { //Cria o Efeito do Header sair do transparente para a Cor
    let header = document.querySelector('#site-header')
    header.classList.toggle('scrolled',window.scrollY > 0);
})
