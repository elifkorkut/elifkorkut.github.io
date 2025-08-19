<script setup>
import { ref } from 'vue';

// --- Data for the resume ---

const experience = ref([
    {
        title: 'Game Developer',
        company: 'Nomad Monkey',
        companyUrl: 'https://nomadmonkey.xyz/', // Added company URL
        period: '2023 March - Current',
        achievements: [
            'Led end-to-end development of <strong>five published VR titles</strong>, handling design, programming, and deployment.',
            'Implemented multiplayer functionalities using <strong>Photon Fusion</strong> and <strong>Fishnet</strong> combined with <strong>Epic Game Online Services</strong>.',
            'Developed cloud-based features for save data, IAP, leaderboards, and matchmaking, compatible with Meta, Unity Cloud, and PlayFab.',
            'Designed and implemented XR-specific mechanics.',
            'Optimized games for standalone experiences ensuring smooth VR and MR game-play.',
            'Developed intricate AI systems.'
        ]
    }
]);

const education = ref([
    {
        degree: 'Master of Science (M.Sc.)',
        institution: 'Middle East Technical University',
        department: 'Graduate School of Informatics, Multimedia Informatics, Game Technologies',
        period: '2020 - 2023'
    },
    {
        degree: 'Erasmus Student',
        institution: 'Blekinge Institute of Technology',
        department: 'Faculty of Computer Sciences, The Department of Technology and Aesthetics',
        period: '2021 - 2022'
    },
    {
        degree: 'Bachelor of Architecture (B.Arch)',
        institution: 'Middle East Technical University',
        department: 'Faculty of Architecture, Department of Architecture',
        period: '2014 - 2020'
    }
]);

const skills = ref([
    { title: 'Programming Languages', items: ['C#'] },
    { title: 'Game Engines', items: ['Unity'] },
    { title: 'Libraries and Frameworks', items: ['FishNet', 'Photon', 'Netcode'] },
    { title: 'Cloud and Services', items: ['Playfab', 'Unity Cloud', 'Epic Online Services', 'Meta Horizon'] },
    { title: '3D Computer Graphics', items: ['Rhinoceros', 'Grasshopper', 'Revit'] },
    { title: '2D Computer Graphics', items: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe Premiere Pro'] },
]);

const publications = ref([
    { title: 'Developing a Framework for Heterotopias as Discursive Playgrounds : A Comparative Analysis of Non-Immersive and Immersive Technologies', year: '2024', journal: 'Virtual Reality 28, 16,  Springer (2024)', url: 'https://link.springer.com/article/10.1007/s10055-023-00905-w' },
    { title: 'Creating a Virtual Museum Framework for Immersive Reality Environments Through a Perspective From Heterotopia', year: '2023', journal: 'Master of Science, Middle East Technical University', url: 'https://open.metu.edu.tr/handle/11511/101949' },
    { title: 'Visualization in virtual reality : a systematic review', year: '2023', journal: 'Virtual Reality 27, 1447–1480', url: 'https://link.springer.com/article/10.1007/s10055-023-00753-8' },
    { title: 'Sketch Recognition for Interactive Game Experiences Using Neural Networks', year: '2021', journal: '2021 Entertainment Computing – ICEC 2021. Lecture Notes in Computer Science(), vol 13056.', url: 'https://link.springer.com/chapter/10.1007/978-3-030-89394-1_31' }
]);

const awards = ref([
    { title: 'METU Graduate Thesis Awards', type: 'Award', year: '2023', description: 'The thesis titled “Creating a Virtual Museum Framework for Immersive Reality Environments Through a Perspective From Heterotopia” earned METU Graduate Thesis Award.' },
    { title: 'METU Informatics Institute Open Research Day', type: 'Award', year: '2023', description: 'The research titled “Developing a Framework for Heterotopias as Discursive Playgrounds : A Comparative Analysis of Non-Immersive and Immersive Technologies” earned Best Poster Award.' },
    { title: 'International Conference on Entertainment Computing', type: 'Conference', year: '2021', description: 'The Paper “ Sketch Recognition for Interactive Game Experiences Using Neural Networks” was presented.' }
]);

const interests = ref([
    'Immersive Technologies', 'Procedural Generation', 'Human-Computer Interaction',
    'Computational Design', 'Generative Art'
]);
</script>

<template>
    <div class="resume-container">
        <main class="resume-body">
            <section id="experience">
                <h2 class="section-title">Work Experience</h2>
                <div class="list-container">
                    <!-- Each experience is its own card -->
                    <div v-for="(job, index) in experience" :key="index" class="card">
                        <div class="card-header">
                            <div class="header-main-content">
                                <h3>{{ job.title }}</h3>
                                <a :href="job.companyUrl" target="_blank" rel="noopener noreferrer" class="company-link">
                                    <p class="company">{{ job.company }}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="company-link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            </div>
                            <div class="date">{{ job.period }}</div>
                        </div>
                        <ul class="achievements">
                            <li v-for="(achievement, aIndex) in job.achievements" :key="aIndex" v-html="achievement"></li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section id="publications">
                <h2 class="section-title">Publications</h2>
                <div class="list-container">
                    <!-- Publication card is now a div, with a button inside -->
                    <div v-for="pub in publications" :key="pub.title" class="card">
                        <div class="card-header">
                            <div class="header-main-content">
                                <h3>{{ pub.title }}</h3>
                                <p class="journal">{{ pub.journal }}</p>
                            </div>
                            <div class="date">{{ pub.year }}</div>
                        </div>
                        <a :href="pub.url" target="_blank" rel="noopener noreferrer" class="read-button">
                            Read Publication
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="read-button-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </div>
                </div>
            </section>

            <section id="skills">
                <h2 class="section-title">Skills</h2>
                <div class="skills-grid">
                    <!-- Each skill category is its own card -->
                    <div v-for="category in skills" :key="category.title" class="card">
                        <h4>{{ category.title }}</h4>
                        <div class="tags-container">
                            <span v-for="skill in category.items" :key="skill" class="skill-tag">{{ skill }}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="education">
                <h2 class="section-title">Education</h2>
                <div class="list-container">
                     <!-- Each education entry is its own card -->
                    <div v-for="edu in education" :key="edu.degree" class="card">
                        <div class="card-header">
                            <div class="header-main-content">
                                <h3>{{ edu.degree }}</h3>
                                <p class="institution">{{ edu.institution }}</p>
                            </div>
                            <div class="date">{{ edu.period }}</div>
                        </div>
                        <p class="department">{{ edu.department }}</p>
                    </div>
                </div>
            </section>

            <section id="awards">
                <h2 class="section-title">Participation & Awards</h2>
                <div class="list-container">
                    <!-- Each award is its own card -->
                    <div v-for="award in awards" :key="award.title" class="card">
                        <div class="card-header">
                            <div class="header-main-content">
                                <h3>{{ award.title }}</h3>
                                <p class="award-type">{{ award.type }}</p>
                            </div>
                            <div class="date">{{ award.year }}</div>
                        </div>
                        <p class="description">{{ award.description }}</p>
                    </div>
                </div>
            </section>

            <section id="languages">
                <h2 class="section-title">Languages</h2>
                <div class="languages-grid">
                    <div class="card">
                        <div class="language-header">
                            <span>Turkish</span>
                            <span class="proficiency-badge">Native</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="language-header">
                            <span>English</span>
                            <span class="proficiency-badge">C1</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="interests">
                <h2 class="section-title">Fields Of Interest</h2>
                <div class="card">
                    <div class="tags-container">
                        <span v-for="interest in interests" :key="interest" class="tag">{{ interest }}</span>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}

.resume-container {
    background-color: transparent; /* Invisible container */
    max-width: 900px;
    margin: 0 auto;
    padding: 8rem 1.5rem 2rem 1.5rem;
}

.resume-body {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
}

.section-title {
    font-size: 1.6rem; /* Reduced font size */
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 2rem;
    color: var(--text-color);
    text-align: left;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid var(--line-color);
}

/* --- Card Styling --- */
.card {
    background-color: var(--primary-color);
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid var(--line-color);
    box-shadow: 0 4px 15px var(--shadow-color);
    transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
    position: relative;
}
.card:hover {
    transform: translateY(-4px);
    border-color: var(--accent-color);
}

.list-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* --- Card Header --- */
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
}

.header-main-content {
    flex-grow: 1;
}

.card-header h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 0.25rem;
}

.company-link {
    text-decoration: none;
    color: inherit;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
}

.company-link:hover .company {
    color: var(--text-popup);
    text-decoration: underline;
}

.company-link-icon {
    font-size: 0.9em;
    color: var(--text-secondary);
    transition: color 0.3s;
    flex-shrink: 0;
}

.company-link:hover .company-link-icon {
    color: var(--text-popup);
}

.card .institution, .card .journal, .card .award-type {
    color: var(--text-popup);
    font-weight: 500;
    font-size: 0.9rem;
}
.card .company  {
    color: var(--text-color);
    font-weight: 500;
    font-size: 0.9rem;
    margin: 0;
    transition: color 0.3s;
}
.card .department {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-top: 0.5rem;
}
.card-header .date {
    font-size: 0.85rem;
    color: var(--highlight-color);
    white-space: nowrap;
    background: var(--highlight-bg-color);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    border: 0px solid var(--highlight-border);
    flex-shrink: 0;
}
.description {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.6;
    margin-top: 1rem;
}

/* --- Achievements List --- */
.achievements { list-style: none; padding-left: 1rem; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.75rem; }
.achievements li { position: relative; color: var(--text-color); font-size: 0.9rem; line-height: 1.6; }
.achievements li::before { content: '›'; position: absolute; left: -1rem; color: var(--accent-color); font-weight: bold; }
.achievements li :deep(strong) { color: var(--text-popup); font-weight: 600; }

/* --- Tags --- */
.tags-container { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.tag, .skill-tag { background-color: var(--highlight-bg-color); color: var(--highlight-color); font-size: 0.8rem; font-weight: 500; padding: 0.5rem 1rem; border-radius: 1rem; border: 0px solid var(--line-color); }

/* --- Grids --- */
.languages-grid, .skills-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
@media (min-width: 768px) { .languages-grid, .skills-grid { grid-template-columns: repeat(2, 1fr); } }

/* --- Languages --- */
.language-header { display: flex; justify-content: space-between; align-items: center; }
.proficiency-badge { font-size: 0.8rem; color: var(--text-secondary_resume); }

/* --- Skills --- */
.skills-grid h4 {
    font-weight: 600;
    color: var(--text-color);
    text-align: left;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 0px solid var(--line-color);
}

/* --- Publication Specific Styles --- */
.read-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--hover-color-button);
    color: var(--bg-primary_project);
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}
.read-button:hover {
    background-color: var(--highlight-color);
    color: var(--primary-color);
    background-color: var(--primary-color);
    color: var(--text-secondary);
}




.read-button-icon {
    font-size: 1.1em;
}


/* --- MOBILE FRIENDLY ADJUSTMENTS --- */
@media (max-width: 640px) {
    .resume-container {
        padding: 6rem 1rem 1rem 1rem;
    }
    .resume-body {
        gap: 3rem;
    }
    .section-title {
        font-size: 1.2rem;
    }
    .card {
        padding: 1.25rem;
    }
    .card-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
    .card-header h3 {
        font-size: 0.95rem;
    }
    .description, .achievements li, .card .department, .card .institution {
        font-size: 0.8rem;
    }
    .tag, .skill-tag {
        font-size: 0.75rem;
        padding: 0.4rem 0.8rem;
    }
}
</style>
