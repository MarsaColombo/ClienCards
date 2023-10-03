// Declaration des variables du main
let hero = document.createElement("main");
hero.setAttribute("class", "main");
let clientContainer = document.createElement("div");
clientContainer.setAttribute("class", "clientContainer");

// Arborescence des elements
hero.append(clientContainer);

async function fetchApi() {
  let userApi = await fetch("https://reqres.in/api/users?per_page=12");
  let res = await userApi.json();
  await res.data.forEach((item) => {
    createClientCard(item);
  });
  function createClientCard(user) {
    // Create a client card element
    let client = document.createElement("div");
    client.setAttribute("class", "clientCard");
    // Set the content of the client card
    client.innerHTML = `
    <button class="toogleButton" id="openButton"><ion-icon name="open-outline"></ion-icon></button>
      <button class="toogleButton" id="closeButton"><ion-icon name="close-outline"></ion-icon></button>
        <div class="imageSection">
          <img class="clientImage" src="${user.avatar}" alt="User Avatar">
        </div>
        <div class="infoSection">
        <div class="infoDiv">
          <h3 class="nomClient">${user.first_name} ${user.last_name}</h3>
          <a href="mailto:${user.id}">Email : ${user.email}</a>
          <p>ID : ${user.id}</p>
        </div>
          
    </div>`;
    // Append the client card to the document body
    clientContainer.append(client);

    // Récupérer les boutons de bascule
    let openButton = client.querySelector("#openButton");
    let closeButton = client.querySelector("#closeButton");

    // Ajouter un gestionnaire d'événement pour ouvrir la carte agrandie
    openButton.addEventListener("click", () => {
      client.classList.add("enGrand");
      openButton.style.display = "none";
      closeButton.style.display = "block";
    });

    // Ajouter un gestionnaire d'événement pour fermer la carte agrandie
    closeButton.addEventListener("click", () => {
      client.classList.remove("enGrand");
      closeButton.style.display = "none";
      openButton.style.display = "block";
    });
  }
}
fetchApi();

export default hero;
