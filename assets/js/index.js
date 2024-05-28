import { getPersonajes } from "./peticiones/getPersonajes.js";

const enviarDatos = (id , name , image , species , status , nameLocation) => {

    const archivoHTML = "../personaje.html";

    fetch(archivoHTML)
        .then(response => response.text())
        .then( ( html )=> {


            const parser = new DOMParser();
            const doc = parser.parseFromString(html,"text/html");

            const imagePage = doc.getElementById("imagePage");
            imagePage.src = image;
            imagePage.alt = `Imagen de ${name}`;
            imagePage.classList.add("card-img-top");

            const titlePage = doc.getElementById("titlePage");
            titlePage.textContent = `Nombre : ${name}`;

            const subTitlePage = doc.getElementById("subTitlePage");
            subTitlePage.textContent = `Especie : ${species}`;

            const subTitlePage2 = doc.getElementById("subTitlePage2");
            subTitlePage2.textContent = status;

            const nLocationPage = doc.getElementById("nLocationPage");
            nLocationPage.textContent = nameLocation;

            const nuevoHTML = new XMLSerializer().serializeToString(doc);

            document.body.innerHTML = nuevoHTML;

        })


}

const crearCards = ( results = [] ) => {

    let personajesRow = document.getElementById("personajesRow");

    results.map((result) => {
        const { id , name , image , species , status , location } = result;
        const { name : nameLocation } = location;

        const divCol = document.createElement("div");
        divCol.classList.add("col-xl-3");
        divCol.classList.add("col-lg-3");
        divCol.classList.add("col-md-3");
        divCol.classList.add("col-sm-12");
        divCol.classList.add("col-xs-12");
        divCol.classList.add("mt-2");
        divCol.classList.add("mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src= image;
        img.alt = `Imagen de ${name}`;
        img.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("text-title");
        title.textContent = `Nombre : ${name}`;

        const subTitle = document.createElement("p");
        subTitle.classList.add("text-title");
        subTitle.textContent = `Especie : ${species}`;

        const subTitle2 = document.createElement("p");
        subTitle2.classList.add("text-title");
        subTitle2.textContent = `Status : ${status}`;

        const nLocation = document.createElement("p");
        nLocation.classList.add("text-title");
        nLocation.textContent = `Localización : ${nameLocation}`;

        const btnVer = document.createElement("button");
        btnVer.classList.add("btn","btn-success");
        btnVer.textContent = "Ver más";
        btnVer.addEventListener("click", ()=> {
            enviarDatos(id , name , image , species , status , nameLocation);
        });

        divCol.appendChild(card);

        card.appendChild(img);
        card.appendChild(divBody);

        divBody.appendChild(title);
        divBody.appendChild(subTitle);
        divBody.appendChild(subTitle2);
        divBody.appendChild(nLocation);
        divBody.appendChild(btnVer);

        personajesRow.appendChild(divCol);
    })
}
getPersonajes()
    .then( data => crearCards(data))
    .catch( error => console.log(`El error es: ${error}`))