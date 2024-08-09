export default function decorate(block) {
  // Add the necessary classes to the block and its children
  block.classList.add('fc');

  const sections = block.querySelectorAll('div > div > div');

  sections.forEach((section) => {
    section.classList.add('fc-section');
    const heading = section.querySelector('h4');
    if (heading) {
      heading.classList.add('fc-heading');
    }
    const list = section.querySelector('ul');
    if (list) {
      list.classList.add('fc-list');
      const listItems = list.querySelectorAll('li');
      listItems.forEach((item) => {
        item.classList.add('fc-list-item');
        const link = item.querySelector('a');
        if (link) {
          link.classList.add('fc-link');
        }
      });
    }
  });
}
