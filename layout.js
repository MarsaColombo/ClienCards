// Je stylise ici toute la page
// Je crée plusieurs sections

// Importer les variables
import navbar from "./navbar.js";
import hero from "./hero.js";

// Manipulation des elements
let body = document.body;
body.append(navbar, hero);

// Stylisation de body
body.style.width = "100%";
body.style.height = "100%";
body.style.background =
  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(99,99,99,1) 43%, rgba(1,24,52,1) 100%)";
