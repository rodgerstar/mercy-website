const menuBtn = document.getElementById("menu-btn")
const navlinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navlinks.classList.toggle("open")

    const isOpen = navlinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line")
});

navlinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { // Ensure that an <a> link is clicked
        navlinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
});

const ScrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img",{
    ...ScrollRevealOption,
    origin: "right",
})

ScrollReveal().reveal(".header_content .section_subheader ",{
    ...ScrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".header_content h1",{
    ...ScrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".header_content .section_description ",{
    ...ScrollRevealOption,
    delay: 1500,
})

ScrollReveal().reveal(".header_content .header_btn ",{
    ...ScrollRevealOption,
    delay: 2000,
})