export const getPersonajes = async() => {
    try{

        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();

        return data.results;

    }catch(error){
        console.log(`El error es: ${error}`);
    }
}