/**
 * Parser for cards-features block
 * Converts feature cards HTML to AEM block table format (no images variant)
 */
export default function parse(element, document) {
  const cells = [];

  // Row 1: Block name
  cells.push(['Cards-Features']);

  // Find all feature cards
  const cards = element.querySelectorAll('.feature-card, .features-grid > div');

  cards.forEach(card => {
    // Single column: Content (title + description)
    const contentCell = document.createElement('div');

    const title = card.querySelector('h5, h4, h3, strong');
    if (title) {
      const strong = document.createElement('strong');
      strong.textContent = title.textContent.trim();
      contentCell.appendChild(strong);
    }

    const description = card.querySelector('span, p');
    if (description) {
      const p = document.createElement('p');
      p.textContent = description.textContent.trim();
      contentCell.appendChild(p);
    }

    cells.push([contentCell]);
  });

  return cells;
}
