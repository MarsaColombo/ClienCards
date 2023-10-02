// Declaration des variables du main
let hero = document.createElement("main");
let clientContainer = document.createElement("div");
clientContainer.setAttribute("id", "clientContainer");

let client = document.createElement("div");
let clientImage = document.createElement("div");
let image = document.createElement("img");
let clientInfo = document.createElement("div");
let nom = document.createElement("span");
let prenom = document.createElement("span");

// Variables API

// Arborescence des elements
hero.append(clientContainer);
clientContainer.append(client);
client.append(clientImage, clientInfo);
clientImage.append(image);
clientInfo.append(nom, prenom);

// Definition des variables
nom.textContent = `Nom : Biaou`;
prenom.textContent = `Prenom : Aymeric`;

// Stylisation
// Hero
hero.style.width = "100%";
hero.style.minHeight = "100vh";
hero.style.background = "white ";
hero.style.display = "flex ";
hero.style.justifyContent = "center ";
hero.style.alignItems = "center ";

// clientContainer
clientContainer.style.minWidth = "5rem";
clientContainer.style.height = "75%";
clientContainer.style.display = "grid";
clientContainer.style.gridAutoColumns = "center";
clientContainer.style.gridTemplateColumns = "repeat(1,auto)";
clientContainer.style.gridAutoRows = "auto";
clientContainer.style.border = "solid";
clientContainer.style.padding = "2rem";
clientContainer.style.margin = "auto";

//client
client.style.gridColumn = "1 /span 1";
client.style.gridRow = "1 /span 1";

client.style.borderRadius = "25%";
client.style.padding = "1rem";
client.style.boxShadow = "17px 19px 27px 1px rgba(0,0,0,0.54)";

// ClientInfo
clientInfo.style.display = "flex";
clientInfo.style.flexDirection = "column ";
clientInfo.style.justifyContent = "center";
clientInfo.style.alignItems = "center";

// ClientImage
clientImage.style.display = "flex";
clientImage.style.justifyContent = "center";
clientImage.style.alignItems = "center";
clientImage.style.padding = "0.5rem";

image.src = "./ProfilClient.jpg";
image.style.width = "5rem";
image.style.height = "5rem";

// Exportation du fichier
export default hero;
