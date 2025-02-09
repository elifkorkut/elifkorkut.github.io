import { createApp } from 'vue'


import App from './App.vue'
import Resume from './Resume.vue'
import AboutMe from './AboutMe.vue'

createApp(App).mount('#app')
createApp(Resume).mount('#resume')
createApp(AboutMe).mount('#aboutme')



document.addEventListener("DOMContentLoaded", function () {
    // Get the filter buttons and the dropdown
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