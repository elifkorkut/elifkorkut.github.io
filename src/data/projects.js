

// /src/data/projects.js
export const projects = [
  { 
    id: 1,
    slug: 'downhillbike',
    link: '/project/downhillbike',
    cardImage: '/images/DownhillBikeLogo.png',
    title: 'Downhill Bike',
    role: 'Game Developer',
    link1:'',
    link2:'',
    shortDescription: 'A VR cycling game with immersive terrain and competitive gameplay.',
    tags: ['VR', 'Unity', 'Cycling'],
    types: [ 'Publications'],
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
        type: 'video',
        src: '/images/pp.jpeg',
        alt: 'Gameplay Preview',
        topText: 'Gameplay Trailer',
        bottomText: 'Raw captured footage from Quest 2'
      }
    ]
  },


  { 
    id: 2,
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
