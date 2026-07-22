const fs = require('fs');

const files = fs.readdirSync('public/gallery').filter(f => !f.startsWith('.'));
const items = files.map((f, i) => {
  let category = 'Transformations';
  if (f.includes('graduate') || f.includes('reward')) category = 'Events';
  else if (f.includes('guest')) category = 'Workshops';
  else if (f.includes('training')) category = 'Training';

  // random sizes to keep the masonry look varied
  const sizes = ['normal', 'tall', 'wide'];
  const size = sizes[i % sizes.length];

  return `    { category: '${category}', image: '/gallery/${f}', label: 'A5 Hair Academy Gallery', size: '${size}' },`;
});

fs.writeFileSync('temp_items.txt', items.join('\n'));
