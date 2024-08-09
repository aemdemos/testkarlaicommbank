export default function decorate(block) {
  const ul = block.querySelector('ul');
  const p = block.querySelector('p');

  if (ul) {
    ul.classList.add('tabs-list');
    const lis = ul.querySelectorAll('li');
    lis.forEach((li) => {
      li.classList.add('tabs-item');
      const a = li.querySelector('a');
      if (a) {
        a.classList.add('tabs-link');
      }
    });
  }

  if (p) {
    const a = p.querySelector('a');
    if (a) {
      a.classList.add('tabs-button');
    }
  }
}
