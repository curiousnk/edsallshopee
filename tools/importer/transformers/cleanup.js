/**
 * Cleanup Transformer
 * Removes unwanted elements from the DOM before parsing
 */
export default function cleanup(document) {
  // Remove scripts
  document.querySelectorAll('script').forEach(el => el.remove());

  // Remove styles
  document.querySelectorAll('style').forEach(el => el.remove());

  // Remove hidden elements
  document.querySelectorAll('[style*="display: none"]').forEach(el => el.remove());
  document.querySelectorAll('[style*="visibility: hidden"]').forEach(el => el.remove());

  // Remove navigation (handled separately)
  document.querySelectorAll('.navbar, nav, header').forEach(el => el.remove());

  // Remove footer (handled separately)
  document.querySelectorAll('.footer, footer').forEach(el => el.remove());

  // Remove modals
  document.querySelectorAll('.modal, [class*="modal"]').forEach(el => el.remove());

  // Remove audio elements
  document.querySelectorAll('audio').forEach(el => el.remove());
}
