/**
 * Parser for cards-product block
 * Converts product cards HTML to AEM block table format
 */
export default function parse(element, document) {
  const cells = [];

  // Row 1: Block name
  cells.push(['Cards-Product']);

  // Find all product cards
  const cards = element.querySelectorAll('.product-card, .product-grid > div');

  cards.forEach((card) => {
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

    // Column 2: Content (title + price)
    const contentCell = document.createElement('div');

    const title = card.querySelector('h4, h3, h2');
    if (title) {
      const strong = document.createElement('strong');
      strong.textContent = title.textContent.trim();
      contentCell.appendChild(strong);
    }

    const price = card.querySelector('.price, span');
    if (price) {
      const p = document.createElement('p');
      p.textContent = price.textContent.trim();
      contentCell.appendChild(p);
    }

    cells.push([imgCell, contentCell]);
  });

  return cells;
}
