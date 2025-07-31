document.getElementById("project-scenario").innerText = projectData.scenario;

const skillsContainer = document.getElementById("skills");
projectData.skills.forEach(skill => {
  const badge = document.createElement("span");
  badge.className = "badge bg-primary";
  badge.innerText = skill;
  skillsContainer.appendChild(badge);
});

document.getElementById("tools").innerText = projectData.tools.join(", ");
document.getElementById("summary").innerText = projectData.summary;
document.getElementById("solution").innerText = projectData.solution;
document.getElementById("approach").innerText = projectData.approach;
document.getElementById("project-link").href = projectData.projectLink;
