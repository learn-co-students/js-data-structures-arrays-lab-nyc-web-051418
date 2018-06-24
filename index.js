// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendDriver(name) {
  drivers.push(name); 
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name); 
}

function destructivelyRemoveLastDriver() {
  drivers.pop(); 
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(); 
}

function appendDriver(name) {
  new_drivers = drivers.slice()
  new_drivers.push(name);
  return new_drivers; 
}

function prependDriver(name) {
  new_drivers = drivers.slice()
  new_drivers.unshift(name);
  return new_drivers; 
}

function removeLastDriver(name) {
  new_drivers = drivers.slice()
  new_drivers.pop(name);
  return new_drivers; 
}

function removeFirstDriver(name) {
  new_drivers = drivers.slice()
  new_drivers.shift(name);
  return new_drivers; 
}