// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];


function destructivelyAppendDriver(newDriver) {
  drivers.push(newDriver);
}

function destructivelyPrependDriver(newDriver) {
  drivers.unshift(newDriver);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  return newDrivers = [...drivers, name];
}

function prependDriver(name) {
  return newDrivers = [name, ...drivers];
}

function removeLastDriver() {
  return newDrivers = [...drivers.slice(0, -1)];
}

function removeFirstDriver() {
  return newDrivers = [...drivers.slice(1)]
}
