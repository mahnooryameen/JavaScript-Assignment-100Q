
    // Create a new Date object representing the current date and time
    var currentDate = new Date();

    // Get the current date as a string
    var currentDateString = currentDate.toLocaleString();

    // Get the number of milliseconds since January 1, 1970
    var elapsedMilliseconds = currentDate.getTime();

    // Calculate the elapsed minutes since January 1, 1970
    var elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60));

    // Display the current date in the browser
    var currentDateElement = document.getElementById('currentDate');
    currentDateElement.innerHTML = currentDateString;

    // Display the elapsed milliseconds in the browser
    var elapsedMillisecondsElement = document.getElementById('elapsedMilliseconds');
    elapsedMillisecondsElement.innerHTML = elapsedMilliseconds;

    // Display the elapsed minutes in the browser
    var elapsedMinutesElement = document.getElementById('elapsedMinutes');
    elapsedMinutesElement.innerHTML = elapsedMinutes;
 
