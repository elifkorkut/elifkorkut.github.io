<script setup>
import { ref } from 'vue';

// --- Data for the resume ---

const experience = ref([
    {
        title: 'Game Developer',
        company: 'Nomad Monkey',
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
    { title: 'Developing a Framework for Heterotopias as Discursive Playgrounds : A Comparative Analysis of Non-Immersive and Immersive Technologies', year: '2024', journal: 'Virtual Reality 28, 16, Springer', url: '#' },
    { title: 'Creating a Virtual Museum Framework for Immersive Reality Environments Through a Perspective From Heterotopia', year: '2023', journal: 'Master of Science, Middle East Technical University', url: '#' },
    { title: 'Visualization in virtual reality : a systematic review', year: '2023', journal: 'Virtual Reality 27, 1447–1480', url: '#' },
    { title: 'Sketch Recognition for Interactive Game Experiences Using Neural Networks', year: '2021', journal: '2021 Entertainment Computing – ICEC 2021. Lecture Notes in Computer Science(), vol 13056.', url: '#' }
]);

const awards = ref([
    { title: 'METU Graduate Thesis Awards', type: 'Award', year: '2023', description: 'The thesis titled “Creating a Virtual Museum Framework for Immersive Reality Environments Through a Perspective From Heterotopia” earned METU Graduate Thesis Awards.' },
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
                            <div>
                                <h3>{{ job.title }}</h3>
                                <p class="company">{{ job.company }}</p>
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
                    <!-- These are clickable 'a' tags, rendered as cards -->
                    <a v-for="pub in publications" :key="pub.title" :href="pub.url" target="_blank" class="card card-clickable">
                        <div class="card-header">
                            <div>
                                <h3>{{ pub.title }}</h3>
                                <p class="journal">{{ pub.journal }}</p>
                            </div>
                            <div class="date">{{ pub.year }}</div>
                        </div>
                        <ion-icon name="open-outline" class="external-link-icon"></ion-icon>
                    </a>
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
                            <div>
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
                            <div>
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

:root {
  --bg-primary_resume: #0A0F1E; /* Deep Navy/Charcoal Blue */
  --bg-card_resume: #1A2033; /* Lighter Slate Blue/Gray */
  --text-primary_resume: #F0F4F8; /* Very Light Gray/Off-White */
  --text-secondary_resume: #A0AEC0; /* Softer Slate Gray */
  --accent-color_resume: #99D9F2; /* Pale, Desaturated Cyan */
  --border-color_resume: #3A415A;
  --shadow-color_resume: rgba(0, 0, 0, 0.4);
  --tag-bg-color_resume: rgba(153, 217, 242, 0.1);
  --tag-border-color_resume: rgba(153, 217, 242, 0.3);
}

* {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}

.resume-container {
    background-color: transparent; /* Invisible container */
    color: var(--text-primary_resume);
    max-width: 900px;
    margin: 0 auto;
    /* Increased top padding for navbar */
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
    color: var(--text-primary_resume);
    text-align: left;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid var(--border-color_resume);
}

/* --- Card Styling --- */
.card {
    background-color: var(--bg-card_resume);
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid var(--border-color_resume);
    box-shadow: 0 4px 15px var(--shadow-color_resume);
    transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
    position: relative;
}
.card:hover {
    transform: translateY(-4px);
    border-color: var(--accent-color_resume);
}
.card-clickable {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}
.card-clickable:hover {
    box-shadow: 0 8px 25px var(--shadow-color_resume);
}
.external-link-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    color: var(--text-secondary_resume);
    transition: color 0.3s;
}
.card-clickable:hover .external-link-icon {
    color: var(--accent-color_resume);
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
.card-header h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary_resume);
}
.card-header .company, .card-header .institution, .card-header .journal, .card-header .award-type {
    color: var(--accent-color_resume);
    font-weight: 500;
    font-size: 0.9rem;
}
.card .department {
    font-size: 0.9rem;
    color: var(--text-secondary_resume);
    margin-top: 0.5rem; /* Space between header and department */
}
.card-header .date {
    font-size: 0.85rem;
    color: var(--accent-color_resume); /* Colored Date Text */
    white-space: nowrap;
    background: var(--bg-primary_resume);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    border: 1px solid var(--border-color_resume);
    flex-shrink: 0;
}
.description {
    color: var(--text-secondary_resume);
    font-size: 0.9rem;
    line-height: 1.6;
    margin-top: 1rem;
}

/* --- Achievements List --- */
.achievements { list-style: none; padding-left: 1rem; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.75rem; }
.achievements li { position: relative; color: var(--text-secondary_resume); font-size: 0.9rem; line-height: 1.6; }
.achievements li::before { content: '›'; position: absolute; left: -1rem; color: var(--accent-color_resume); font-weight: bold; }
.achievements li :deep(strong) { color: var(--accent-color_resume); font-weight: 500; }

/* --- Tags --- */
.tags-container { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.tag, .skill-tag { background-color: var(--tag-bg-color_resume); color: var(--accent-color_resume); font-size: 0.8rem; font-weight: 500; padding: 0.5rem 1rem; border-radius: 1rem; border: 1px solid var(--tag-border-color_resume); }

/* --- Grids --- */
.languages-grid, .skills-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
@media (min-width: 768px) { .languages-grid, .skills-grid { grid-template-columns: repeat(2, 1fr); } }

/* --- Languages --- */
.language-header { display: flex; justify-content: space-between; align-items: center; }
.proficiency-badge { font-size: 0.8rem; color: var(--text-secondary_resume); }

/* --- Skills --- */
.skills-grid h4 {
    font-weight: 600;
    color: var(--text-primary_resume);
    text-align: left;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color_resume);
}

/* --- MOBILE FRIENDLY ADJUSTMENTS --- */
@media (max-width: 640px) {
    .resume-container {
        /* Increased top padding and reduced horizontal padding for more content space */
        padding: 6rem 1rem 1rem 1rem;
    }
    .resume-body {
        /* Reduced gap between sections on mobile for a tighter layout */
        gap: 3rem;
    }
    .section-title {
        /* Smaller font size for main titles on mobile */
        font-size: 1.2rem;
    }
    .card {
        /* Slightly less padding inside cards on mobile */
        padding: 1.25rem;
    }
    .card-header h3 {
        /* Smaller font size for card titles on mobile */
        font-size: 0.95rem;
    }
    .description, .achievements li, .card .department {
        /* Slightly smaller body text for better fit */
        font-size: 0.8rem;
    }
    .tag, .skill-tag {
        font-size: 0.75rem;
        padding: 0.4rem 0.8rem;
    }
}
</style>
