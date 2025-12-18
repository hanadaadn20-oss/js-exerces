let car = {
   name: "hanad",
   model: "harrier",
   year: 2020,
   start: function() {
    console.log("the car has been started", this.name) 
   }

}
console.log(car.start())
console.log(car)
console.log(car["model"])
console.log(car["year"])
console.log(car["make"])
