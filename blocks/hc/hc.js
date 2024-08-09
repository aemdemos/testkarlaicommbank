export default function decorate(block) {
  // Add a class to the block
  block.classList.add('hc');

  // Add classes to the inner elements
  const children = Array.from(block.children);
  children.forEach((child) => {
    child.classList.add('hc-item');
    const imgDiv = child.querySelector('div:first-child');
    if (imgDiv) {
      imgDiv.classList.add('hc-image');
    }
    const linkDiv = child.querySelector('div:last-child');
    if (linkDiv) {
      linkDiv.classList.add('hc-link');
    }
  });
}
