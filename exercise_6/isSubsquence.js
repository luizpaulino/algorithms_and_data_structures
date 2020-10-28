function isSubsequence(wordOne, wordTwo) {
  if (wordOne.length < 1 || wordTwo.length < 1) return false;

  i = 0;
  j = 0;

  while (i < wordOne.length) {
    if (wordOne[i] === wordTwo[j]) {
      i++;
      j++;
    }
  }

  //parei por aqui, não consegui concluir.
}
