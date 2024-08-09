export default function decorate(block) {
  block.classList.add('sc2');

  const articles = block.querySelectorAll('div > div > div');

  articles.forEach((article) => {
    article.classList.add('sc2-article');

    const heading = article.querySelector('h3');
    heading.classList.add('sc2-heading');

    const paragraph = article.querySelector('p');
    paragraph.classList.add('sc2-paragraph');
  });
}
