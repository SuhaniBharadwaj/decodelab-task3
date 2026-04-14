// ========== HAMBURGER MENU ==========
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}
 const heroBtn = document.getElementById("changeHeroBtn");
const heroText = document.getElementById("heroText");

if (heroBtn && heroText) {

    const texts = [
        "Creating modern and responsive web applications with clean design.",
        "I build interactive web applications using modern JavaScript and responsive UI design.",
        "Passionate about building beautiful and functional user experiences."
    ];

    let index = 0;

    heroBtn.addEventListener("click", () => {
        index = (index + 1) % texts.length;
        heroText.textContent = texts[index];
    });
}




// ========== SKILL CARD CLICK ==========
document.querySelectorAll(".skill-card").forEach(card => {
    let active = false;

    card.addEventListener("click", () => {
        const icon = card.querySelector(".skill-icon");

        if (!active) {
            card.style.transform = "scale(1.1)";
            card.style.background = "#38bdf8";
            card.style.color = "black";
            if (icon) icon.style.color = "black";
        } else {
            card.style.transform = "scale(1)";
            card.style.background = "";
            card.style.color = "";
            if (icon) icon.style.color = "";
        }

        active = !active;
    });
});


// ========== TAG CLICK ==========
document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", () => {
        tag.classList.toggle("active");
    });
});


// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// ========== FADE-IN ==========
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".section").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
});


// ========== GREETING ==========
const greeting = document.getElementById("greeting");

if (greeting) {
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = "Good Morning! ☀️";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon! 🌤️";
    } else {
        greeting.textContent = "Good Evening! 🌙";
    }
}


// ========== DARK MODE ==========
const darkModeToggle = document.getElementById("darkModeToggle");

if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Set initial opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in';

// ========== SCROLL TO TOP FUNCTIONALITY ==========
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// ========== RESPONSIVE NAVBAR FIX ==========
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});
// ========== LAZY LOADING IMAGES ==========
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                imgObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        imgObserver.observe(img);
    });
}