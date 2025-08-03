document.addEventListener('DOMContentLoaded', function () {
    // GSAP Animation for Hero Section
    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".profile-container", { 
        opacity: 0, 
        x: 100, 
        duration: 1, 
        delay: 0.7 
    });
    
});