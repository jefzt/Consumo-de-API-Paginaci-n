export function renderPersonajes(personajes, limit) {

    const container = document.getElementById("container");
    container.innerHTML = "";

    personajes.slice(0, limit).forEach(p => {
        container.innerHTML += `
            <div class="card">
                <img src="${p.image}">
                <h3>${p.name}</h3>
            </div>
        `;
    });
}

export function renderPagina(page, total) {
    document.getElementById("info").textContent =
        `Página ${page} de ${total}`;
}

export function mostrarCarga() {
    document.getElementById("container").innerHTML = "Cargando...";
}

export function mostrarError() {
    document.getElementById("container").innerHTML = "Error al cargar";
}