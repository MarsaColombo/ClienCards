// Declarer les elements a modifier
let navbar = document.createElement("header");
let navContainer = document.createElement("div");
let logo1 = document.createElement("ion-icon");
let logo2 = document.createElement("ion-icon");
let logo3 = document.createElement("ion-icon");
logo1.setAttribute("name", "accessibility-sharp");
logo2.setAttribute("name", "information-circle-outline");
logo3.setAttribute("name", "clipboard-outline");
Object.assign(logo1, logo2, logo3, {
  className: "logo",
});

// Manipuler les elements parents/enfants
navbar.appendChild(navContainer);
navContainer.append(logo1, logo2, logo3);

// Stylisation des elements

// Navbar
navbar.style.width = "100%";
navbar.style.height = "3rem";
navbar.style.backgroundColor = "gray";

navbar.style.borderRadius = "0% 0% 20% 20%";
navbar.style.boxShadow = "0px 5px 5px gray";

// NavContainer
navContainer.style.width = "100%";
navContainer.style.height = "100%";
navContainer.style.display = "flex";
navContainer.style.justifyContent = "space-around";
navContainer.style.alignItems = "center";

// Logos
const logoProrieties = {
  height: "1.5rem",
  width: "1.5rem",
};
[logo1, logo2, logo3].forEach((logo) => {
  Object.assign(logo.style, logoProrieties);
  //   Hover
  logo.addEventListener("mouseover", () => {
    Object.assign(logo.style, {
      color: "red",
    });
  });
  // UP
  logo.addEventListener("mouseout", () => {
    Object.assign(logo.style, {
      color: "",
    });
  });
  logo.addEventListener("click", () => {
    [logo1, logo2, logo3].forEach((otherLogo) => {
      if (otherLogo === logo) {
        otherLogo.classList.add("active");
      } else {
        otherLogo.classList.remove("active");
      }
    });
  });
});

export default navbar;
