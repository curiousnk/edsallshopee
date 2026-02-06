/**
 * Parser for cards-category block
 * Converts category cards HTML to AEM block table format
 */
export default function parse(element, document) {
  const cells = [];

  // Row 1: Block name
  cells.push(['Cards-Category']);

  // Find all category cards
  const cards = element.querySelectorAll('.category-card, .category-grid > div');

  cards.forEach(card => {
    // Column 1: Image
    const imgCell = document.createElement('div');
    const img = card.querySelector('img');
    if (img) {
      const picture = document.createElement('picture');
      const imgEl = document.createElement('img');
      imgEl.src = img.src;
      imgEl.alt = img.alt || '';
      picture.appendChild(imgEl);
      imgCell.appendChild(picture);
    }

    // Column 2: Content (title + description)
    const contentCell = document.createElement('div');

    const title = card.querySelector('h2, h3, h4');
    if (title) {
      const strong = document.createElement('strong');
      strong.textContent = title.textContent.trim();
      contentCell.appendChild(strong);
    }

    const description = card.querySelector('p');
    if (description) {
      const p = document.createElement('p');
      p.textContent = description.textContent.trim();
      contentCell.appendChild(p);
    }

    cells.push([imgCell, contentCell]);
  });

  return cells;
}
