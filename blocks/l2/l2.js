export default function decorate(block) {
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');

  const headingDiv = document.createElement('div');
  headingDiv.classList.add('heading-container');

  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('button-container');

  const heading = block.querySelector('h2');
  const link = block.querySelector('a');

  headingDiv.appendChild(heading);
  buttonDiv.appendChild(link);

  containerDiv.appendChild(headingDiv);
  containerDiv.appendChild(buttonDiv);

  block.innerHTML = '';
  block.appendChild(containerDiv);
}
