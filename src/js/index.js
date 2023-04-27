const listSelectionPokemon = document.querySelectorAll('.pokemon');

const cardPokemons = document.querySelectorAll('.card-pokemon');


listSelectionPokemon.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        console.log(pokemon)

        const cardPokemonOpened = document.querySelector('.opened')
        cardPokemonOpened.classList.remove('opened')


        const selectedPokemonId = pokemon.attributes.id.value

        const idFromCardPokemonForOpen = 'card-' + selectedPokemonId 
        
        const cardPokemonForOpen = document.getElementById(idFromCardPokemonForOpen)
        cardPokemonForOpen.classList.add('opened')

        const listPokemonActive = document.querySelector('.active')
        listPokemonActive.classList.remove('active')

        const selectedPokemonInList = document.getElementById(selectedPokemonId)
        selectedPokemonInList.classList.add('active')
    

    })
})