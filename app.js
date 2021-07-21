let favoriteCityID = "rome";
console.log(favoriteCityID);
favoriteCityID = "paris";
console.log(favoriteCityID);

const citiesID = ["paris", "nyc", "rome", "rio-de-janeiro"];
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
function getWeather(cityID = 'paris') {
    let city = cityID;
    let temperature = 20;
    return { 'city': city, 'temperature': temperature };
}
let { city } = getWeather();
let { temperature } = getWeather();

const weather = getWeather(favoriteCityID);
console.log(weather);

console.log(city);
console.log(temperature);

/**
 * Créer une classe
 */
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return "Trip [" + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this._price + ']';
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
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
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this.price = 0;
    }
}
let testFreeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
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
        this.setTrip = new Set();
        this.setTrip.add(trip1);
        this.setTrip.add(trip2);
        this.setTrip.add(trip3);
    }

    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la
                // recherche
                let soluce = "err";
                let foundTrip = null;
                //console.log(tripName);
                this.setTrip.forEach(element => {
                    //console.log(element.name);
                    if (element.name === tripName) {
                        soluce = tripName;
                        foundTrip = element;
                        return;
                    }
                });
                if (soluce == "err") {
                    reject(tripName)
                    // en cas d'erreur
                } else {
                    resolve(foundTrip)
                }  // en cas de succès
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
        let trip1 = new Trip('paris', 'Paris', 'img/paris.jpg');
        let trip3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');

        this.mapTrip = new Map();
        trip1.price = 100;
        trip3.price = 800;
        this.mapTrip.set('paris', trip1);
        this.mapTrip.set('rio-de-janeiro', trip3);
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de
                //la recherche
                //console.log(tripId)
                let soluce = "err";
                let foundTrip = null;
                this.mapTrip.forEach(elementId => {
                    //console.log(elementId);
                    if (elementId.id === tripId) {
                        soluce = tripId;
                        foundTrip = elementId;
                        return;
                    }
                });
                if (soluce == "err") {
                    console.log(tripId);
                    reject(tripId);
                    // en cas d'erreur
                } else {
                    resolve(foundTrip);
                }  // en cas de succès
            }, 2000)
        });
    }
}

/**
 * creer des instances de TripService et PriceService
 */

let priceService = new PriceService();
let tripService = new TripService();
/**
 * recherche de trip pour Paris
 */

tripService.findByName("Paris").then((data) => console.log("Trip found: " + data.toString()), (erreur) => console.log("No trip found for: " + erreur));

/**
 * recherche de trip pour Toulouse
 */

tripService.findByName("Toulouse").then((data) => console.log("Trip found: " + data.toString()), (erreur) => console.log("No trip found for: " + erreur));

/**
 * chainer les services pour truver le prix du voyage rio de janeiro
 */
tripService.findByName('Rio de Janeiro').then(
    (result1) => {
        priceService.findPriceByTripId(result1.id).then((result2) =>
            console.log("Price found for " + result2.name + ": " + result2.price), 
            (erreur) => console.log("No price found for Id trip " + erreur)
        );
    }
);

/**
 * chainer les services pour truver le prix du voyage Nantes
 */
tripService.findByName('Nantes').then(
    (result1) => {
        priceService.findPriceByTripId(result1.id).then((result2) => 
            console.log("Price found for " + result2.name + ": " + result2.price), 
            (erreur) => console.log("No price found for Id trip " + erreur)
        );
    }
).catch((erreur)=> console.log(erreur));//utiliser pour vérifier ou peut se situer l'erreur à l'interieur de la première arrow function.