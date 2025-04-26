const menu = document.querySelector(".menu")
const hideMenu = document.querySelector(".hide-menu")
const contactPage = document.querySelector(".contact-page")
const dropdown = document.querySelector("#dropdown")
const sideMenu = document.querySelector(".side-menu-close")
const resume = document.querySelector("#resume")
const career = document.querySelector("#career")
const social = document.querySelector("#social")
const plans = document.querySelector("#plans")



// ------ HEADER MENU BUTTON SECTION ------- grabbing //


hideMenu.addEventListener("click", () => {
    console.log(hideMenu.classList);
    sideMenu.classList.add("side-menu-close");
    sideMenu.classList.remove("side-menu-open");
    menu.classList.add("menu");
    menu.classList.remove("menu-none");
    hideMenu.classList.add("hide-submenu");
});

menu.addEventListener("click", () => {
    if (sideMenu.classList.contains("side-menu-close")) {
        console.log("button clicked");
        sideMenu.classList.remove("side-menu-close");
        sideMenu.classList.add("side-menu-open");
        menu.classList.remove("menu");
        menu.classList.add("menu-none");
        hideMenu.classList.remove("hide-submenu");
        
        console.log(sideMenu.classList, menu.classList, hideMenu.classList, );
    } else {
        console.log(sideMenu.classList, menu.classList, hideMenu.classList, );
        return
    }
});


// ------ CONTACT BUTTON SECTION ------- grabbing //

contactPage.addEventListener("mousedown", () => {
    contactPage.style.cursor = "grabbing";
    console.log("down");
});
contactPage.addEventListener("mouseup", () => {
    contactPage.style.cursor = "grab";
    console.log("up");
});




// ------ DROPDOW BUTTON SECTION ------- grabbing //

dropdown.addEventListener("mousedown", () => {
    dropdown.style.cursor = "grabbing";
    console.log("down");
});
dropdown.addEventListener("mouseup", () => {
    dropdown.style.cursor = "grab";
    console.log("up");
});

// ------ DROPDOWN MENU TOGGLE SECTION -------

const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownMenu2 = document.querySelector(".dropdown-menu-2");

dropdown.addEventListener("click", () => {
    if (dropdownMenu.classList.contains("active")) {
        dropdownMenu.classList.remove("active");
        dropdownMenu2.classList.remove("active");
    } else {
        dropdownMenu.classList.add("active");
        dropdownMenu2.classList.add("active");
    }
});

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !dropdownMenu.contains(e.target) && !dropdownMenu2.contains(e.target)) {
        dropdownMenu.classList.remove("active");
        dropdownMenu2.classList.remove("active");
    }
});
