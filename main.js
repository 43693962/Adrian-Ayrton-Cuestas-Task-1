let sectionCard = document.getElementById("sectionCard")



console.log([sectionCard])


function cardsHome(events) {
    return `<div class="card d-flex flex-column mb-3 justify-content-center align-items-center m-2" style="width: 30rem;">
            <img src=${events.image} class="card-img-top p-2" alt="Feria">
            <div class="card-body d-flex flex-column align-items-center">
            <h5 class="card-title">${events.name}</h5>
            <p class="card-text text-center"> ${events.description}</p>
            <h6 class="card-text">price: ${events.price}</h6>
            <a href="./assets/pages/details.html" class="btn btn-primary">Details</a>
    </div>`
}
function listaCard (lista, donde){
    let template = ``
    for (let elemento of lista) {
        template += cardsHome (elemento)

    }
    donde.innerHTML = template
}
listaCard (data.events, sectionCard )