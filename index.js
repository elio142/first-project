// Function to send email
function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate form inputs
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (message === "") {
    alert("Please enter your message.");
    return false;
  }

  sendEmail();
}


// Store project data in an array
let projects = [
  { title: "Project 1", description: "Description of the first project" },
  { title: "Project 2", description: "Description of the second project" },
  { title: "Project 3", description: "Description of the third project" }
];

// Get the container where projects should be added
let projectsContainer = document.querySelector(".multipleProjects");
projectsContainer.innerHTML = ""; // Clear existing content

// Use map to generate the div elements
let projectDivs = projects.map((project) => {
  let projectDiv = document.createElement("div");

  projectDiv.innerHTML = `
    <h4>${project.title}</h4>
    <p>${project.description}</p>
  `;

  return projectDiv; // Return the div to the new array
});

// Append all generated divs to the container
projectDivs.forEach(div => projectsContainer.appendChild(div));



// Slider Functionality
document.addEventListener("DOMContentLoaded", function () {
  var slides = document.getElementsByClassName("slider");
  var currentIndex = 0;
  var interval;

  function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = i === index ? "block" : "none";
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    
    showSlide(currentIndex);
    
}

function startSlider() {
    interval = setInterval(nextSlide, 3000);
}

function stopSlider() {
    clearInterval(interval);
}

showSlide(currentIndex);
  startSlider();

  const button = document.querySelector("button");
  button.addEventListener("click", () => validateForm());
  
});

const sendEmail = async () => {
  const url = "https://api.emailjs.com/api/v1.0/email/send";

  const data = {
    service_id: "service_5p2nj9m",
    template_id: "elio123",
    user_id: "kLGuKHDTc--RzYINt",
    template_params: {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      message: document.getElementById("message").value.trim(),
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Email sent successfully!");
    } else {
      console.error("Email sending failed:", await response.text());
    }
  } catch (error) {
    alert("An error occurred:", error);
  }
};