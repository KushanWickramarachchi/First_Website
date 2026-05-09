let currentSlide = 0;

const projects = {
  cnc: {
    title: "CNC Project",
    date: "2026 Present",

    images: [
     
      "images/CNC_1.jpg",
      "images/CNC_2.jpg",
      "images/Project Image 2.JPG",
      "images/CNC_4.jpg",     
    ],

    description:
      "This CNC project focuses on machining, setup, toolpaths, manufacturing accuracy, and mechanical alignment.",

    skills: ["CNC", "Manufacturing", "Toolpaths"]
  },

  website: {
    title: "Personal Website",
    date: "2025-2026",

    images: [
      "images/Project Image 1.jpg",
      "images/web2.jpg"
    ],

    description:
      "Portfolio website built using HTML, CSS, and JavaScript.",

    skills: ["HTML", "CSS", "JavaScript","ChatGPT"]
  },

  crowfoot: {
    title: "Crowfoot Design",
    date: "2023-2024",

    images: [
      "images/Project Image 3.JPG",
      "images/CW_2.JPG"
    ],

    description:
      "Mechanical crowfoot tool design project.",

    skills: ["SolidWorks", "Mechanical Design"]
  }
};

let activeProject = null;

function openProjectModal(projectName) {

  activeProject = projects[projectName];

  currentSlide = 0;

  document.getElementById("modalTitle").innerText =
    activeProject.title;

  document.getElementById("modalDate").innerText =
    activeProject.date;

  document.getElementById("modalDescription").innerText =
    activeProject.description;

  updateSlide();

  const skillsContainer =
    document.getElementById("modalSkills");

  skillsContainer.innerHTML = "";

  activeProject.skills.forEach(skill => {

    const button = document.createElement("button");

    button.innerText = skill;

    skillsContainer.appendChild(button);
  });

  document.getElementById("overlay").style.display =
    "flex";
}

function updateSlide() {

  document.getElementById("modalImage").src =
    activeProject.images[currentSlide];
}

function nextSlide() {

  currentSlide++;

  if (currentSlide >= activeProject.images.length) {
    currentSlide = 0;
  }

  updateSlide();
}

function previousSlide() {

  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = activeProject.images.length - 1;
  }

  updateSlide();
}

function closeModal() {

  document.getElementById("overlay").style.display =
    "none";
}

document.getElementById("overlay")
.addEventListener("click", function(event) {

  if (event.target === this) {
    closeModal();
  }
});