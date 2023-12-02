window.addEventListener("load", () => {    
    
    let urlParams = new URLSearchParams(window.location.search);
    let modelo = null;
    let computadora = null;
    
    fetch("./json/computadoras.json")
    .then((response) => response.json() )
    .then((json) => {

        try { modelo = urlParams.get("modelo"); }
        catch(e) { console.log(e) }
        // console.log(modelo);

        let found = false;
        let i = 0;
        while(!found && i < json.length) {
            if(json[i].modelo.toLowerCase() === modelo.toLowerCase()) {
                found = true;
                computadora = json[i];
            }
            i++;
        }

        let container = document.createElement("div");
        container.classList.add("text-center");

        if(modelo && computadora) {
            let compType = computadora.tipo === "Escritorio" ? "desktop" : "laptop";

            let image = document.createElement("img");
            image.src = "/img/"+compType+"/"+computadora.imagen;
            container.appendChild(image);

            let model = document.createElement("h2");
            model.innerHTML = computadora.modelo;
            container.appendChild(model);

            let processor = document.createElement("p");
            processor.innerHTML = "<strong>Procesador:</strong>&nbsp;"+computadora.procesador;
            container.appendChild(processor);

            let memory = document.createElement("p");
            memory.innerHTML = "<strong>Memoria RAM:</strong>&nbsp;"+computadora.memoria+"GB";
            container.appendChild(memory);

            let diskType = document.createElement("p");
            diskType.innerHTML = "<strong>Tipo de disco:</strong>&nbsp;"+computadora.tipoDisco;
            container.appendChild(diskType);

            let diskSize = document.createElement("p");
            let diskSizeString = "<strong>Almacenamiento:</strong>&nbsp;"+computadora.capacidadDisco;
            if(computadora.capacidadDisco < 100)
                diskSizeString += "TB";
            else
                diskSizeString += "GB";
            diskSize.innerHTML = diskSizeString;
            container.appendChild(diskSize);

            let priceARS = document.createElement("h4");
            priceARS.innerHTML = "ARS $"+computadora.precioARS;
            container.appendChild(priceARS);

            let priceUSD = document.createElement("h4");
            priceUSD.innerHTML = "USD $"+computadora.precioUSD;
            container.appendChild(priceUSD);

            let descriptionHeading = document.createElement("h3");
            descriptionHeading.innerHTML = "Descripción:";
            container.appendChild(descriptionHeading);

            let description = document.createElement("p");
            description.innerHTML = computadora.descripcion;
            container.appendChild(description);
        }
        else {    
            let notFound = document.createElement("h2");
            notFound.innerHTML = "No se ha encontrado la computadora.";
            container.appendChild(notFound);
    
            let goBack = document.createElement("a");
            goBack.href = "computadoras.html";
            goBack.innerHTML = "<< Volver al catálogo";
            container.appendChild(goBack);
        }

        document.querySelector("#main").appendChild(container);
    });

});