<script>
export default {
  name: 'AboutMeCard'
}
</script>

<template>
  <div class="about-section">
    <div class="about-content">
      <figure class="profile-photo">
        <img
          src="/images/pp.png"
          alt="Elif's Profile Picture"
          class="profile-img"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/250x250/1e1e1e/e0e0e0?text=EHK';"
        />
      </figure>

      <article class="about-text">
        <h3>Hi, I'm Elif</h3>
        <p>
          I’m a curious creator, experience designer, and game developer with a passion for crafting meaningful digital worlds that make life feel a little more magical. My journey began in the world of architecture, studying at Middle East Technical University, where I found myself fascinated with designing experiences. That curiosity led me deep into the realm of digital and parametric design, visualization, computational thinking and eventually straight into the game world, where everything clicked.
        </p>
        <p>
          I pursued my Master’s in Multimedia Informatics with a focus on Game Technologies, diving into interactive storytelling, virtual museums, and multimedia development. Along the way, I also published several articles mostly centered on virtual reality and immersive technologies.
        </p>
        <p>
          My thesis? A PC and VR application project that let users design and curate their own virtual museums, an interactive playground for storytelling, curation, and spatial expression, because I believe everyone deserves a space to tell their story.
        </p>
        <p>
          Since then, I’ve worked with a wide range of XR devices developing immersive experiences and games that blend art, tech, and a sprinkle of wonder. I even spent a beautiful, slightly chilly chapter in Sweden as an Erasmus student, where I discovered lots of metal bands, and the joy of fika with brilliant developers. I learned a lot, froze a little, and came back with a bigger heart and sharper skills.
        </p>
        <p>
          After that, I started my first role in the industry, where I developed and published a variety of VR titles bringing immersive ideas to life and turning wild prototypes into real, playable, sometimes delightfully strange experiences.
        </p>
        <p>
          Today, I continue exploring the intersection of design and development building virtual worlds that connect, surprise, and inspire. When I’m not coding or designing, you’ll probably find me behind a camera lens, lost in a museum, or dancing flamenco (¡Olé!).
        </p>
        <p class="conclusion-text">
          I am always eager to learn and collaborate on exciting projects. Feel free to reach out!
        </p>
      </article>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');


.about-section {
  /* This container is now full-width and provides the top padding for the navbar */
  width: 100%;
  padding: 8rem 1.5rem 2rem 1.5rem;
  font-family: 'Poppins', sans-serif;
  color: var( --text-color);
}

.about-content {
  /* The content card is centered with a max-width for readability */
  display: flex;
  gap: 3rem;
  align-items: flex-start; /* Aligns photo to the top of the text block */
  background-color: var(--primary-color);
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 3px 3px 10px 10px var(--shadow-color);;
  max-width: 1100px;
  margin: 0 auto;
}

.profile-photo {
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 15px var(--shadow-color);
  width: 200px;
  height: 200px;

}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.about-text {
  flex: 1;
  line-height: 1.8;
}

.about-text h3 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
  color: var(--text-color);
  font-weight: 600;
  padding-bottom: 0.1rem;
}

.about-text p {
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
  color: var(--text-color);
  text-align: justify;
}

/* Style for the bolded text */
.about-text p :deep(strong) {
    color: var(--highlight-color);
    font-weight: 500;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.conclusion-text {
  font-weight: 500;
  color: var(--text-color); /* Make the final text stand out a bit more */
}

/* Responsive styles */
@media (max-width: 768px) {
  .about-section {
    /* Increased top padding for mobile */
    padding: 8rem 1rem 1rem 1rem;
  }

  .about-content {
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 2rem; /* Restore gap for mobile */
  }

  .profile-photo {
    width: 150px;
    height: 150px;
    margin-bottom: 0; /* Remove bottom margin to control spacing with gap */
  }
  
  .about-text {
    text-align: justify;
  }

  .about-text h3 {
    font-size: 1.5rem;
    text-align: center; /* Center title on mobile */
  }

  .about-text p {
    font-size: 0.9rem;
  }
}
</style>
