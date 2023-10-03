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
  "linear-gradient(to top, #7f7fd5, #86a8e7, #91eae4)"; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
