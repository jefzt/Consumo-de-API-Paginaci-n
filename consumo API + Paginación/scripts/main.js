import { obtenerPersonajes } from "./service.js";
import { renderPersonajes, renderPagina, mostrarCarga, mostrarError } from "./ui.js";
import { state } from "./state.js";

const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const btnFirst = document.getElementById("first");
const btnLast = document.getElementById("last");
const selectLimit = document.getElementById("limit");

async function cargarDatos() {
    try {
        mostrarCarga();

        const data = await obtenerPersonajes(state.page);

        state.totalPages = data.info.pages;

        renderPersonajes(data.results, state.limit);
        renderPagina(state.page, state.totalPages);

    } catch {
        mostrarError();
    }
}

btnNext.addEventListener("click", () => {
    if (state.page < state.totalPages) {
        state.page++;
        cargarDatos();
    }
});

btnPrev.addEventListener("click", () => {
    if (state.page > 1) {
        state.page--;
        cargarDatos();
    }
});

btnFirst.addEventListener("click", () => {
    state.page = 1;
    cargarDatos();
});

btnLast.addEventListener("click", () => {
    state.page = state.totalPages;
    cargarDatos();
});

selectLimit.addEventListener("change", (e) => {
    state.limit = parseInt(e.target.value);
    cargarDatos();
});


cargarDatos();