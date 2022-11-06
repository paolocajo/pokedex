const mostrarPokemon = () => {
    const nombrePokemonInput = document.getElementById("nombre-pokemon");
    let nombrePokemon = nombrePokemonInput.value;
    nombrePokemon = nombrePokemon.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
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
            let nombrePokemon = data.name;
            nombrePokemon = nombrePokemon.toUpperCase();
            let datoPokemon = `#${codigoPokemon} - ${nombrePokemon}`
            cambiarNombre(datoPokemon);
            console.log(datoPokemon);
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