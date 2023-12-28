var sentence = "The quick brown fox jumps over the lazy dog";
  var wordToCount = "the";
  var count = 0;

  // Convert the sentence and word to lowercase for case-insensitive matching
  var lowercaseSentence = sentence.toLowerCase();
  var lowercaseWord = wordToCount.toLowerCase();

  // Split the sentence into an array of words
  var words = lowercaseSentence.split(" ");

  // Count the occurrences of the word
  for (var i = 0; i < words.length; i++) {
    if (words[i] === lowercaseWord) {
      count++;
    }
  }

  document.write("Number of occurrences of the word 'the': " + count);