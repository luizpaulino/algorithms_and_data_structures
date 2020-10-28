function areThereDuplicates() {
  if (arguments.length < 1) return false;

  let objArgs = {};
  for (let arg in arguments) {
    if (objArgs[arguments[arg]]) {
      return true;
    }

    objArgs[arguments[arg]] = 1;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))
console.log(areThereDuplicates())