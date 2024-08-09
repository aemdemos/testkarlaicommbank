export default function decorate(block) {
  // Add classes to the elements for styling
  block.classList.add('k');

  const heading = block.querySelector('h2');
  heading.classList.add('k-heading');

  const listItems = block.querySelectorAll('li');
  listItems.forEach((li) => {
    li.classList.add('k-list-item');
  });

  const links = block.querySelectorAll('a');
  links.forEach((link) => {
    link.classList.add('k-link');
  });
}
