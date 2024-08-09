export default function decorate(block) {
  // Add common class
  block.classList.add('sc');

  // Loop through each direct div child of the block
  Array.from(block.children[0].children).forEach((section) => {
    // Add section class
    section.classList.add('sc-section');

    // Add class to the h3 elements
    const h3 = section.querySelector('h3');
    if (h3) {
      h3.classList.add('sc-heading');
    }

    // Add class to the ul elements
    const ul = section.querySelector('ul');
    if (ul) {
      ul.classList.add('sc-list');
    }

    // Add class to the li elements
    Array.from(section.querySelectorAll('li')).forEach((li) => {
      li.classList.add('sc-list-item');
    });

    // Add class to the a elements
    Array.from(section.querySelectorAll('a')).forEach((a) => {
      a.classList.add('sc-link');
    });

    // Add class to the p elements
    const p = section.querySelector('p');
    if (p) {
      p.classList.add('sc-paragraph');
    }
  });
}
