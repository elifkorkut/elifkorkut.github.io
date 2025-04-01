<template>
    <header>
        <h2 class="projects-section-title">PROJECTS</h2>
      </header> 

  
   <div class = "filter-container"> 
    
      <div class="filters">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="published-games">Published Games</button>
          <button class="filter-btn" data-filter="personal-projects">Personal Projects</button>
          <button class="filter-btn" data-filter="publications">Publications</button>
        </div>

       <!-- Dropdown for Mobile View -->
       <div class="dropdown-container">
        <!-- Text with chevron icon (Mobile dropdown trigger) -->
        <div id="dropdown-toggle" class="dropdown-toggle">
            <span id="selected-category">All</span>
            <span id="chevron-icon">▼</span>
        </div>
        <!-- Dropdown menu with options -->
        <div id="dropdown-menu" class="dropdown-menu">
            <button class="filter-dropdown-btn" data-filter="all">All</button>
            <button class="filter-dropdown-btn" data-filter="publications">Publications</button>
            <button class="filter-dropdown-btn" data-filter="published-games">Published Games</button>
            <button class="filter-dropdown-btn" data-filter="personal-projects">Personal Projects</button>
        </div>
    
        </div>

     </div>
 
       <!-- ProjectContainer-->

      <div class="projects-container">
             
           <!-- CARD Tunnels -->
          
           <div class="project-card personal-projects">     
            <a href="tunnels.html" target="_blank" class="project-link">
              <img src="/images/DownhillBikeLogo.png" alt="Link Icon">
            </a>
               <div class="project-content">
                  <p class="header"> Tunnels (2023)</p>
                  <p class="role">Game Developer - NomadMonkey</p>
                  <p class="description">This project is a take on the Space Shooter genre.
                     I developed my own ECS and used the Wave Function
                     Collapse algorithm as a background generator.</p>
                     <div class="project-tags">
                      <span class="tag">Unity</span>
                      <span class="tag">C#</span>
                      <span class="tag">Quest</span>
                      <span class="tag">VR</span>
                      <span class="tag">Photon</span>
                     </div>
              </div>
            
             </div>
                
           <!-- CARD  -->

       

          
            <!-- CARD Roboko -->
           
            <div class="project-card personal-projects">
                  
              <a href="roboko.html" target="_blank" class="project-link">
                <img src="/images/DownhillBikeLogo.png" alt="Link Icon">
              </a>
                 <div class="project-content">
                    <p class="header">RoboKO (2024)</p>
                    <p class="role">Game Developer - NomadMonkey</p>
                    <p class="description">This project is a take on the Space Shooter genre.
                       I developed my own ECS and used the Wave Function
                       Collapse algorithm as a background generator.</p>
                       <div class="project-tags">
                        <span class="tag">Unity</span>
                        <span class="tag">C#</span>
                        <span class="tag">Quest</span>
                        <span class="tag">EOS</span>
                        <span class="tag">Playfab</span>
                        <span class="tag">VR</span>
                        <span class="tag">MR</span>
                       </div>
                </div>
              
               </div>
            
            <!-- CARD -->


           <!-- CARD Wretched -->
           <div class="project-card personal-projects">
                  
            <a href="wretched.html" target="_blank" class="project-link">
              <img src= "/images/DownhillBikeLogo.png" alt="Link Icon">
            </a>
               <div class="project-content">
                  <p class="header"> Wretched (2023)</p>
                  <p class="role">Game Developer - NomadMonkey</p>
                  <p class="description">This project is a take on the Space Shooter genre.
                     I developed my own ECS and used the Wave Function
                     Collapse algorithm as a background generator.</p>
                     <div class="project-tags">
                      <span class="tag">Unity</span>
                      <span class="tag">C#</span>
                      <span class="tag">Quest</span>
                      <span class="tag">VR</span>
                     </div>
              </div>
            
             </div>
           
          <!-- CARD -->


              <!-- CARD Find The Difference -->
           
              <div class="project-card personal-projects">
                  
                <a href="findthedifference.html" target="_blank" class="project-link">
                  <img src="/images/DownhillBikeLogo.png" alt="Link Icon">
                </a>
                   <div class="project-content">
                      <p class="header"> Find the Difference (2023)</p>
                      <p class="role">Game Developer - NomadMonkey</p>
                      <p class="description">This project is a take on the Space Shooter genre.
                         I developed my own ECS and used the Wave Function
                         Collapse algorithm as a background generator.</p>
                         <div class="project-tags">
                          <span class="tag">Unity</span>
                          <span class="tag">C#</span>
                          <span class="tag">Quest</span>
                          <span class="tag">VR</span>
                         </div>
                  </div>
                
                 </div>
              
              <!-- CARD -->


                <!-- CARD DownHillBike -->
           
                <div class="project-card personal-projects">
                  
                  <a href="downhillbike.html" target="_blank" class="project-link">
                    <img src="/images/DownhillBikeLogo.png" alt="Link Icon">
                  </a>
                     <div class="project-content">
                        <p class="header">Downhill Bike (2023)</p>
                        <p class="role">Game Developer - NomadMonkey</p>
                        <p class="description">This project is a take on the Space Shooter genre.
                           I developed my own ECS and used the Wave Function
                           Collapse algorithm as a background generator.</p>
                           <div class="project-tags">
                            <span class="tag">Unity</span>
                            <span class="tag">C#</span>
                            <span class="tag">Quest</span>
                            <span class="tag">VR</span>
                           </div>
                    </div>
                  
                   </div>
                
                <!-- CARD -->



                <!-- CARD 5-->
                <div class="project-card publications">
                  
                  <a href="systematicreview.html" target="_blank" class="project-link">
                    <img src="/images/DownhillBikeLogo.png"alt="Link Icon">
                  </a>
                     <div class="project-content">
                        <p class="header"> Review</p>
                        <p class="role">Game Developer - NomadMonkey</p>
                        <p class="description">This project is a take on the Space Shooter genre.
                           I developed my own ECS and used the Wave Function
                           Collapse algorithm as a background generator.</p>
                           <div class="project-tags">
                            <span class="tag">Unity</span>
                            <span class="tag">C#</span>
                            <span class="tag">Quest</span>
                            <span class="tag">VR</span>
                           </div>
                    </div>
                  
                   </div>
                
                
                <!-- CARD 5 -->





                <!-- CARD -->
           
                <div class="project-card publications">
                  
                  <a href="sketchrecognition.html" target="_blank" class="project-link">
                    <img src="/images/DownhillBikeLogo.png" alt="Link Icon">
                  </a>
                     <div class="project-content">
                        <p class="header"> Sketchscape (2023)</p>
                        <p class="role">Game Developer - NomadMonkey</p>
                        <p class="description">This project is a take on the Space Shooter genre.
                           I developed my own ECS and used the Wave Function
                           Collapse algorithm as a background generator.</p>
                           <div class="project-tags">
                            <span class="tag">Unity</span>
                            <span class="tag">C#</span>
                            <span class="tag">Quest</span>
                            <span class="tag">VR</span>
                           </div>
                    </div>
                  
                   </div>
                
                <!-- CARD -->




                 <!-- CARD -->
                 <div class="project-card publications">
                  
                  <a href="heterotopia.html" target="_blank" class="project-link">
                    <img src="/images/DownhillBikeLogo.png" alt="Link Icon">
                  </a>
                     <div class="project-content">
                        <p class="header"> Heterotopia (2023)</p>
                        <p class="role">Game Developer - NomadMonkey</p>
                        <p class="description">This project is a take on the Space Shooter genre.
                           I developed my own ECS and used the Wave Function
                           Collapse algorithm as a background generator.</p>
                           <div class="project-tags">
                            <span class="tag">Unity</span>
                            <span class="tag">C#</span>
                            <span class="tag">Quest</span>
                            <span class="tag">VR</span>
                           </div>
                    </div>
                  
                   </div>
                
                <!-- CARD -->





                 <!-- CARD -->
                 <div class="project-card personal-projects">
                  
                  <a href="virtualmuseum.html" target="_blank" class="project-link">
                    <img src="/images/DownhillBikeLogo.png" alt="Link Icon">
                  </a>
                     <div class="project-content">
                        <p class="header"> Virtual Museum (2023)</p>
                        <p class="role">Game Developer </p>
                        <p class="description">This project is a take on the Space Shooter genre.
                           I developed my own ECS and used the Wave Function
                           Collapse algorithm as a background generator.</p>
                           <div class="project-tags">
                            <span class="tag">Unity</span>
                            <span class="tag">C#</span>
                            <span class="tag">Quest</span>
                            <span class="tag">VR</span>
                            <span class="tag">MR</span>
                           </div>
                    </div>
                  
                   </div>
               
                
                <!-- CARD -->




                 <!-- CARD -->
                 <div class="project-card personal-projects">
                  
                  <a href="holofice.html" target="_blank" class="project-link">
                    <img src="/images/DownhillBikeLogo.png"alt="Link Icon">
                  </a>
                     <div class="project-content">
                        <p class="header">Holoffice (2022)</p>
                        <p class="role">Game Developer - NomadMonkey</p>
                        <p class="description">This project is a take on the Space Shooter genre.
                           I developed my own ECS and used the Wave Function
                           Collapse algorithm as a background generator.</p>
                           <div class="project-tags">
                            <span class="tag">Unity</span>
                            <span class="tag">C#</span>
                            <span class="tag">Hololens</span>
                            <span class="tag">Azure</span>
                            <span class="tag">Photon</span>
                            <span class="tag">MR</span>
                           </div>
                    </div>
                  
                   </div>
                
                <!-- CARD -->




                 <!-- CARD -->
                 <div class="project-card personal-projects">
                  
                  <a href="sketchscape.html" target="_blank" class="project-link">
                    <img src="/images/DownhillBikeLogo.png" alt="Link Icon">
                  </a>
                     <div class="project-content">
                        <p class="header">Sketchscape (2021)</p>
                        <p class="role">Game Developer - NomadMonkey</p>
                        <p class="description">This project is a take on the Space Shooter genre.
                           I developed my own ECS and used the Wave Function
                           Collapse algorithm as a background generator.</p>
                           <div class="project-tags">
                            <span class="tag">Unity</span>
                            <span class="tag">C#</span>
                            
                           </div>
                    </div>
                  
                   </div>

                      <!-- CARD -->
                
                <!-- CARD -->


                <div class="project-card personal-projects">
                  
                  <a href="ludikid.html" target="_blank" class="project-link">
                    <img src="/images/DownhillBikeLogo.png" alt="Link Icon">
                  </a>
                     <div class="project-content">
                        <p class="header">Ludikid (2021)</p>
                    
                        <p class="description">This project is a take on the Space Shooter genre.
                           I developed my own ECS and used the Wave Function
                           Collapse algorithm as a background generator.</p>
                           <div class="project-tags">
                            <span class="tag">Unity</span>
                            <span class="tag">C#</span>
                          
                        </div>
                    </div>
                  
                   </div>
                    <!-- CARD-->

                
 </div>

</template>

<script setup>


  import { onMounted } from 'vue';

  onMounted(()=> { 


    const filterButtons = document.querySelectorAll(".filter-btn");
    const filterDropdownBtns = document.querySelectorAll(".filter-dropdown-btn");
    const projectCards = document.querySelectorAll(".project-card");
    const dropdownToggle = document.getElementById("dropdown-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const selectedCategory = document.getElementById("selected-category");
    const chevronIcon = document.getElementById("chevron-icon");

    let selectedCategoryText = "All"; // Default selected category

    // Function to filter project cards based on selected category
    function filterProjects(filter) {
        projectCards.forEach(card => {
            if (filter === "all" || card.classList.contains(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Function to update the active state of buttons (both dropdown and desktop)
    function setActiveButton(button) {
        // Update desktop buttons (active state)
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Update dropdown buttons (active state)
        filterDropdownBtns.forEach(btn => {
            btn.classList.remove("active");
            if (btn.textContent === button.textContent) {
                btn.classList.add("active");
            }
        });

        // Update the selected category text in the dropdown
        selectedCategory.textContent = button.textContent;
        selectedCategoryText = button.textContent; // Track selected category text
    }

    // Event listener for selecting category from dropdown (Mobile view)
    filterDropdownBtns.forEach(button => {
        button.addEventListener("click", function () {
            const filter = button.getAttribute("data-filter");
            filterProjects(filter); // Filter the project cards
            setActiveButton(button); // Update the active states for buttons
            dropdownMenu.style.display = "none";  // Close the dropdown
            chevronIcon.style.transform = "rotate(0deg)"; // Reset chevron icon
        });
    });

    // Event listener for selecting category from desktop buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = button.getAttribute("data-filter");
            filterProjects(filter); // Filter the project cards
            setActiveButton(button); // Update the active states for buttons
        });
    });

    // Toggle the visibility of the dropdown menu when the dropdown toggle is clicked
    dropdownToggle.addEventListener("click", function () {
        const isMenuVisible = dropdownMenu.style.display === "block";
        dropdownMenu.style.display = isMenuVisible ? "none" : "block";
        chevronIcon.style.transform = isMenuVisible ? "rotate(0deg)" : "rotate(180deg)"; // Rotate chevron icon
    });

    // Initialize with "All" projects displayed and the "All" button active
    filterProjects("all");

    // Ensure the active button is correctly applied when resizing from mobile to desktop
    function syncActiveButton() {
        const activeButton = Array.from(filterButtons).find(button => button.textContent === selectedCategoryText);
        if (activeButton) {
            setActiveButton(activeButton); // Apply active state to the correct button
        }
    }

    // Run sync on window resize and on initial page load
    window.addEventListener("resize", syncActiveButton);
    syncActiveButton(); // Initialize active button on page load

});
  

</script>

<style scoped>



  
  
  /*-----------------------------------*\
    Filter
  \*-----------------------------------*/
   
  
  .filter-container {
    
    z-index: 5;
    align-items: center;
    padding-bottom: 20px;
   

}

.filters {

  gap: 20px;
  display: flex;
  justify-content:center;
  align-items: center;
  padding-bottom: 1em;
  padding-left: 0px;
  margin-right: 10px;
  margin-left: 10px;

}

.filter-btn {
   
    text-decoration: none;
    background-color:var(--accent-color-button);
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    height: 50px;
    width: 200px;
    text-align: center;
    justify-content: center;
    color: white;
    font-size: 0.75rem;
    display: inline-block;
    border-radius: 4px;
    padding: 5px 8px;
  }

.filter-btn:hover {
    background-color: var(--hover-color-button);
}

.filter-btn.active {
   
  background-color: var(--selected-color-button);
    font-weight: bold;
}

.filter-dropdown-btn {
    padding: 10px 20px;
    background-color: var(--accent-color-button);
    border: none;
    cursor: pointer;
    text-align: left;
    width: 100%;
    font-size: 16px;
}

.filter-dropdown-btn:hover {
    background-color: var(--hover-color-button);
}



/* Dropdown for Mobile */
.dropdown-container {
  
  display: none;
  position: relative;
  margin-right: 30px;
  margin-left: 15px;
}

.dropdown-toggle {
 
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: var(--accent-color-button);
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: none;

 
}

#chevron-icon {
  font-size: 16px;
  transition: transform 0.3s;
}

#dropdown-menu {
 
  display: none;
  position:relative;
  width: 100%;
  background-color: var(--accent-color-button);
  border-radius: 0px;
  margin-top: 10px;
  font-size: 2rem;
  z-index: 5;
  padding-right: 20px;
}

.dropdown-menu button {
 
  color: white;
  width: 100%;
  background-color: var(--accent-color-button);
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
  text-decoration: none;
  z-index: 5;
  border-radius: 4px;
  
 
}

.dropdown-menu button:hover {
  background-color: var(--hover-color-button)
}

/* Responsive Styles */


@media (max-width: 750px) {
  
  .filters {
      display: none;
  }

  .dropdown-container {
      display: block;
  }

 }




/*-----------------------------------*\
  Projects
\*-----------------------------------*/


.projects-section-title::after {
  content: "";
  position: left;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 3px;
  background: var(--accent-color);
  border-radius: 3px;
}

.projects-section-title
{
  text-align: center;
  position: relative;
  padding-bottom: 7px;
  margin-bottom: 10px;
}
.projects-container {
  
   
    display: grid; 
    position: relative;
    
   /* grid-template-columns: repeat(3, 1fr); /* 3 cards side by side */
    gap: 20px;
    padding-left:20px;
    padding-right:20px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   
    /*width: 100%*/;
    /*max-width: 1200px*/;

}






.project-card {
   
   background-color: var(--project-card-color);
   border-radius: 8px;
   overflow: hidden;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
   transition: transform 0.3s ease;
   z-index: 1;
 }

   
 .project-card img {
  
  
   vertical-align:bottom;
   width: 100%;
   object-fit:cover;
   /*background-color: white;
   border-radius: 10px*/;
 }
 
 .project-card:hover {
   transform: translateY(-5px);
 }
 

 
 .project-tags {
   
   margin-top: 10px;
 }
 
 .tag {
   display: inline-block;
   background-color: var(--tag-color);
   color: white;
   border-radius: 4px;
   padding: 5px 8px;
   margin-right: 5px;
   font-size: 12px;
 }





.project-header {
 position: relative;
 padding: 16px;
 background: var(--selected-color-button);
 display: flex;
 flex-direction: column;
 gap: 8px;
}

.project-header .details {

 font-size: 14px;
 display: flex;
 justify-content: space-between;
 align-items: center;
}

.project-header .details span {
 display: flex;
 align-items: center;
 gap: 4px;
}

.project-header .header {
 
 font-size: 18px;
 margin: 0 0 8px;
 color: var(--description-color);
}

.project-content {

 padding: 16px;
 background: var(--project-card-info-);
 

}

.project-content .header {
 font-size: 18px;
 margin: 0 0 8px;
 color: var(--description-color);
 font-weight: bold;
}

.project-content .description {
 
 font-size: 14px;
 margin: 0;
 color: var(--description-color-gray-light);
}

.project-content .role {
 
 font-size: 14px;
 color: var(--description-color-gray-dark);
 margin-bottom: 8px;
}

 
 /* Responsive Design */



 

/* For tablets */
@media (max-width: 1024px) and (min-width: 600px) 
{
 
}
/* For mobile phones */
@media (max-width: 599px)
{
 
}

@media (min-width: 1024px) 
{
 
}




</style>
