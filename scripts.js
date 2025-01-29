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

document.getElementById('current-year').textContent = new Date().getFullYear();

(function() {
    emailjs.init("PD3ut7vHtaiRXs4cT");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_t34upxv', 'template_mv3woef', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again later.');
        });
});
