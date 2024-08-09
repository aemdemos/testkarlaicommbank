export default function decorate(block) {
  // Add a class to the block
  block.classList.add('c2');

  // Get all inner divs and loop through them
  const cards = block.querySelectorAll('.c2 > div > div');

  cards.forEach((card) => {
    // Add a class to each card
    card.classList.add('card');

    // Wrap the image in a div with a class
    const picture = card.querySelector('picture');
    if (picture) {
      const pictureWrapper = document.createElement('div');
      pictureWrapper.classList.add('card-image');
      picture.parentNode.insertBefore(pictureWrapper, picture);
      pictureWrapper.appendChild(picture);
    }

    // Add a class to each heading
    const headings = card.querySelectorAll('h3, h2');
    headings.forEach((heading) => {
      heading.classList.add('card-heading');
    });

    // Add a class to each paragraph
    const paragraphs = card.querySelectorAll('p');
    paragraphs.forEach((paragraph) => {
      paragraph.classList.add('card-paragraph');
    });

    // Add a class to each list
    const lists = card.querySelectorAll('ul');
    lists.forEach((list) => {
      list.classList.add('card-list');
    });

    // Add a class to each link
    const links = card.querySelectorAll('a');
    links.forEach((link) => {
      link.classList.add('card-link');
    });
  });
}
