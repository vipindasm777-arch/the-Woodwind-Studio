// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("nav-scrolled");
    }
    else{
        navbar.classList.remove("nav-scrolled");
    }

});

// ===========================
// AUDIO PLAY BUTTONS
// ===========================

let currentAudio = null;

document.querySelectorAll(".player-btn").forEach(button => {

    button.addEventListener("click", () => {

        const id = button.dataset.id;

        const visualizer =
            document.getElementById(`vis-${id}`);

        if(currentAudio){
            currentAudio.pause();
            document
                .querySelectorAll(".visualizer")
                .forEach(v => v.classList.remove("active"));
        }

        const audio = new Audio(
            `assets/audio/${id}.mp3`
        );

        audio.play();

        currentAudio = audio;

        visualizer?.classList.add("active");

        audio.addEventListener("ended", () => {

            visualizer?.classList.remove("active");

            currentAudio = null;

        });

    });

});

// ===========================
// SCROLL ANIMATION
// ===========================

const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("animate-fade-in-up");

}

});

},
{
threshold:0.2
}
);

document.querySelectorAll(
".beat-card,.glass-panel"
).forEach(el=>observer.observe(el));


// ===========================
// CONTACT FORM
// ===========================

const contactForm =
document.getElementById("contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank you! Your message has been sent."
);

contactForm.reset();

});

}