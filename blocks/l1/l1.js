export default function decorate(block) {
  // Adding classes to elements
  const container = block.querySelector('div > div');
  const header = container.querySelector('h2');
  const paragraph = container.querySelector('p');
  const link = paragraph.querySelector('a');

  block.classList.add('l1');
  container.classList.add('l1-container');
  header.classList.add('l1-header');
  paragraph.classList.add('l1-paragraph');
  link.classList.add('l1-link');
}
