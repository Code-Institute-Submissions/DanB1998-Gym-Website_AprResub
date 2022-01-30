const toggle = document.getElementsByClassName('navbutton')[0];
const links = document.getElementsByClassName('links')[0];

toggle.addEventListener('click', ()=> {
    links.classList.toggle('active')
})