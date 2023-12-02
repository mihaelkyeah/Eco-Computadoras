let escritorio = [];
let laptops = [];

fetch("./json/computadoras.json")
.then((response) => response.json() )
.then((json) => {
    // Sort JSON data
    json.forEach(computadora => {
        if(computadora.tipo.toLowerCase() === "escritorio")
            escritorio.push(computadora);
        else
            laptops.push(computadora);
    });

    // Append children (desktop computers)
    escritorio.forEach(computadora => {
        appendComputer(computadora, "desktop", "#computergrid-desktop");
    });

    // Append children (laptops)
    laptops.forEach(computadora => {
        appendComputer(computadora, "laptop", "#computergrid-laptop");
    });
});

function appendComputer(computer, compType, computerGridDivID) {
    let computerCard = document.createElement("div");
    computerCard.classList.add("computer-card");

    let image = document.createElement("img");
    image.src = "/img/"+compType+"/"+computer.imagen;
    computerCard.appendChild(image);

    let model = document.createElement("h2");
    model.innerHTML = computer.modelo;
    computerCard.appendChild(model);

    let processor = document.createElement("p");
    processor.innerHTML = "<strong>Procesador:</strong>&nbsp;"+computer.procesador;
    computerCard.appendChild(processor);

    let memory = document.createElement("p");
    memory.innerHTML = "<strong>Memoria RAM:</strong>&nbsp;"+computer.memoria+"GB";
    computerCard.appendChild(memory);

    let diskType = document.createElement("p");
    diskType.innerHTML = "<strong>Tipo de disco:</strong>&nbsp;"+computer.tipoDisco;
    computerCard.appendChild(diskType);

    let diskSize = document.createElement("p");
    let diskSizeString = "<strong>Almacenamiento:</strong>&nbsp;"+computer.capacidadDisco;
    if(computer.capacidadDisco < 100)
        diskSizeString += "TB";
    else
        diskSizeString += "GB";
    diskSize.innerHTML = diskSizeString;
    computerCard.appendChild(diskSize);

    let priceARS = document.createElement("h4");
    priceARS.innerHTML = "ARS $"+computer.precioARS;
    computerCard.appendChild(priceARS);

    let priceUSD = document.createElement("h4");
    priceUSD.innerHTML = "USD $"+computer.precioUSD;
    computerCard.appendChild(priceUSD);

    let seeMore = document.createElement("a");
    seeMore.href = "detalle.html?modelo="+computer.modelo;
    seeMore.innerHTML = "Ver Más >";
    computerCard.appendChild(seeMore);

    document.querySelector(computerGridDivID).appendChild(computerCard);
}