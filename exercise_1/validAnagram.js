//Frequency Counter

function validAnagram(word1, word2) {

  if (word1.length !== word2.length) {
    return false;
  }

  if (word1 === word2) {
    return true;
  }

  objWord1 = {};
  objWord2 = {};

  for (leter of word1) {
    objWord1[leter] = (objWord1[leter] || 0) + 1;
  }

  for (leter of word2) {
    objWord2[leter] = (objWord2[leter] || 0) + 1;
  }

  for (leter in objWord1) {
    if (objWord2[leter] !== objWord1[leter]) {
      return false;
    }
  }

  return true;

}


console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesine', 'awsom'));
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
