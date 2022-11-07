var pokemonActual=0;
const mostrarPokemon = () => {
    const nombrePokemonInput = document.getElementById("nombre-pokemon");
    let nombrePokemon = nombrePokemonInput.value;
    nombrePokemon = nombrePokemon.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    peticionAPI(url);
}

const peticionAPI = (url) => {
    fetch(url).then((res) => {
        if (res.status != "200") {
            cambiarImagen("../src/pokemon-sad.gif")
            cambiarNombre("COULD NOT BE FOUND") 
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let urlImagenPokemon = data.sprites.front_default;
            cambiarImagen(urlImagenPokemon);
            let codigoPokemon = data.id;
            pokemonActual = codigoPokemon; 
            let nombrePokemon = data.name;
            nombrePokemon = nombrePokemon.toUpperCase();
            let datoPokemon = `#${codigoPokemon} - ${nombrePokemon}`
            cambiarNombre(datoPokemon);
            let habilidadesPokemon = data.abilities;
            cambiarHabilidades(habilidadesPokemon);
            let movimientosPokemon = data.moves;
            cambiarMovimientos(movimientosPokemon);
            let tipoPokemon = data.types;
            cambiarTipo(tipoPokemon);
            let alturaPokemon = data.height;
            cambiarAltura(alturaPokemon);
            let pesoPokemon = data.weight;
            cambiarPeso(pesoPokemon);
        }
    });
}

const cambiarImagen = (url) => {
    const imagenPokemon = document.getElementById("imagen-pokemon");
    imagenPokemon.src = url;
}
const cambiarNombre = (nombre) => {
    const nombrePokemon = document.getElementById("codigo-nombre-pokemon");
    nombrePokemon.innerHTML = nombre;
}
const cambiarAltura = (altura) => {
    const alturaPokemon = document.getElementById("altura");
    alturaPokemon.innerHTML = `${(altura/10)} M`;
}
const cambiarPeso = (peso) => {
    const pesoPokemon = document.getElementById("peso");
    pesoPokemon.innerHTML = `${(peso/10)} KG`;
}
const siguientePokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonActual+1}`;
    peticionAPI(url);
}
const anteriorPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonActual-1}`;
    peticionAPI(url);
}

const cambiarTipo = (tipo) => {
    const tipoPokemon = document.getElementById("tipo");
    const nombreTipo = tipo.map(item => item.type.name);
    tipoPokemon.innerHTML="";
    nombreTipo.forEach((el) => {
        const $li = document.createElement("li");
        $li.textContent = el.toUpperCase();
        tipoPokemon.appendChild($li);
    });
}

const cambiarHabilidades = (habilidades) => {
    const habilidadesPokemon = document.getElementById("habilidades");
    const nombresHabilidades = habilidades.map(item => item.ability.name);
    habilidadesPokemon.innerHTML="";
    nombresHabilidades.forEach((el) => {
        const $li = document.createElement("li");
        $li.textContent = el.toUpperCase();
        habilidadesPokemon.appendChild($li);
    });
}

const cambiarMovimientos = (movimientos) => {
    const movimientosPokemon = document.getElementById("movimientos");
    const nombresMovimientos = movimientos.map(item => item.move.name);
    movimientosPokemon.innerHTML="";
    nombresMovimientos.forEach((el) => {
        const $li = document.createElement("li");
        $li.textContent = el.toUpperCase();
        movimientosPokemon.appendChild($li);
    });
}

