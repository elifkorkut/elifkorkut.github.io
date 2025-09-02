import heterotopia from './projects/heterotopia.js';
import tunnels from './projects/tunnels.js';
import virtualmuseum from './projects/virtualmuseum.js';
import findthedifference from './projects/findthedifference.js';
import holoffice from './projects/holoffice.js';
import ludikid from './projects/ludikid.js';
import processing from './projects/processing.js';
import roboko from './projects/roboko.js';
import sketchrecognition from './projects/sketchrecognition.js';
import visualisationreview from './projects/visualisationreview.js';
import wretched from './projects/wretched.js';
import downhillbike from './projects/downhillbike.js';


/*export const projects = [virtualmuseum, tunnels, holoffice, roboko, heterotopia,downhillbike,
  wretched,findthedifference,sketchscape,ludikid,processing,sketchrecognition,visualisationreview

];*/

export const projects = [tunnels,heterotopia,downhillbike,findthedifference, wretched,roboko,visualisationreview,sketchrecognition,virtualmuseum,holoffice
];


// Debug: Print all project IDs and titles
projects.forEach((p, index) => {
  console.log(`Index ${index}: ID=${p.id}, Title=${p.title}`);
});

// Extra: Find duplicate IDs
const seen = new Set();
projects.forEach((p) => {
  if (seen.has(p.id)) {
    console.warn(`⚠️ Duplicate ID found: ${p.id} (${p.title})`);
  } else {
    seen.add(p.id);
  }
});