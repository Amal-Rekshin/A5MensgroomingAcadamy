const fs = require('fs');

const graduationLabels = [
  "Annual Graduation Ceremony",
  "Celebrating Student Success",
  "A5 Academy Convocation",
  "Batch of 2024",
  "Proud Graduates",
  "Diploma Award Ceremony"
];

const eventsLabels = [
  "Award Winning Styles",
  "Industry Connect Meetup",
  "Hair & Beauty Expo 2024",
  "Grand Salon Opening",
  "Academy Milestone Celebration",
  "Annual Awards Night"
];

const guestLabels = [
  "Advanced Color Workshop",
  "Guest Artist Masterclass",
  "Creative Styling Session",
  "Celebrity Stylist Demo",
  "International Hair Expert"
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
let items = "  const categories = ['All', 'Graduation', 'Training', 'Events', 'Guest']\n\n  const items = [\n";

files.forEach((f, i) => {
  let category = 'Events';
  let label = "A5 Hair Academy Gallery";
  
  if (f.includes('graduate') || f.includes('groupgraduate')) {
    category = 'Graduation';
    label = graduationLabels[i % graduationLabels.length];
  } else if (f.includes('reward')) {
    category = 'Events';
    label = eventsLabels[i % eventsLabels.length];
  } else if (f.includes('guest')) {
    category = 'Guest';
    label = guestLabels[i % guestLabels.length];
  } else if (f.includes('training')) {
    category = 'Training';
    label = trainingLabels[i % trainingLabels.length];
  }

  const sizes = ['normal', 'tall', 'wide'];
  const size = sizes[i % sizes.length];

  items += `    { category: '${category}', image: '/gallery/${f}', label: '${label}', size: '${size}' }${i === files.length - 1 ? '' : ','}\n`;
});
items += "  ]";

fs.writeFileSync('new_items2.txt', items);
