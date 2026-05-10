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
      " \n The project was broken down into 4 steps. Mechanical assembly, electrical assembly, software setup and tramming the machine. The manual was great for first 3 steps. There was little to now instructions on tramming the machine. After facing the bed for the first time I descovered there was 1/8 inch difference on the x axis. I used various shims to and dial gauges to fix this error. at the End I was able to get the flatness of the bed relative to spindle to +/- .005 inch ",
  

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
      " \n This is a work in progress the goal was to creae crowfoots that can use a 1/4 inch drive. Initially I wanted to make it out of aluminum then move on to steel. I want to make one out if steel in the this month. You can see pictures of my first attempt at making a part and my second attempt",

    skills: ["SolidWorks", "Mechanical Design"]
  }
};

let activeProject = null;

function openProjectModal(projectName) {

  activeProject = projects[projectName];

  currentSlide = 0;

  document.getElementById("modalTitle").innerText =
    activeProject.title;

  //document.getElementById("modalDate").innerText =
   // activeProject.date;

  document.getElementById("modalDescription").innerText =
    activeProject.description;

  updateSlide();

 

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