const sections = document.querySelectorAll('.section-fade');
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