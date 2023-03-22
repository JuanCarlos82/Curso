const URL_API = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

export async function getSuperHeroes(){
    try{
        const respuesta = await fetch(URL_API);
        const data = await respuesta.json();
        return data;
    }
    catch (err){
        console.log(err);
    }
}
