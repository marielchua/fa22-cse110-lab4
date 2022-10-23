//Given the following object:
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    racecars: 5,
    blackCars : 40,
    rareCars: 2
}

//For-loop to iterate through properties and print the value if the property starts with the letter r, or if its value is odd
for(const property in statistics){
    if(property[0] === 'r'){
        console.log(statistics[property]);
    }
    else if((statistics[property] % 2) !== 0){
        console.log(statistics[property]);
    }
}
