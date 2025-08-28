export default 
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
      tags: ['Oculus', 'Unity', 'Photon','VR'],
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
      <li><strong>Project Length:</strong> 1.5 Year</li>
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
      
      keyContributionsHtml:  [
        {
          header: 'Multiplayer Integration',
          description: 'Built multiplayer functionality using <b>Photon Fusion</b> for low-latency networking and <b>Photon Voice</b> for in-game voice communication, supporting scalable and synchronized cooperative gameplay.'
        },
        {
          header: 'Monetization & Platform Services',
          description: 'Integrated <b>in-app purchases</b> and virtual currency systems for Meta Horizon and Oculus, supporting soft currency economies. Connected with <b>Unity Cloud Save</b> and <b>Unity Analytics</b> for persistent player data and behavior tracking.'
        },
        {
          header: 'VR Gameplay & Mechanics',
          description: 'Developed immersive VR systems including <b>crawling, swimming, climbing, and ziplining</b> with physics-driven interactions. Scripted dynamic environmental events such as earthquakes and floods to heighten immersion and gameplay tension.'
        },
        {
          header: 'AI Systems',
          description: 'Implemented <b>AI behavior trees</b> and combat logic with modular, scalable behaviors for enemy AIs that dynamically react to light, sound, and player movement.'
        },
        {
          header: 'Performance Optimization',
          description: 'Optimized for VR by profiling and refining <b>CPU, GPU, and memory usage</b> using <b>Unity Profiler</b>, Frame Debugger, and Memory Profiler. Developed custom VR-specific optimizations to maintain high frame rates and created custom tools for managing baked lighting, fog systems, and light probe setups.'
        },
        {
          header: 'UI, Localization & Asset Management',
          description: 'Integrated <b>diegetic and non-diegetic UI</b> for VR, supported multi-language localization via Unity Localization, and used <b>Addressables</b> for modular asset streaming and memory management during runtime.'
        }
      ],
      gallery: [
        {
          type: 'image',
          src: 'images/tunnels/p1.png',
          alt: 'tunnelsp1',
          topText: '',
          bottomText: ''
        },
        {
          type: 'image',
          src: 'images/tunnels/p2.png',
          alt: 'Gameplay Preview',
          topText: '',
          bottomText: ''
        },
  
        {
          type: 'image',
          src: 'images/tunnels/p3.png',
          alt: 'Gameplay Preview',
          topText: '',
          bottomText: ''
        },
  
        {
          type: 'video',
          src: 'images/tunnels/v1.mp4',
          alt: 'Gameplay Preview',
          topText: '',
          bottomText: ''
        },
  
        {
          type: 'image',
          src: 'images/tunnels/p4.png',
          alt: 'Gameplay Preview',
          topText: '',
          bottomText: ''
        },
  
        {
          type: 'image',
          src: 'images/tunnels/p5.png',
          alt: 'Gameplay Preview',
          topText: '',
          bottomText: ''
        },
  
        {
          type: 'image',
          src: 'images/tunnels/p6.png',
          alt: 'Gameplay Preview',
          topText: '',
          bottomText: ''
        },
  
      ]
    }