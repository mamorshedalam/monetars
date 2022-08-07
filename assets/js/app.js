function flexToggle(id) {
     if (id.classList.contains("hidden")) {
          id.classList.add("flex");
          id.classList.remove("hidden");
     } else {
          id.classList.add("hidden");
          id.classList.remove("flex");
     }
}

function blockToggle(id) {
     if (id.classList.contains("hidden")) {
          id.classList.add("block");
          id.classList.remove("hidden");
     } else {
          id.classList.add("hidden");
          id.classList.remove("block");
     }
}

function accordionToggle(btn, id) {
     const sections = document.querySelectorAll('[role="TabContent"]');
     for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          section.classList.add("hidden");
          section.classList.remove("block");
     }
     const buttons = document.querySelectorAll('[role="button"]');
     for (let i = 0; i < buttons.length; i++) {
          const button = buttons[i];
          button.classList.add("text-neutral-500", "border-transparent");
          button.classList.remove("text-blue-800", "border-blue-800");
     }

     btn.classList.add("text-blue-800", "border-blue-800");
     btn.classList.remove("text-neutral-500", "border-transparent");

     id.classList.add("block");
     id.classList.remove("hidden");
}