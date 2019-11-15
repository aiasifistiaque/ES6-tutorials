// Old JavaScript way

function Student(name, id, dept) {
  this.name = name;
  this.id = id;
  this.dept = dept;
}

Student.prototype.sayName = function() {
  console.log(`Name is ${this.name}`);
};

function Csstudent(name, id, dept, language, favourites) {
  Student.call(this, name, id, dept);
  this.language = language;
  this.favourites = favourites;
}

Csstudent.prototype = Object.create(Student.prototype);

const studentOne = new Student("Asif", "13101122", "CS");
const studentTwo = new Csstudent(
  "Istiaque",
  "19141039",
  "CSE",
  "JavaScript",
  "Node.js"
);
//studentOne.sayName();

//studentTwo.sayName();

// ES6 way

class StartUp {
  constructor(name, members) {
    this.name = name;
    this.members = members;
  }
  sayName() {
    console.log(`The name of this startup is ${this.name}`);
  }
}

//extending function

class Funded extends StartUp {
  constructor(name, members, fundedBy, amount) {
    super(name, members);
    this.fundedBy = fundedBy;
    this.amount = amount;
  }
}

const ace = new Funded("ACE tech limited", 2, "GPA", "10 lac");
ace.sayName();
