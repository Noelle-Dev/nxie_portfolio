// Initialize Photoswipe Lightbox (ES module)
import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.min.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery',
  children: 'a',
  pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.min.js')
});

lightbox.init();

// Optional: log initialization for debugging
console.log('Photoswipe lightbox initialized');
