export default 
    { 
      id: 115,
      show: true,
      slug: 'ludikid',
      link: '/project/ludikid',
      cardImage: '/images/tunnels/CoverSquare.png',
      title: 'Tunnels',
      role: 'Game Developer',
      link1:'',
      link2:'',
      shortDescription: 'A VR Horror Adventure Game',
      tags: ['Oculus', 'Unity', 'Photon'],
      types: [ 'Published Games'],
      mainArt: {
        type: 'image',
        src: '/images/tunnels/1920x1080.png',
        alt: 'Tunnels (2025)',
        description: 'Tunnels (2025)'
      },
      optArt: {
        type: 'image',
        src: '/images/tunnels/1920x1080.png',
        alt: 'Tunnels (2025)',
        description: 'Tunnels (2025)'
      },
      secondaryArt: {
        type: 'video',
        src: '/images/tunnels/v1.mp4',
        alt: 'Tunnels (2025)',
        description: 'Tunnels (2025)'
      },
      summaryHtml: `
        <p>Tunnels is a VR horror game with single-player and multiplayer modes, focused on creating a tense, claustrophobic experience. Players can crawl, swim, climb, and zipline to explore the environment. Enemies react to light, sound, and movement, forcing players to adapt their strategies. In single-player, you follow a story through eerie tunnels, guided by cryptic clues and a mysterious voice on the radio. In multiplayer, players face changing maze-like levels and must cooperate to escape while avoiding monsters.</p>
     `
       ,
      detailsHtml: `
      <li><strong>Released Date: </strong> May 2025</li>
      <li><strong>Project Length:</strong> 1 Year</li>
      <li><strong>Meta Store: </strong><a href="https://www.meta.com/experiences/tunnels/6963147540402115/" target="_blank" rel="noopener noreferrer">Tunnels</a></li>
      <li><strong>Studio:</strong> <a href="https://nomadmonkey.xyz/" target="_blank" rel="noopener noreferrer">Nomad Monkey</a></li>
      <li><strong>Publisher: </strong><a href="https://mastiff-games.com/games/" target="_blank" rel="noopener noreferrer">Mastiff Games</a> </li>
      <li><strong>My Role:</strong> Game Developer</li>
      <li><strong>Technologies:</strong> Unity, C#, Photon, Oculus, Blender</li>`
      ,
      responsibilitiesHtml: `
        <p>As the game developer for the Tunnels project, I was responsible for the full technical implementation of both single-player and multiplayer modes. I worked closely with sound designers and game artists, providing custom Unity tools to support their work and enhance their workflows.
  </p>
      `,
      roleHtml: `
        <p>As the only gameplay developer, I was responsible for integrating input and motion...</p>
      `,
      keyContributionsHtml: 
        `
  <strong>Multiplayer Integration</strong><br>
  Built multiplayer functionality using <strong> Photon Fusion</strong> for low-latency networking and Photon Voice for in-game voice communication, supporting scalable and synchronized cooperative gameplay.
  
  <br><strong>Monetization & Platform Services </strong><br>
  Integrated in-app purchases and virtual currency systems for Meta Horizon and Oculus, supporting soft currency economies. Connected with Unity Cloud Save and Unity Analytics for persistent player data and behavior tracking.
  
  <br> <strong>VR Gameplay & Mechanics</strong><br>
  Developed immersive VR systems including crawling, swimming, climbing, and ziplining with physics-driven interactions. Scripted dynamic environmental events such as earthquakes and floods to heighten immersion and gameplay tension.
  
  <br><strong>AI Systems</strong><br>
    <p><span class="text-large">Led Core Gameplay Systems</span></p>
    <p><span class="text-medium">Implemented AI behavior trees and combat logic</span></p>
    <p><span class="text-small">Also contributed to UI design and UX flows.</span></p>
    <p><span class="text-highlight">Optimized performance by 40% on mobile devices</span></p>Implemented modular, scalable behaviors for enemy AIs that dynamically react to light, sound, and player movement.
  
  <br><strong>Performance Optimization</strong><br>
  Optimized for VR by profiling and refining CPU, GPU, and memory usage using tools like Unity Profiler, Frame Debugger, and Memory Profiler. Developed custom VR-specific optimizations to maintain high frame rates. Created custom tools for managing baked lighting, fog systems, and light probe setups, enabling real-time adaptation and runtime adjustments based on precomputed lighting data.
  
  <br><strong>UI, Localization & Asset Management</strong><br>
  Integrated diegetic and non-diegetic UI for VR, supported multi-language localization via Unity Localization, and used Addressables for modular asset streaming and memory management during runtime.
  `
      ,
      gallery: [
        {
          type: 'image',
          src: 'images/tunnels/p1.png',
          alt: 'tunnelsp1',
          topText: 'Main Menu Art',
          bottomText: 'Rendered in Unity HDRP'
        },
        {
          type: 'image',
          src: 'images/tunnels/p2.png',
          alt: 'Gameplay Preview',
          topText: 'Gameplay Trailer',
          bottomText: 'Raw captured footage from Quest 2'
        },
  
        {
          type: 'image',
          src: 'images/tunnels/p3.png',
          alt: 'Gameplay Preview',
          topText: 'Gameplay Trailer',
          bottomText: 'Raw captured footage from Quest 2'
        },
  
        {
          type: 'video',
          src: 'images/tunnels/v1.mp4',
          alt: 'Gameplay Preview',
          topText: 'Gameplay Trailer',
          bottomText: 'Raw captured footage from Quest 2'
        },
  
        {
          type: 'image',
          src: 'images/tunnels/p4.png',
          alt: 'Gameplay Preview',
          topText: 'Gameplay Trailer',
          bottomText: 'Raw captured footage from Quest 2'
        },
  
        {
          type: 'image',
          src: 'images/tunnels/p5.png',
          alt: 'Gameplay Preview',
          topText: 'Gameplay Trailer',
          bottomText: 'Raw captured footage from Quest 2'
        },
  
        {
          type: 'image',
          src: 'images/tunnels/p6.png',
          alt: 'Gameplay Preview',
          topText: 'Gameplay Trailer',
          bottomText: 'Raw captured footage from Quest 2'
        },
  
      ]
    }