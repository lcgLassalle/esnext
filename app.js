let favoriteCityID ="rome";
console.log(favoriteCityID);
favoriteCityID = "paris";
console.log(favoriteCityID);

const citiesID = ["paris", "nyc","rome", "rio-de-janeiro"];
console.log(citiesID);
 /**citiesID = [];
 console.log(citiesID);
 */
let newLength = citiesID.push("tokyo");
console.log(citiesID);
/** Ajout d'itentifier (argument) dans le tableau avec le rest operator */
let [parisID, nycID, ...otherCitiesID] = citiesID;
console.log(parisID);
console.log(nycID);
/* console.log(citiesID.length);
console.log(newLength); */
console.log(otherCitiesID.length);

/** Créer un objet à partir d'une fonction */
function getWeather(cityID='paris'){
    let city = cityID;
    let temperature = 20;
    return {'city': city, 'temperature': temperature};
}
let {city} = getWeather();
let {temperature} = getWeather();

const weather = getWeather(favoriteCityID);
console.log(weather);

console.log(city);
console.log(temperature);

/**
 * Créer une classe
 */
class Trip{
    constructor(id, name, imageUrl){
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
}

toString(){
    return "Trip [" + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this._price + ']';
}

get price(){
    return this._price;
}

set price(newPrice){
    this._price = newPrice;
}

DefaultTrip() {
    let defaulttrip = new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg")
    return defaulttrip;
}
}

/**
 * Création d'un objet à partir de la classe
 */
let parisTrip = new Trip('paris', 'Paris', "img/paris.jpg");
parisTrip.price = 100;
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());

/**
 * Créer un objet Trip avec la méthode par défault DefaultTrip()
 */
let defaultTrip = new Trip().DefaultTrip();
console.log(defaultTrip);
console.log(defaultTrip.toString())

/**
 * Héritage
 */
