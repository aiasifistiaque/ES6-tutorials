const list = ["mouse", "keyboard", "ram", "rom", "dvd"];

// no bracket is necessary for single line return code
const newList = list.map(item => item + " module");

// return is necessary if 3rd bracket is applied
const secondList = list.map(item => {
  return item + " speed";
});

console.log(list);
console.log(newList[2]);
console.log(secondList[2]);
