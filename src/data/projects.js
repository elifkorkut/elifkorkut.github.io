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

// Add this to the end of your projects.js file

function diagnoseProjects(projectArray) {
  const ids = new Set();
  const problems = [];

  projectArray.forEach((project, index) => {
    // Check 1: Is the project object itself valid?
    if (!project) {
      problems.push(`Problem found: The project at index ${index} is null or undefined. This can happen if an import failed.`);
      return; // Skip to the next project
    }
    
    // Check 2: Does the project have an ID?
    if (project.id === undefined || project.id === null) {
      problems.push(`Problem found: Project "${project.title || 'Untitled'}" at index ${index} has a missing (null or undefined) id.`);
    } 
    // Check 3: Is the ID a duplicate?
    else if (ids.has(project.id)) {
      problems.push(`Problem found: Duplicate id #${project.id} on project "${project.title}".`);
    } 
    else {
      ids.add(project.id);
    }
  });

  if (problems.length > 0) {
    console.error("⚠️ PROJECT DATA DIAGNOSIS FAILED:");
    problems.forEach(problem => console.error(`- ${problem}`));
  } else {
    console.log("✅ Project data diagnosis passed. All projects and IDs are valid and unique.");
  }
}

// Run the diagnosis on your exported projects array
diagnoseProjects(projects);