<template>
    <div class="article-section">
      <header>
        <h2 class="article-title">Resume</h2>
      </header>
  
      <div class="container-box-resume">
        <!-- Experience Section -->
        <section class="timeline">
          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="briefcase-outline"></ion-icon>
            </div>
            <h3 class="h3">Experience</h3>
          </div>
          <ol class="timeline-list">
            <li class="timeline-item">
              <h4 class="timeline-item-title">Game Developer</h4>
              <p class="timeline-text">Game Developer at Nomad Monkey</p>
              <span>2023 — 2025</span>
            </li>
          </ol>
        </section>
  
        <!-- Education Section -->
        <section class="timeline">
          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 class="h3">Education</h3>
          </div>
          <ol class="timeline-list">
            <li class="timeline-item">
              <h4 class="timeline-item-title">
                Master of Science (M.Sc.), Multimedia Informatics - Game Technologies
              </h4>
              <p class="timeline-text">
                Middle East Technical University / Graduate School of Informatics
              </p>
              <p class="timeline-text">
                Thesis Title: Creating a Virtual Museum Framework for Immersive Reality Environments Through a Perspective From Heterotopia
              </p>
              <span>2020 — 2023</span>
            </li>
            <li class="timeline-item">
              <h4 class="timeline-item-title">Master of Science (M.Sc.), Erasmus Student</h4>
              <p class="timeline-text">
                Blekinge Institute of Technology / Faculty of Computer Sciences / The Department of Technology and Aesthetics
              </p>
              <span>2021 — 2022</span>
            </li>
            <li class="timeline-item">
              <h4 class="timeline-item-title">Bachelor of Architecture (B.Arch), Architecture</h4>
              <p class="timeline-text">Middle East Technical University / Department of Architecture</p>
              <span>2014 — 2020</span>
            </li>
          </ol>
        </section>
  
        <!-- Skills Section -->
        <section class="skill">
          <h3 class="h3 skills-title">Skills</h3>
          <ul class="skills-list content-card">
            <li class="skills-item">
              <div class="title-wrapper">
                <h5 class="h5">C/C++</h5>
                <data value="66.6">Intermediate</data>
              </div>
              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 66.6%;"></div>
              </div>
            </li>
            <li class="skills-item">
              <div class="title-wrapper">
                <h5 class="h5">Java</h5>
                <data value="66.6">Intermediate</data>
              </div>
              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 66.6%;"></div>
              </div>
            </li>
            <li class="skills-item">
              <div class="title-wrapper">
                <h5 class="h5">Git/GitHub</h5>
                <data value="100">Proficient</data>
              </div>
              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 100%;"></div>
              </div>
            </li>
            <li class="skills-item">
              <div class="title-wrapper">
                <h5 class="h5">Web design</h5>
                <data value="33.3">Beginner</data>
              </div>
              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 33.3%;"></div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Resume'
  }
  </script>
  
  <style scoped>
  

  




.container-box-resume
{
    z-index: -1;
    position: relative;
}

 .timeline { margin-bottom: 1rem; }

 .timeline .title-wrapper {
   display: flex;
   align-items: center;
   gap: 15px;
   margin-bottom: 1rem;
 }
 
 .timeline-list {
   font-size: var(--fs-6);
   margin-left: 1.5rem;
 }
 
 .timeline-item { position: relative; }
 
 .timeline-item:not(:last-child) { margin-bottom: 1em; }
 
 .timeline-item-title {
   font-size: var(--fs-6);
   line-height: 1.3;
   margin-bottom: 1em;
 }
 
 .timeline-list span {
   color: var(--accent-color);
   font-weight: var(--fw-400);
   line-height: 1.6;
 }
 
 .timeline-item:not(:last-child)::before {
   content: "";
   position: absolute;
   top: -25px;
   left: -30px;
   width: 1px;
   height: calc(100% + 50px);
   background: var(--new2);
 }
 
 .timeline-item::after {
   content: "";
   position: absolute;
   top: 5px;
   left: -33px;
   height: 6px;
   width: 6px;
   background: var(--accent-color);
   border-radius: 50%;
   box-shadow: 0 0 0 4px var(--jet);
 }
 
 .timeline-text {
   color: var(--accent-color);
   font-weight: var(--fw-300);
   line-height: 1.6;
 }
 
 
 /**
  * skills 
  */
 
 .skills-title { margin-bottom: 20px; }
 
 .skills-list { padding: 20px; }
 
 
 .skills-item:not(:last-child) { margin-bottom: 15px; }
 
 .skill .title-wrapper {
   display: flex;
   align-items: center;
   gap: 5px;
   margin-bottom: 8px;
 }
 
 .skill .title-wrapper data {
   color: var(--accent-color);
   font-size: var(--fs-7);
   font-weight: var(--fw-300);
 }
 
 .skill-progress-bg {
   background: var(--accent-color);
   width: 100%;
   height: 8px;
   border-radius: 10px;
 }
 
 .skill-progress-fill {
   background: var(--new2);
   height: 100%;
   border-radius: inherit;
 }


</style>
 
  
