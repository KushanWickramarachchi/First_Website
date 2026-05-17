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
      ` \n The project was broken down into 4 steps. Mechanical assembly, electrical assembly, software setup and tramming the machine. \n\n The manual was great for first 3 steps. Majority of the mechanical setup was done using allankeys, wrenches and screwdriver set.The electrical requird a multimeter and a soldering iron.
      The hard part was tramming the machine after the initial setup. \n \n There was little to no instructions on tramming the machine and I realized there was few more precision measuring tools you have to purchase to ensure the machine is trammed correctly. 
      \n\n After setting up the machine the first step involved facing the bed. After the first time I descovered there was 1/8 inch difference on the x axis. I used various shims to and dial gauges to fix this error. I have so far machined propeller knobs, Trim Knob for a twin otter overhead console.In the future I will attempt to machine
      parts out of Steel. Which will be part of my crowfoot project`,
  

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
      " \n This is a work in progress, the goal was to create crowfoots that can use a 1/4 inch drive. So far I have made 2 crowfoots out of Aluminum. You can see pictures of my attempts on the slide show. I will add the parts that are made out of steel soon.",

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