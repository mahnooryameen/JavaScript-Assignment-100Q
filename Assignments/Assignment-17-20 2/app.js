let multiArray = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];

// Iterate over the rows
for (let i = 0; i < multiArray.length; i++) {
    // Iterate over the columns
    for (let j = 0; j < multiArray[i].length; j++) {
      document.write(multiArray[i][j] + " ");
    }
    document.write("<br>");
  }
