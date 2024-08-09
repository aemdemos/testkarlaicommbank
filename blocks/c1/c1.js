export default function decorate(block) {
  // Add a container class to the block
  block.classList.add('c1-container');

  // Get all the inner divs
  const cards = block.querySelectorAll('.c1 > div > div');

  // Add a class to each card
  cards.forEach((card) => {
    card.classList.add('c1-card');
  });

  // Move the image to the top of each card
  cards.forEach((card) => {
    const img = card.querySelector('picture');
    card.insertBefore(img, card.firstChild);
  });

  // Add classes to specific elements within each card
  cards.forEach((card) => {
    card.querySelectorAll('h3').forEach((h3) => h3.classList.add('c1-card-title'));
    card.querySelectorAll('p').forEach((p) => p.classList.add('c1-card-p'));
    card.querySelectorAll('ul').forEach((ul) => ul.classList.add('c1-card-ul'));
    card.querySelectorAll('h2').forEach((h2) => h2.classList.add('c1-card-subtitle'));
    card.querySelectorAll('a').forEach((a) => a.classList.add('c1-card-link'));
  });

  // Add a class to the 'Apply now' buttons
  cards.forEach((card) => {
    const applyNow = Array.from(card.querySelectorAll('a')).filter((a) => a.innerText.toLowerCase().includes('apply now'));
    applyNow.forEach((a) => {
      a.classList.add('c1-apply-button');
    });
  });
}
