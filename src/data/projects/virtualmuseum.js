export default 
    { 
      id: 1,
      show: true,
      slug: 'virtualmuseum',
      link: '/project/virtualmuseum',
      cardImage: '/images/downhillbike/DownhillBikeLogo.png',
      title: 'Virtual Museum',
      role: 'Developer',
      link1:'',
      link2:'',
      shortDescription: 'Virtual Museum App for PC, VR and XR',
      tags: ['Oculus', 'Unity', 'VR'],
      types: [ 'Multimedia Projects'],
      mainArt: {
        type: 'video',
        src: 'images/downhillbike/DownhillBikev4.mp4',
        alt: 'Downhill Bike (2023)',
        description: 'Downhill Bike (2023)'
      },
      optArt: {
        type: 'video',
        src: 'images/downhillbike/DownhillBikev1.mp4',
        alt: 'Downhill Bike (2023)',
        description: 'Downhill Bike (2023)'
      },
      secondaryArt: {
        type: 'video',
        src: 'images/downhillbike/DownhillBikev2.mp4',
        alt: 'Downhill Bike (2023)',
        description: 'Downhill Bike (2023)'
      },
      summaryHtml: `
        <p>
        This project is a Virtual Museum application that allows users to create and explore personalized exhibition spaces in VR. Users can import multimedia content—including text, 3D models, images, videos, and audio—from their local device or Google Drive. Imported items are automatically converted into prefabs, making them immediately usable within the app. Users can then build their museum spaces either by arranging content manually, using pre-defined modular components, or through procedural generation algorithms (Binary Space Partitioning, Cellular Automata, Growth Algorithms, Procedural Room Generation). Developed with Unity for Oculus VR, the application provides an interactive framework for turning digital archives into immersive, navigable museum experiences.
        </p>
     `
       ,
      detailsHtml: `
      <li><strong>Date: </strong> January 2023</li>
      <li><strong>Project Length:</strong> 1 Year </li>
      <li><strong>My Role:</strong> Developer</li>
      <li><strong>Technologies:</strong> Unity, C#, Oculus, Rhino, Adobe Photoshop, Adobe Illustrator</li>`
      ,
      responsibilitiesHtml: `
        <p>
    I was solely responsible for the design and full development of the Virtual Museum application. This included building the multimedia import system, prefab generation pipeline, procedural content generation algorithms, VR interaction mechanics, and overall system architecture. I handled every stage of development—from concept and framework design to implementation, testing, and optimization for <b>Oculus VR</b> devices using <b>Unity</b>. The project was entirely self-developed, with all technical, creative, and architectural decisions made independently.</p>

  </p>
      `,
      roleHtml: `
        <p></p>
      `,
      keyContributionsHtml: [

        
          {
            header: 'Multimedia Import & Prefab Pipeline',
            description: 'Implemented a custom pipeline in <b>Unity</b> for importing <b>3D models, textures, audio, video, and text</b> from local storage and Google Drive APIs. Designed an automated prefab conversion system to wrap imported assets into reusable Unity objects with metadata bindings for runtime instantiation.'
          },
          {
            header: 'Procedural Content Generation',
            description: 'Developed multiple procedural generation modules, including <b>Binary Space Partitioning</b> for structural layouts, <b>Cellular Automata</b> for organic room shaping, <b>Growth Algorithms</b> for dynamic expansion, and <b>Procedural Room Generation</b> for customizable exhibition halls.'
          },
          {
            header: 'Modular Museum Construction System',
            description: 'Created a hybrid framework that supports both <b>manual placement</b> of prefabs and <b>automated layout generation</b>. Designed parametric components for walls, floors, lighting, and exhibit stands, enabling scalable scene composition directly within VR.'
          },
          {
            header: 'VR Interaction Layer',
            description: 'Integrated <b>Oculus SDK</b> and <b>MRTK-style interaction patterns</b> to support hand tracking, controller input, object grabbing, and spatial navigation. Built interaction scripts for exhibit manipulation, annotation, and spatial arrangement in 3D space.'
          },
          {
            header: 'Data Persistence & Content Management',
            description: 'Implemented a runtime content manager for storing, retrieving, and dynamically loading imported assets. Built serialization and deserialization logic for user-created museum configurations to ensure persistence across sessions.'
          },
          {
            header: 'Performance Optimization',
            description: 'Profiled <b>CPU/GPU load</b> with Unity Profiler and optimized rendering by using <b>occlusion culling, baked lighting, LOD systems, and memory pooling</b>. Ensured stable VR performance while supporting heavy multimedia environments on Oculus devices.'
          }
        
        
          
        
      ]
    
      ,
      gallery: [
        {
          type: 'video',
          src: 'images/downhillbike/DownhillBikeg1.mp4',
          alt: 'dbv1',
          topText: '',
          bottomText: ''
        },
     
  
        {
          type: 'video',
          src: 'images/downhillbike/DownhillBikeg4.mp4',
          alt: 'dbv4',
          topText: '',
          bottomText: ''
        },
  
        {
          type: 'video',
          src: 'images/downhillbike/DownhillBikeg5.mp4',
          alt: 'dbv5',
          topText: '',
          bottomText: ''
        },

       
  
       
  
      ]
    }