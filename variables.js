let counter = 10;

var names = ["asif", "duti", "istiaque"];

counter = 5;

// let variables are bracket scoped
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// var variables are not bracket scoped
for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
