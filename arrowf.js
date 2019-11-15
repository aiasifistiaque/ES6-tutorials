function sayName() {
  console.log("My name is asif");
}

var sayAge = function() {
  console.log("My age is bla bla");
};

const sayLocation = () => {
  console.log("My location is Dhaka");
};

const sayCity = city => console.log(`My city is ${city}`);

const sayArea = (city, area) => {
  console.log(`My city is ${city} and area is ${area}`);
};

sayName();
sayAge();
sayLocation();
sayCity("Comilla");
sayArea("Dhaka", "Mohammadpur");
