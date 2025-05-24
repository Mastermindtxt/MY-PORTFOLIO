const menu = document.querySelector(".menu")
const hideMenu = document.querySelector(".hide-menu")
const contactPage = document.querySelector(".contact-page")
const dropdown = document.querySelector("#dropdown")
const sideMenu = document.querySelector(".side-menu-close")
const resume = document.querySelector("#resume")
const career = document.querySelector("#career")
const social = document.querySelector("#social")
const plans = document.querySelector("#plans")
const projectWrapper = document.querySelector(".project-wrapper")
const project = document.querySelectorAll(".project")
const projectImage = document.querySelector(".project-image")

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

// --- Project Section Animations and Expand/Shrink Logic ---

const projects = document.querySelectorAll('.project');
const expandBtns = document.querySelectorAll('.project-expand-btn');

// Scroll animation for project cards
function handleProjectScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    projects.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add('in-view');
        }
    });
}
window.addEventListener('scroll', handleProjectScroll);
document.addEventListener('DOMContentLoaded', handleProjectScroll);

// Expand/Shrink logic
let expandedIndex = null;
projects.forEach((card, idx) => {
    card.addEventListener('click', function (e) {
        // Prevent button click from toggling card
        if (e.target.classList.contains('project-expand-btn')) return;
        if (card.classList.contains('expanded')) {
            // Collapse if already expanded
            card.classList.remove('expanded');
            projects.forEach((c) => c.classList.remove('shrunk'));
            expandedIndex = null;
        } else {
            // Expand this card, shrink others
            projects.forEach((c, i) => {
                if (i === idx) {
                    c.classList.add('expanded');
                } else {
                    c.classList.remove('expanded');
                    c.classList.add('shrunk');
                }
            });
            expandedIndex = idx;
        }
    });
});

// When expanded, show button and divider, and handle layout
projects.forEach((card, idx) => {
    const btn = card.querySelector('.project-expand-btn');
    const divider = card.querySelector('.project-divider');
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.href = 'assets/pages/projects.html';
    });
    // Observe class changes to show/hide button/divider
    const observer = new MutationObserver(() => {
        if (card.classList.contains('expanded')) {
            btn.style.display = 'block';
            divider.style.display = 'block';
        } else {
            btn.style.display = 'none';
            divider.style.display = 'none';
        }
    });
    observer.observe(card, { attributes: true, attributeFilter: ['class'] });
});

// Prevent text disorder during transitions by forcing min-width/height
// projects.forEach(card => {
//     card.style.minHeight = '100%';
//     card.style.minWidth = '90%';
// });

// --- New Project Area Expand/Collapse Logic ---
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        const btn = card.querySelector('.project-card-expand');
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Simple expand: toggle a class, or show a modal (for now, alert)
            alert(card.querySelector('.project-card-title').textContent + '\n' + card.querySelector('.project-card-desc').textContent);
        });
    });
});

// --- Roadmap Scroll Animation ---
document.addEventListener('DOMContentLoaded', function() {
    const roadmapSection = document.querySelector('.roadmap-area');
    const svg = document.querySelector('.roadmap-svg');
    const path = document.getElementById('roadmap-path');
    const milestones = document.querySelectorAll('.roadmap-milestone');
    if (!roadmapSection || !svg || !path || milestones.length === 0) return;

    // Prepare SVG path for animation
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    // Position milestones along the path
    function positionMilestones() {
        milestones.forEach(milestone => {
            const progress = parseFloat(milestone.getAttribute('data-progress'));
            // Get point along the path
            const point = path.getPointAtLength(pathLength * progress);
            // SVG viewBox is 1000x220, container is relative
            const container = svg.getBoundingClientRect();
            const xPercent = (point.x / 1000) * 100;
            const yPercent = (point.y / 220) * 100;
            milestone.style.left = xPercent + '%';
            milestone.style.top = yPercent + '%';
        });
    }

    // Animate the roadmap
    function animateRoadmap() {
        const rect = roadmapSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        let progress = 0;
        if (rect.top < windowHeight && rect.bottom > 0) {
            progress = (windowHeight - rect.top) / (rect.height + windowHeight * 0.5);
            progress = Math.max(0, Math.min(1, progress));
        }
        // Animate the road
        const drawLength = pathLength * progress;
        path.style.strokeDashoffset = pathLength - drawLength;

        // Animate milestones
        milestones.forEach(milestone => {
            const mProgress = parseFloat(milestone.getAttribute('data-progress'));
            milestone.classList.remove('completed', 'reached');
            if (progress >= mProgress) {
                milestone.classList.add('reached');
            }
            // Completed = not the first, and passed
            if (mProgress > 0 && progress >= mProgress) {
                milestone.classList.add('completed');
            }
        });
    }

    window.addEventListener('scroll', animateRoadmap);
    window.addEventListener('resize', () => {
        positionMilestones();
        animateRoadmap();
    });
    positionMilestones();
    animateRoadmap();
});

// --- Dual Roadmap Scroll Animation ---
document.addEventListener('DOMContentLoaded', function() {
  const roadmapSection = document.querySelector('.dual-roadmap-area');
  const svgComputer = document.getElementById('road-computer');
  const svgJapanese = document.getElementById('road-japanese');
  const milestones = document.querySelectorAll('.roadmap-milestone');
  if (!roadmapSection || !svgComputer || !svgJapanese || milestones.length === 0) return;

  // Prepare SVG paths for animation
  const pathLengthComputer = svgComputer.getTotalLength();
  svgComputer.style.strokeDasharray = pathLengthComputer;
  svgComputer.style.strokeDashoffset = pathLengthComputer;

  const pathLengthJapanese = svgJapanese.getTotalLength();
  svgJapanese.style.strokeDasharray = pathLengthJapanese;
  svgJapanese.style.strokeDashoffset = pathLengthJapanese;

  // Position milestones along the path
  function positionMilestones() {
    milestones.forEach(milestone => {
      const progress = parseFloat(milestone.getAttribute('data-progress'));
      const track = milestone.getAttribute('data-track');
      let path, pathLength, viewBoxY;
      if (track === 'computer') {
        path = svgComputer;
        pathLength = pathLengthComputer;
        viewBoxY = 120;
      } else {
        path = svgJapanese;
        pathLength = pathLengthJapanese;
        viewBoxY = 120;
      }
      const point = path.getPointAtLength(pathLength * progress);
      const xPercent = (point.x / 1000) * 100;
      const yPercent = (point.y / viewBoxY) * 100;
      milestone.style.left = xPercent + '%';
      milestone.style.top = yPercent + '%';
    });
  }

  // Animate the roadmap
  function animateRoadmap() {
    const rect = roadmapSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    let progress = 0;
    if (rect.top < windowHeight && rect.bottom > 0) {
      progress = (windowHeight - rect.top) / (rect.height + windowHeight * 0.5);
      progress = Math.max(0, Math.min(1, progress));
    }
    // Animate the roads
    svgComputer.style.strokeDashoffset = pathLengthComputer - pathLengthComputer * progress;
    svgJapanese.style.strokeDashoffset = pathLengthJapanese - pathLengthJapanese * progress;

    // Animate milestones
    milestones.forEach(milestone => {
      const mProgress = parseFloat(milestone.getAttribute('data-progress'));
      milestone.classList.remove('completed', 'reached');
      if (progress >= mProgress) {
        milestone.classList.add('reached');
      }
      if (mProgress > 0 && progress >= mProgress) {
        milestone.classList.add('completed');
      }
    });
  }

  window.addEventListener('scroll', animateRoadmap);
  window.addEventListener('resize', () => {
    positionMilestones();
    animateRoadmap();
  });
  positionMilestones();
  animateRoadmap();
});

// --- VERTICAL ROADMAP SCROLL ANIMATION ---
document.addEventListener('DOMContentLoaded', function() {
  const roadmapSection = document.querySelector('.vertical-roadmap-area');
  const timeline = document.querySelector('.vertical-roadmap-svg line');
  const milestones = document.querySelectorAll('.vertical-roadmap-milestone');
  if (!roadmapSection || !timeline || milestones.length === 0) return;

  // Get the SVG line length (vertical, y2 - y1)
  const svg = document.querySelector('.vertical-roadmap-svg');
  const svgHeight = svg.viewBox.baseVal.height;
  const lineLength = timeline.y2.baseVal.value - timeline.y1.baseVal.value;

  // Position milestones along the timeline
  function positionMilestones() {
    milestones.forEach(milestone => {
      const progress = parseFloat(milestone.getAttribute('data-progress'));
      const y = svgHeight * progress;
      milestone.style.top = `calc(${y / svgHeight * 100}% - 0.5em)`;
    });
  }

  // Animate the roadmap
  function animateRoadmap() {
    const rect = roadmapSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    let progress = 0;
    if (rect.top < windowHeight && rect.bottom > 0) {
      progress = (windowHeight - rect.top) / (rect.height + windowHeight * 0.5);
      progress = Math.max(0, Math.min(1, progress));
    }
    // Animate the timeline (stroke-dashoffset)
    const dashArray = 42;
    const dashGap = 32;
    const totalDash = dashArray + dashGap;
    const dashes = Math.ceil(lineLength / totalDash);
    const visibleLength = lineLength * progress;
    timeline.setAttribute('stroke-dasharray', `${dashArray} ${dashGap}`);
    timeline.setAttribute('stroke-dashoffset', lineLength - visibleLength);

    // Animate milestones
    milestones.forEach(milestone => {
      const mProgress = parseFloat(milestone.getAttribute('data-progress'));
      milestone.classList.remove('active', 'completed');
      if (progress >= mProgress) {
        milestone.classList.add('active');
      }
      if (progress > mProgress + 0.05) {
        milestone.classList.add('completed');
      }
    });
  }

  window.addEventListener('scroll', animateRoadmap);
  window.addEventListener('resize', () => {
    positionMilestones();
    animateRoadmap();
  });
  positionMilestones();
  animateRoadmap();
});
