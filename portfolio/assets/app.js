const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
const canvas = document.querySelector('#raster');
if (canvas) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#f2eee5'; ctx.fillRect(0, 0, 24, 16);
  ctx.fillStyle = '#b65538'; ctx.beginPath();
  ctx.moveTo(5, 8); ctx.lineTo(12, 2); ctx.lineTo(19, 8); ctx.fill();
  ctx.fillStyle = '#d8ba73'; ctx.fillRect(6, 8, 12, 7);
  ctx.fillStyle = '#193b31'; ctx.fillRect(11, 11, 3, 4);
}
