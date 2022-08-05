function displayToggle(id) {
     if (id.style.display === "none") {
          id.style.display = "block";
     } else {
          id.style.display = "none";
     }
}

function sidebarToggle(id) {
     if (id.style.display === "flex") {
          id.style.display = "none";
     } else {
          id.style.display = "flex";
     }
}