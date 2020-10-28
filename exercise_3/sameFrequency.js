function sameFrequency(n1, n2) {
  if (n1.toString().length !== n2.toString().length) return false;

  let objN1 = {};

  for (let digit of n1.toString()) {
    objN1[digit] = objN1[digit] + 1 || 1;
  }

  for (let digit of n2.toString()) {
    if (!objN1[digit]) {
      return false;
    } else {
      objN1[digit] -= 1;
    }
  }

  return true;

}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));