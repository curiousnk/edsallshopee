/**
 * Parser for hero-gradient block
 * Converts hero section HTML to AEM block table format
 */
export default function parse(element, document) {
  const cells = [];

  // Row 1: Block name
  cells.push(['Hero-Gradient']);

  // Row 2: Background image
  const img = element.querySelector('img');
  if (img) {
    const imgCell = document.createElement('div');
    const picture = document.createElement('picture');
    const imgEl = document.createElement('img');
    imgEl.src = img.src;
    imgEl.alt = img.alt || 'Hero background';
    picture.appendChild(imgEl);
    imgCell.appendChild(picture);
    cells.push([imgCell]);
  }

  // Row 3: Content (heading, subheading, description, CTAs)
  const contentCell = document.createElement('div');

  const h1 = element.querySelector('h1');
  if (h1) {
    const heading = document.createElement('h1');
    heading.textContent = h1.textContent.trim();
    contentCell.appendChild(heading);
  }

  const h2 = element.querySelector('h2, .hero-content h1:nth-of-type(2)');
  if (h2 && h2 !== h1) {
    const subheading = document.createElement('h2');
    subheading.textContent = h2.textContent.trim();
    contentCell.appendChild(subheading);
  }

  const p = element.querySelector('p');
  if (p) {
    const para = document.createElement('p');
    para.textContent = p.textContent.trim();
    contentCell.appendChild(para);
  }

  const links = element.querySelectorAll('a.btn, .hero-buttons a');
  if (links.length > 0) {
    const linkPara = document.createElement('p');
    links.forEach((link, i) => {
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.textContent.trim() || 'Learn More';
      linkPara.appendChild(a);
      if (i < links.length - 1) {
        linkPara.appendChild(document.createTextNode(' '));
      }
    });
    contentCell.appendChild(linkPara);
  }

  cells.push([contentCell]);

  return cells;
}
