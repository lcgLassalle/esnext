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
class FreeTrip extends Trip {
    constructor(id, name, imageUrl){
    super(id, name, imageUrl);
    this.price = 0;
}
}
let testFreeTrip = new FreeTrip("nantes","Nantes", "img/nantes.jpg");
console.log(testFreeTrip.toString());
/**
 * Promises
 */

 class TripService {
    constructor() {
    let trip1 = new Trip('paris', 'Paris', 'img/paris.jpg');
    let trip2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg');
    let trip3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    /**
     * creation d'un set de trip dans le constructeur
     */
    let setTrip = new Set();
    setTrip.add(trip1);
    setTrip.add(trip2);
    setTrip.add(trip3);
    }

    findByName(tripName) {
    return new Promise((resolve, reject) => {
    setTimeout( () => {
    // ici l'exécution du code est asynchrone
    // TODO utiliser resolve et reject en fonction du résultat de la
    //recherche
    }, 2000)
    });
    }
    }

    class PriceService {
    constructor() {
    // TODO Map of 2 trips
    // 'paris' --> price == 100
    // 'rio-de-janeiro' --> price == 800)
    // no price for 'nantes'
    let mapTrip = new Map();
    mapTrip.set('paris', 100);
    mapTrip.set('rio-de-janeiro', 1000);
    }

    findPriceByTripId(tripId) {
    return new Promise((resolve, reject) => {
    setTimeout( () => {
    // ici l'exécution du code est asynchrone
    // TODO utiliser resolve et reject en fonction du résultat de
    //la recherche
    }, 2000)
    });
    }
    }