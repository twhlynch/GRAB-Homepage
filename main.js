const sections = document.querySelectorAll('.section-fade');

// fade in with observer

const sectionVisible = (entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('section-visible');
        observer.unobserve(entry.target);
    });
};
const sectionObserver = new IntersectionObserver(sectionVisible, {
    root: null,
    threshold: 0,
    rootMargin: '0px'
});
sections.forEach(section => {
    sectionObserver.observe(section);
});

// fade in with on scroll (observer sometimes doesn't work well on mobile)

document.addEventListener('scroll', () => {
    const pageBottom = window.scrollY + window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageBottom > sectionTop) {
            section.classList.add('section-visible');
        }
    });
});

// hidden trailer controls

const trailer = document.getElementById('trailer-video');
trailer.addEventListener('click', () => {
    trailer.paused? trailer.play() : trailer.pause();
});