// Array para guardar la lista de amigos
let amigos = [];

// Función para añadir un nuevo amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let nombre = document.getElementById("amigo").value.trim();

    // Validación de la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualiza el array de amigos
    amigos.push(nombre);

    // Limpia el campo de entrada
    document.getElementById("amigo").value = "";

    // Actualiza la lista de amigos en pantalla
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    // Obtiene el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpia la lista existente
    lista.innerHTML = "";

    // Itera sobre el arreglo de amigos
    amigos.forEach((amigo, index) => {
        // Crea un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = amigo;
        item.classList.add("name-item");

        // Agrega el elemento a la lista
        lista.appendChild(item);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    // Valida que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Genera un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtiene el nombre sorteado
    let nombreSorteado = amigos[indiceAleatorio];

    // Muestra el resultado del sorteo
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="result-item">¡El amigo secreto es: ${nombreSorteado}!</li>`;
}