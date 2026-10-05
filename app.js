const products = [
  {
    name: 'AMIRI X WES LANG SOLAR KINGS TEE (BLACK)',
    color: 'Black', category: 'T-SHIRT / DESIGNER', size: 'L', price: 1350,
    image: 'assets/amiri-solar-kings.webp', alt: 'AMIRI X Wes Lang Solar Kings Tee negra, imagen de la publicación de Street Market',
    post: 'https://www.instagram.com/p/Dd9vVYpoNdm/'
  },
  {
    name: 'AMIRI DRAGON TEE (BLACK)',
    color: 'Black', category: 'T-SHIRT / DESIGNER', size: 'M', price: 1350,
    image: 'assets/amiri-dragon-tee.webp', alt: 'AMIRI Dragon Tee negra, imagen de la publicación de Street Market',
    post: 'https://www.instagram.com/p/Dd9xn7xoDBH/'
  },
  {
    name: 'AMIRI SKEL LOW WHITE BLACK',
    color: 'White / Black', category: 'SNEAKERS / DESIGNER', size: '41 IT (8/8.5)', price: 2300,
    image: 'assets/amiri-skell-low.webp', alt: 'AMIRI Skel Low blancas y negras, imagen de la publicación de Street Market',
    post: 'https://www.instagram.com/p/DeAF8tGlZW8/'
  }
];

const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', open);
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { toggle.setAttribute('aria-expanded', 'false'); mobileNav.hidden = true; }));

const grid = document.querySelector('#catalog-grid');
grid.innerHTML = products.map((product, index) => `
  <article class="catalog-card">
    <a class="catalog-image" href="${product.post}" target="_blank" rel="noopener" aria-label="Ver ${product.name} en Instagram">
      <img src="${product.image}" alt="${product.alt}" ${index > 1 ? 'loading="lazy"' : 'fetchpriority="high"'}>
      <span class="catalog-index">SM / 0${index + 1}</span><span class="catalog-open" aria-hidden="true"><i class="arrow"></i></span>
    </a>
    <div class="catalog-info"><div><p class="catalog-category">${product.category}</p><h3>${product.name}</h3><p class="catalog-color">${product.color} <span>·</span> Talla ${product.size}</p></div><p class="catalog-price">S/ ${product.price.toLocaleString('es-PE')}</p></div>
    <a class="catalog-source" href="${product.post}" target="_blank" rel="noopener">VER POST ORIGINAL <i class="arrow" aria-hidden="true"></i></a>
  </article>`).join('');

const dialog = document.querySelector('#product-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogDescription = document.querySelector('#dialog-description');
const dialogLink = document.querySelector('#dialog-link');
dialog.querySelector('button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

const chapters = document.querySelector('.chapters');
const sticky = document.querySelector('.chapter-sticky');
const boxes = [...document.querySelectorAll('.outfit-box')];
function updateOutfit(){
  const rect = chapters.getBoundingClientRect();
  const travel = Math.max(1, chapters.offsetHeight - sticky.offsetHeight);
  const progress = Math.max(0, Math.min(1, -rect.top / travel));
  sticky.style.setProperty('--p', progress.toFixed(3));
  const chapter = Math.min(3, Math.floor(progress * 4));
  const labels = [['01 / Base','Empieza<br>por la pieza.','La forma define el resto.'],['02 / Sombra','Luego suma<br>la textura.','Contrastes que no hacen ruido.'],['03 / Detalle','El acento<br>queda cerca.','Accesorios para cerrar el look.'],['04 / Salida','El par<br>decide todo.','La selección se termina abajo.']];
  const [eyebrow,title,sub] = labels[chapter];
  const copy = document.querySelector('.chapter-copy');
  copy.querySelector('p').textContent = eyebrow;
  copy.querySelector('h2').innerHTML = title;
  copy.querySelector('span').textContent = sub;
  boxes.forEach((box,index) => box.classList.toggle('visible', index <= chapter));
}
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) { addEventListener('scroll', updateOutfit, {passive:true}); addEventListener('resize', updateOutfit); updateOutfit(); } else boxes.forEach(box => box.classList.add('visible'));

