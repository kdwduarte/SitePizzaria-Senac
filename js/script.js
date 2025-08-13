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