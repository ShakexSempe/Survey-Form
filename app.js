const toggle = document.getElementById("toggle");
const nav = document.getElementById("navbar");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    const links = document.querySelectorAll(".nav-link");
    links.forEach( link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
    nav.addEventListener("click", () => {
        nav.classList.remove("active");
    })
})