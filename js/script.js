AOS.init();

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


const cards = document.querySelectorAll('.carta');

cards.forEach(card => {
  const img = card.querySelector('#cardapio img');
  const srcDefault = img.getAttribute('src');
  const srcHover = srcDefault.replace('.png', '_color.png');

  card.addEventListener('mouseenter', () => {
    img.setAttribute('src', srcHover);
  });

  card.addEventListener('mouseleave', () => {
    img.setAttribute('src', srcDefault);
  });
});

const slider = document.querySelectorAll('.slider');

slider.forEach(card => {
  const img = card.querySelector('.slider img');
  const srcDefault = img.getAttribute('src');
  const srcHover = srcDefault.replace('_pb.svg', '.svg');

  card.addEventListener('mouseenter', () => {
    img.setAttribute('src', srcHover);
  });

  card.addEventListener('mouseleave', () => {
    img.setAttribute('src', srcDefault);
  });
});