// Declarer les elements a modifier
let navbar = document.createElement("header");
let navContainer = document.createElement("div");
let logo = document.createElement("ion-icon");

logo.setAttribute("name", "clipboard-outline");
Object.assign(logo, {
  className: "logo",
});

// Manipuler les elements parents/enfants
navbar.appendChild(navContainer);
navContainer.append(logo);

// Stylisation des elements

// Navbar
navbar.style.width = "100%";
navbar.style.height = "2.5rem";
navbar.style.backgroundColor = "transparent";
navbar.style.borderRadius = "0% 0% 20% 20%";

// NavContainer
navContainer.style.width = "100%";
navContainer.style.height = "100%";
navContainer.style.display = "flex";
navContainer.style.justifyContent = "space-around";
navContainer.style.alignItems = "center";

// Logos
logo.style.background = "white";
logo.style.padding = "0.5rem";
logo.style.borderRadius = "100%";


export default navbar;
