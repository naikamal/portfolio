// Define the text to be displayed
const roles = ["Web Developer, Freelancer", "Python Developer, Django Developer"];
const roleElement = document.querySelector(".role");
const cursorElement = document.querySelector(".cursor");
let roleIndex = 1;
let charIndex = 0;
let isTyping = true;
let cursorVisible = true;

function toggleCursor() {
    cursorElement.style.visibility = cursorVisible ? "hidden" : "visible";
    cursorVisible = !cursorVisible;
    setTimeout(toggleCursor, 500); // Blinking speed (adjust as needed)
}

function typeText() {
    if (charIndex < roles[roleIndex].length) {
        roleElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Adjust typing speed (milliseconds)
    } else {
        isTyping = false;
        setTimeout(eraseText, 1000); // Wait for 1 second before erasing
    }
}


function eraseText() {
    if (charIndex > 0) {
        roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // Adjust erasing speed (milliseconds)
    } else {
        isTyping = true;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeText, 1000); // Wait for 1 second before typing the next role
    }
}

// Start typing animation
typeText();

