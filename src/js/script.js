const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const skillsPercent = document.querySelectorAll('.skills__percentages-item-percent'),
      skillsRange = document.querySelectorAll('.skills__percentages-item-range');

skillsPercent.forEach( (item, i) => {
    skillsRange[i].style.width = item.innerHTML;
});
