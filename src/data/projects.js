

// /src/data/projects.js
export const projects = [
  { 
    id: 1,
    show: true,
    slug: 'tunnels',
    link: '/project/tunnels',
    cardImage: '/images/tunnels/CoverSquare.png',
    title: 'Tunnels',
    role: 'Game Developer',
    link1:'',
    link2:'',
    shortDescription: 'A VR Horror Adventure Game',
    tags: ['Oculus', 'Unity', 'Photon'],
    types: [ 'Published Game'],
    mainArt: {
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
    keyContributionsHtml: [
      `
<strong>Multiplayer Integration</strong>
Built multiplayer functionality using Photon Fusion for low-latency networking and Photon Voice for in-game voice communication, supporting scalable and synchronized cooperative gameplay.

<strong>Monetization & Platform Services </strong>
Integrated in-app purchases and virtual currency systems for Meta Horizon and Oculus, supporting soft currency economies. Connected with Unity Cloud Save and Unity Analytics for persistent player data and behavior tracking.

<strong>VR Gameplay & Mechanics</strong>
Developed immersive VR systems including crawling, swimming, climbing, and ziplining with physics-driven interactions and precise spatial control. Scripted dynamic environmental events such as earthquakes and floods to heighten immersion and gameplay tension.

<strong>AI Systems</strong>
Designed intelligent enemy AI that dynamically reacts to light, sound, and player movement. Implemented modular, scalable behaviors using based on game design patterns.

<strong>Performance Optimization</strong>
Optimized for VR by profiling and refining CPU, GPU, and memory usage using tools like Unity Profiler, Frame Debugger, and Memory Profiler. Developed custom VR-specific optimizations to maintain high frame rates. Created custom tools for managing baked lighting, fog systems, and light probe setups, enabling real-time adaptation and runtime adjustments based on precomputed lighting data.

<strong>UI, Localization & Asset Management</strong>
Integrated diegetic and non-diegetic UI for VR, supported multi-language localization via Unity Localization, and used Addressables for modular asset streaming and memory management during runtime.
`
    ],
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
  },


  { 
    id: 2,
    show: true,
    slug: 'downhillbike2',
    link: '/project/downhillbike2',
    cardImage: '/images/DownhillBikeLogo.png',
    title: 'Downhill Bike2',
    role: 'Game Developer',
    types: ['Multimedia Projects'],
    shortDescription: 'A VR cycling game with immersive terrain and competitive gameplay.',
    tags: ['VR', 'Unity', 'Cycling'],
    mainArt: {
      type: 'video',
      src: '/images/tunnels/video1.mp4',
      alt: 'Downhill Bike Main Art',
      description: 'Cover image for Downhill Bike project.'
    },
    secondaryArt: {
      type: 'video',
      src: '/images/tunnels/video1.mp4',
      alt: 'Gameplay Demo',
      description: 'Gameplay demo of Downhill Bike showing terrain and VR input.'
    },
    summaryHtml: `
      <p><strong>Downhill Bike</strong> is a VR cycling game that immerses players in scenic terrain...</p>
    `,
    detailsHtml: `
      <ul>
        <li><strong>Released:</strong> May 2025</li>
        <li><strong>Engine:</strong> Unity</li>
        <li><strong>Studio:</strong> Beyond Motion</li>
        <li><strong>Publisher:</strong> Immersion Studios</li>
        <li><strong>Team Size:</strong> 10</li>
        <li><strong>Tech:</strong> Unity, C#, Blender</li>
      </ul>
    `,
    responsibilitiesHtml: `
      <p>I led the systems design for terrain navigation and implemented physics-based motion...</p>
    `,
    roleHtml: `
      <p>As the only gameplay developer, I was responsible for integrating input and motion...</p>
    `,
    keyContributions: [
      'Bicycle Physics & Core Mechanics',
      'VR Interaction & Input Mapping',
      'Multiplayer Sync & Replay System',
      'Optimization & Shader LODs'
    ],
    gallery: [
      {
        type: 'image',
        src: '/images/pp.jpeg',
        alt: 'Downhill Bike Cover',
        topText: 'Main Menu Art',
        bottomText: 'Rendered in Unity HDRP'
      },
      {
        type: 'image',
        src: '/images/pp.jpeg',
        alt: 'Gameplay Preview',
        topText: 'Gameplay Trailer',
        bottomText: 'Raw captured footage from Quest 2'
      }
    ]

  },

  {

  id: 3,

  show: true,
  slug: 'downhillbike3',
  link: '/project/downhillbike3',
  cardImage: '/images/DownhillBikeLogo.png',
  title: 'Downhill Bike3',
  types: ['Published Games'],
  role: 'Game Developer',
  shortDescription: 'A VR cycling game with immersive terrain and competitive gameplay.',
  tags: ['VR', 'Unity', 'Cycling'],
  mainArt: {
    type: 'video',
    src: '/images/tunnels/video1.mp4',
    alt: 'Downhill Bike Main Art',
    description: 'Cover image for Downhill Bike project.'
  },
  secondaryArt: {
    type: 'video',
    src: '/images/tunnels/video1.mp4',
    alt: 'Gameplay Demo',
    description: 'Gameplay demo of Downhill Bike showing terrain and VR input.'
  },
  summaryHtml: `
    <p><strong>Downhill Bike</strong> is a VR cycling game that immerses players in scenic forest environments, focusing on realism and competitive gameplay. It features a detailed physics-based bike system including suspension, dual-brake controls, leaning, bunny hops, and wheelies. The game supports Oculus leaderboard integration, ghost players, replay functionality, and simulated multiplayer modes, enhanced by haptic feedback and spatial audio for a fully immersive experience.</p>
    <ul>
      <li><strong>Released:</strong> May 2025</li>
      <li><strong>Engine:</strong> Unity</li>
      <li><strong>Studio:</strong> Beyond Motion</li>
      <li><strong>Publisher:</strong> Immersion Studios</li>
      <li><strong>Team Size:</strong> 10</li>
      <li><strong>Tech:</strong> Unity, C#, Blender</li>
    </ul>
  `,
  responsibilitiesHtml: `
    <p>As the sole developer of <strong>Downhill Bike</strong>, I was responsible for the complete design and implementation of all core systems. This included gameplay mechanics, VR interactions, UI development, and performance optimization. I collaborated closely with artists and designers to ensure a cohesive and immersive VR experience on Oculus platforms.</p>
  `,
  keyContributions: [
    'Engineered a fully interactive physics-based bike system featuring suspension, dual-brake controls, bunny hops, leaning, and wheelies for realistic movement and control.',
    'Designed intuitive VR interactions focusing on player comfort and precision, enhanced by motion dynamics, haptic feedback, and spatial audio.',
    'Developed a simulated multiplayer experience with replay systems and ghost players for benchmarking and asynchronous competition.',
    'Implemented global (Oculus-integrated) and local leaderboard systems alongside checkpoint mechanics to support competitive progression.',
    'Profiled and optimized CPU, GPU, and memory performance specifically for Oculus devices, using Unity Profiler and custom tools for lighting and physics tuning.',
    'Created in-game UI elements and a guided tutorial mode to improve onboarding and player retention, collaborating with design and art teams to maintain clarity and VR comfort standards.'
  ],
  gallery: [
    {
      type: 'image',
      src: '/images/pp.jpeg',
      alt: 'Downhill Bike Cover',
      topText: 'Main Menu Art',
      bottomText: 'Rendered in Unity HDRP'
    },
    {
      type: 'video',
      src: '/images/pp.jpeg',
      alt: 'Gameplay Preview',
      topText: 'Gameplay Trailer',
      bottomText: 'Raw captured footage from Quest 2'
    }
  ]
}
  

]
