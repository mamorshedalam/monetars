function displayToggle(id) {
     if (id.style.display === "block") {
          id.style.display = "none";
     } else {
          id.style.display = "block";
          id.classList.remove("hidden");
     }
}

function sidebarToggle(id) {
     if (id.style.display === "flex") {
          id.style.display = "none";
     } else {
          id.style.display = "flex";
     }
}