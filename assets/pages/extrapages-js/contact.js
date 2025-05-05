const menu = document.querySelector(".menu")
const hideMenu = document.querySelector(".hide-menu")
const contactPage = document.querySelector(".contact-page")
const dropdown = document.querySelector("#dropdown")
const sideMenu = document.querySelector(".side-menu-close")
const resume = document.querySelector("#resume")
const career = document.querySelector("#career")
const social = document.querySelector("#social")
const plans = document.querySelector("#plans")
const contactForm = document.getElementById("contact-form")

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

hideMenu.addEventListener("click", () => {
    sideMenu.classList.add("side-menu-close");
    sideMenu.classList.remove("side-menu-open");
    menu.classList.add("menu");
    menu.classList.remove("menu-none");
    hideMenu.classList.add("hide-submenu");
});

menu.addEventListener("click", () => {
    if (sideMenu.classList.contains("side-menu-close")) {
        sideMenu.classList.remove("side-menu-close");
        sideMenu.classList.add("side-menu-open");
        menu.classList.remove("menu");
        menu.classList.add("menu-none");
        hideMenu.classList.remove("hide-submenu");
    }
});

// ------ CONTACT BUTTON SECTION ------- //

contactPage.addEventListener("mousedown", () => {
    contactPage.style.cursor = "grabbing";
});
contactPage.addEventListener("mouseup", () => {
    contactPage.style.cursor = "grab";
});

// For touch devices
contactPage.addEventListener("touchstart", () => {
    contactPage.classList.add("touched");
});
contactPage.addEventListener("touchend", () => {
    contactPage.classList.remove("touched");
});

// ------ DROPDOWN BUTTON SECTION ------- //

dropdown.addEventListener("mousedown", () => {
    dropdown.style.cursor = "grabbing";
});
dropdown.addEventListener("mouseup", () => {
    dropdown.style.cursor = "grab";
});

// For touch devices
dropdown.addEventListener("touchstart", () => {
    dropdown.classList.add("touched");
});
dropdown.addEventListener("touchend", () => {
    dropdown.classList.remove("touched");
});

// ------ SIDE MENU ITEMS SECTION ------- //
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

// ------ CONTACT FORM HANDLING ------- //
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields");
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }
        
        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message
        
        // Create success notification
        const notification = document.createElement("div");
        notification.className = "form-notification";
        notification.innerHTML = `
            <div class="notification-content success">
                <i class="fa-solid fa-check-circle"></i>
                <p>Thank you for your message, ${name}! I'll get back to you soon.</p>
            </div>
        `;
        
        // Add to DOM
        document.querySelector(".contact-form-container").appendChild(notification);
        
        // Reset form
        contactForm.reset();
        
        // Remove notification after 5 seconds
        setTimeout(() => {
            notification.style.opacity = "0";
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 5000);
    });
}

// Add CSS for the notification
const style = document.createElement("style");
style.textContent = `
    .form-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        transition: opacity 0.5s ease;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideIn 0.5s ease forwards;
    }
    
    .success {
        background-color: rgba(0, 0, 0, 0.8);
        border: 2px solid #EB5E28;
    }
    
    .notification-content i {
        font-size: 1.5rem;
        color: #EB5E28;
    }
    
    .notification-content p {
        font-family: NORWESTER;
        color: #CCC5B9;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @media (max-width: 767px) {
        .form-notification {
            bottom: 10px;
            right: 10px;
            left: 10px;
        }
    }
`;

document.head.appendChild(style);

// ------ ORIENTATION CHANGE HANDLING ------- //
window.addEventListener("orientationchange", () => {
    // Small delay to allow the browser to complete orientation change
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
            headerWrapper.style.boxShadow = "0 0 25px rgba(235, 94, 40, 0.3)";
        } else {
            headerWrapper.style.boxShadow = "0 0 20px rgba(235, 94, 40, 0.2)";
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
