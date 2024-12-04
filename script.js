// script.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the night mode toggle icon
    const toggle = document.getElementById("night-mode-toggle");

    // Function to toggle the 'dark-mode' class on the body
    const toggleNightMode = () => {
        document.body.classList.toggle("dark-mode");

        // Save the current mode to localStorage for persistence
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    };

    // Check localStorage to apply the saved mode on page load
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Add an event listener to the toggle icon
    toggle.addEventListener("click", toggleNightMode);
});
