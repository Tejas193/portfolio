console.log("Tejas Chauhan's Portfolio Loaded.");


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const messageBox = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      messageBox.style.color = "red";
      messageBox.textContent = "Please fill in all fields.";
      return;
    }

    if (!validateEmail(email)) {
      messageBox.style.color = "red";
      messageBox.textContent = "Please enter a valid email.";
      return;
    }

    messageBox.style.color = "green";
    messageBox.textContent = "Message sent successfully";

    form.reset();
  });

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.getElementById("typing-text");
  const phrases = ["Web Developer", "AI Enthusiast", "Problem Solver", "Tech Explorer"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[index];
    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, charIndex--);
    } else {
      typingText.textContent = currentPhrase.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 10000); 
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % phrases.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }

  type(); 
});
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  themeToggle?.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
