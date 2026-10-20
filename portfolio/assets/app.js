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

// Build an accessible section outline for the longer learning pages.
const main = document.querySelector('main');
const headings = [...main.querySelectorAll('h2')];
if (headings.length > 2) {
  const outline = document.createElement('details');
  outline.className = 'page-outline';
  const summary = document.createElement('summary');
  summary.textContent = 'On this page';
  const list = document.createElement('ul');
  headings.forEach((heading, index) => {
    if (!heading.id) heading.id = `section-${index + 1}`;
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    item.append(link); list.append(item);
  });
  outline.append(summary, list);
  const introduction = main.querySelector('.lede');
  if (introduction) introduction.after(outline);
  else main.prepend(outline);
}

const paletteChoice = document.querySelector('#palette-choice');
if (paletteChoice) {
  const palettes = {
    complementary: { colours: ['#346DA4', '#D88C3F'], text: 'Blue and orange: a complementary example. Use a dominant hue and a smaller accent to control emphasis.' },
    analogous: { colours: ['#334BA0', '#367CA0', '#3A9986'], text: 'Blue-violet, blue and blue-green: neighbouring hues create continuity. Vary value to distinguish information.' },
    triadic: { colours: ['#B74542', '#DBB748', '#3C65A4'], text: 'Red, yellow and blue: a traditional triadic example. Unequal proportions can keep the palette from competing for attention.' },
    monochromatic: { colours: ['#193B31', '#3C6655', '#85A694'], text: 'Three green variations: related hues can create unity. A light–dark difference is still needed for readable text.' }
  };
  function showPalette() {
    const palette = palettes[paletteChoice.value];
    const preview = document.querySelector('#palette-preview');
    preview.replaceChildren();
    palette.colours.forEach(colour => {
      const chip = document.createElement('div');
      chip.className = 'palette-chip'; chip.style.backgroundColor = colour;
      const label = document.createElement('span'); label.textContent = colour;
      chip.append(label); preview.append(chip);
    });
    document.querySelector('#palette-description').textContent = palette.text;
  }
  paletteChoice.addEventListener('change', showPalette);
  showPalette();
}

const motionButton = document.querySelector('#motion-toggle');
if (motionButton) {
  motionButton.addEventListener('click', () => {
    const stage = document.querySelector('#motion-stage');
    const running = !stage.classList.contains('running');
    stage.classList.toggle('running', running);
    motionButton.setAttribute('aria-pressed', String(running));
    motionButton.textContent = running ? 'Pause demonstration' : 'Play demonstration';
  });
}
