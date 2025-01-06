function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const topbar = document.querySelector('.topbar');
    sidebar.style.display = 'flex';
    topbar.style.display = 'none';  
}
function closeSidebar() {
    const topbar = document.querySelector('.topbar');
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    topbar.style.display = 'flex';
}

document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navbar = document.querySelector("nav");
    const navLinks = document.querySelectorAll(".topbar a");
    let currentSection = null;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if the section is visible in the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
        }
    });

    if (currentSection) {
        console.log(`Current section: ${currentSection.id}`); // Debugging log

        let bgColor;
        if (currentSection.id === "title") {
            bgColor = "linear-gradient(90deg, #ff6c47, #ffdaa2, #ff562c)";
        } else {
            bgColor = window.getComputedStyle(currentSection).backgroundImage;
        }
        navbar.style.transition = "background-image 1s ease-in-out";
        navbar.style.backgroundImage = bgColor;

    }
});
