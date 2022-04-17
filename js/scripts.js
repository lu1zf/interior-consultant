const btn = document.getElementById('hamburguer');
const navbar = document.getElementById('navbar');
const { menu } = btn.children;
let isMenuOpen = false;

btn.addEventListener('click', event => {
  handleButtonClick(event);
});

function handleButtonClick(event) {
  toggleMenu()
}

function toggleMenu() {
  if (isMenuOpen) {
    menu.innerText = 'menu';
    navbar.style.top = '-100vh';
  } else {
    menu.innerText = 'close';
    navbar.style.top = '0vh';
  }

  isMenuOpen = !isMenuOpen;
}