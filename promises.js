// ES6
//promise is an operation that is going to finish in the future

const prom = new Promise((resolve, reject) => {
  //here is async
  setTimeout(() => {
    //getting data = 200
    resolve({
      user: "Asif",
      email: "asifistiaque.ai@gmail.com",
      pass: "4*TD$3$#!@#$!LS#@"
    });
    reject(new Error("Something went terribly wrong"));
  }, 2000);
})
  .then(data => {
    //.then is actually prom.then
    //run this code after data has been resolved
    console.log(data);
  })
  //run this code if the data is rejected
  .catch(err => console.log(err));
