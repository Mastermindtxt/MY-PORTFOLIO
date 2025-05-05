const menu = document.querySelector(".menu")
const hideMenu = document.querySelector(".hide-menu")
const contactPage = document.querySelector(".contact-page")
const dropdown = document.querySelector("#dropdown")
const sideMenu = document.querySelector(".side-menu-close")
const resume = document.querySelector("#resume")
const career = document.querySelector("#career")
const social = document.querySelector("#social")
const plans = document.querySelector("#plans")

// ------ CHECK FOR MOBILE/TABLET DEVICES ------- //
const isMobile = () => {
    return window.innerWidth <= 767;
};

const isTablet = () => {
    return window.innerWidth > 767 && window.innerWidth <= 1024;
};

// ------ RESPONSIVE MENU HANDLING ------ //
window.addEventListener('resize', () => {
    handleResponsiveLayout();
});

function handleResponsiveLayout() {
    if (isMobile() || isTablet()) {
        if (sideMenu.classList.contains("side-menu-open")) {
            hideMenu.classList.remove("hide-submenu");
        }
    }
}

// Run on page load
document.addEventListener("DOMContentLoaded", handleResponsiveLayout);

// ------ HEADER MENU BUTTON SECTION ------- //

// Close menu when clicking on background
hideMenu.addEventListener("click", () => {
    console.log(hideMenu.classList);
    sideMenu.classList.add("side-menu-close");
    sideMenu.classList.remove("side-menu-open");
    menu.classList.add("menu");
    menu.classList.remove("menu-none");
    hideMenu.classList.add("hide-submenu");
});

// Open menu button event listener (works for both click and touch)
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

// ------ CONTACT BUTTON SECTION ------- //

// For mouse users
contactPage.addEventListener("mousedown", () => {
    contactPage.style.cursor = "grabbing";
    console.log("down");
});
contactPage.addEventListener("mouseup", () => {
    contactPage.style.cursor = "grab";
    console.log("up");
});

// For touch devices
contactPage.addEventListener("touchstart", () => {
    contactPage.classList.add("touched");
});
contactPage.addEventListener("touchend", () => {
    contactPage.classList.remove("touched");
});

// ------ DROPDOWN BUTTON SECTION ------- //

// For mouse users
dropdown.addEventListener("mousedown", () => {
    dropdown.style.cursor = "grabbing";
    console.log("down");
});
dropdown.addEventListener("mouseup", () => {
    dropdown.style.cursor = "grab";
    console.log("up");
});

// For touch devices
dropdown.addEventListener("touchstart", () => {
    dropdown.classList.add("touched");
});
dropdown.addEventListener("touchend", () => {
    dropdown.classList.remove("touched");
});

// ------ DROPDOWN MENU TOGGLE SECTION -------

const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownMenu2 = document.querySelector(".dropdown-menu-2");

dropdown.addEventListener("click", () => {
    if (dropdownMenu && dropdownMenu2) {
        if (dropdownMenu.classList.contains("active")) {
            dropdownMenu.classList.remove("active");
            dropdownMenu2.classList.remove("active");
        } else {
            dropdownMenu.classList.add("active");
            dropdownMenu2.classList.add("active");
        }
    }
});

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
    if (dropdownMenu && dropdownMenu2) {
        if (!dropdown.contains(e.target) && !dropdownMenu.contains(e.target) && !dropdownMenu2.contains(e.target)) {
            dropdownMenu.classList.remove("active");
            dropdownMenu2.classList.remove("active");
        }
    }
});

// ------ SIDE MENU ITEMS ------- //
// Add click events for side menu items
const menuItems = [resume, career, social, plans];
menuItems.forEach(item => {
    if (item) {
        item.addEventListener("click", () => {
            // Close menu automatically on mobile when menu item is clicked
            if (isMobile() || isTablet()) {
                sideMenu.classList.add("side-menu-close");
                sideMenu.classList.remove("side-menu-open");
                menu.classList.add("menu");
                menu.classList.remove("menu-none");
                hideMenu.classList.add("hide-submenu");
            }
        });
    }
});

// ------ HANDLE ORIENTATION CHANGE ------- //
window.addEventListener("orientationchange", () => {
    // Small delay to allow browser to complete rotation
    setTimeout(() => {
        handleResponsiveLayout();
    }, 100);
});

// ------ HEADER INTERACTION ENHANCEMENT ------- //
const headerElements = [menu, contactPage, dropdown];

headerElements.forEach(element => {
    if (element) {
        // Add hover effect
        element.addEventListener("mouseenter", () => {
            element.style.transform = "translateY(-2px)";
        });
        
        element.addEventListener("mouseleave", () => {
            element.style.transform = "translateY(0)";
        });
        
        // Add click effect
        element.addEventListener("mousedown", () => {
            element.style.transform = "scale(0.97)";
        });
        
        element.addEventListener("mouseup", () => {
            element.style.transform = "translateY(-2px)";
            setTimeout(() => {
                element.style.transform = "translateY(0)";
            }, 300);
        });
    }
});

// Add header shadow on scroll
window.addEventListener("scroll", () => {
    const headerWrapper = document.querySelector(".header-wrapper");
    if (headerWrapper) {
        if (window.scrollY > 20) {
            headerWrapper.style.boxShadow = "0px 0px 12px 3px #403D39";
        } else {
            headerWrapper.style.boxShadow = "0px 0px 10px 2px #403D39";
        }
    }
});

// ------ SIDE MENU ENHANCEMENTS ------- //

// Add animation to menu items with staggered delay
const animateMenuItems = () => {
    const menuProfile = document.querySelector(".menu-profile");
    const listItems = document.querySelectorAll(".list");
    const menuFooter = document.querySelector(".menu-footer");
    
    if (menuProfile) {
        menuProfile.style.opacity = "0";
        menuProfile.style.transform = "translateY(-20px)";
        
        setTimeout(() => {
            menuProfile.style.transition = "all 0.4s ease-out";
            menuProfile.style.opacity = "1";
            menuProfile.style.transform = "translateY(0)";
        }, 100);
    }
    
    if (listItems.length > 0) {
        listItems.forEach((item, index) => {
            item.style.opacity = "0";
            item.style.transform = "translateX(-20px)";
            
            setTimeout(() => {
                item.style.transition = "all 0.4s ease-out";
                item.style.opacity = "1";
                item.style.transform = "translateX(0)";
            }, 200 + (index * 100));
        });
    }
    
    if (menuFooter) {
        menuFooter.style.opacity = "0";
        
        setTimeout(() => {
            menuFooter.style.transition = "all 0.4s ease-out";
            menuFooter.style.opacity = "1";
        }, 600);
    }
};

// Run animations when menu opens
menu.addEventListener("click", () => {
    if (sideMenu.classList.contains("side-menu-close")) {
        setTimeout(() => {
            animateMenuItems();
        }, 300);
    }
});

// Add hover effects to list items
const listItems = document.querySelectorAll(".list");
listItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        // Add a subtle orange glow to the text
        item.style.textShadow = "0 0 8px rgba(235, 94, 40, 0.5)";
        
        // Create a ripple effect with a subtle orange highlight
        const ripple = document.createElement("span");
        ripple.style.position = "absolute";
        ripple.style.top = "0";
        ripple.style.left = "0";
        ripple.style.width = "100%";
        ripple.style.height = "100%";
        ripple.style.background = "radial-gradient(circle, rgba(235, 94, 40, 0.1) 0%, transparent 70%)";
        ripple.style.opacity = "0";
        ripple.style.transition = "opacity 0.6s ease";
        
        item.appendChild(ripple);
        
        setTimeout(() => {
            ripple.style.opacity = "1";
        }, 10);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
    
    item.addEventListener("mouseleave", () => {
        item.style.textShadow = "none";
    });
});

// Add animated effects to social icons
const socialIcons = document.querySelectorAll(".icons");
socialIcons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        const iconElement = icon.querySelector("i");
        if (iconElement) {
            iconElement.style.transition = "all 0.3s ease";
            iconElement.style.transform = "scale(1.2) translateY(-2px)";
            iconElement.style.color = "#EB5E28";
        }
    });
    
    icon.addEventListener("mouseleave", () => {
        const iconElement = icon.querySelector("i");
        if (iconElement) {
            iconElement.style.transform = "scale(1) translateY(0)";
            iconElement.style.color = "#CCC5B9";
        }
    });
});

// Enhanced menu profile effects
const menuProfile = document.querySelector(".menu-profile");
if (menuProfile) {
    menuProfile.addEventListener("mouseenter", () => {
        menuProfile.style.transform = "translateY(-3px)";
        menuProfile.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
        menuProfile.style.borderColor = "#EB5E28";
    });
    
    menuProfile.addEventListener("mouseleave", () => {
        menuProfile.style.transform = "";
        menuProfile.style.boxShadow = "";
        menuProfile.style.borderColor = "#CCC5B9";
    });
}
