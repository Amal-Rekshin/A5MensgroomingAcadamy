const fs = require('fs');

const eventsLabels = [
  "Annual Graduation Ceremony",
  "Celebrating Student Success",
  "Industry Connect Meetup",
  "Hair & Beauty Expo 2024",
  "Grand Salon Opening",
  "A5 Academy Convocation",
  "Award Winning Styles"
];

const workshopsLabels = [
  "Advanced Color Workshop",
  "Guest Artist Masterclass",
  "Creative Styling Session",
  "Modern Barbering Techniques",
  "Celebrity Stylist Demo"
];

const trainingLabels = [
  "Precision Haircut Practice",
  "Live Model Training",
  "Classroom Theory Session",
  "Balayage Technique Practice",
  "Keratin Treatment Demo",
  "Fade & Blend Mastery",
  "Hands-on Practical",
  "Student Portfolio Shoot",
  "Advanced Skin Care Class",
  "Tool Handling & Safety"
];

const files = fs.readdirSync('public/gallery').filter(f => !f.startsWith('.'));
let items = "  const items = [\n";

files.forEach((f, i) => {
  let category = 'Transformations';
  let label = "A5 Hair Academy Gallery";
  
  if (f.includes('graduate') || f.includes('reward')) {
    category = 'Events';
    label = eventsLabels[i % eventsLabels.length];
  } else if (f.includes('guest')) {
    category = 'Workshops';
    label = workshopsLabels[i % workshopsLabels.length];
  } else if (f.includes('training')) {
    category = 'Training';
    label = trainingLabels[i % trainingLabels.length];
  }

  const sizes = ['normal', 'tall', 'wide'];
  const size = sizes[i % sizes.length];

  items += `    { category: '${category}', image: '/gallery/${f}', label: '${label}', size: '${size}' }${i === files.length - 1 ? '' : ','}\n`;
});
items += "  ]";

fs.writeFileSync('new_items.txt', items);
