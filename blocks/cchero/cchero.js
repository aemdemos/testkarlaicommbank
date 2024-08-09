export default function decorate(block) {
  // Adding necessary classes to the elements
  block.classList.add('cchero');

  const innerDiv = block.querySelector('div');
  innerDiv.classList.add('cchero-inner');

  const pTags = block.querySelectorAll('p');
  pTags.forEach((p) => {
    p.classList.add('cchero-paragraph');
  });

  const h1Tag = block.querySelector('h1');
  h1Tag.classList.add('cchero-heading');

  const picture = block.querySelector('picture');
  picture.classList.add('cchero-picture');

  const img = picture.querySelector('img');
  img.classList.add('cchero-image');

  const links = block.querySelectorAll('a');
  links.forEach((link, index) => {
    if (index === 0) {
      link.classList.add('cchero-link', 'primary');
    } else {
      link.classList.add('cchero-link', 'secondary');
    }
  });

  const yellowBar = document.createElement('div');
  yellowBar.classList.add('cchero-yellow-bar');
  block.insertBefore(yellowBar, innerDiv);
}
