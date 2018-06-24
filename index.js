const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver (name) {
  drivers.splice(3, 0, name);
}

function destructivelyPrependDriver (name) {
  drivers.splice(0, 0, name);
}

function destructivelyRemoveLastDriver (name) {
  drivers.splice(2, 1);
}

function destructivelyRemoveFirstDriver (name) {
  drivers.splice(0, 1);
}

function appendDriver (name) {
  return [...drivers, name];
}

function prependDriver (name) {
  return [name, ...drivers];
}

function removeLastDriver () {
  return drivers.slice(0, drivers.length-1)
}

function removeFirstDriver () {
  return drivers.slice(1)
}
