
    // Function to update the date and time
    function updateDateTime() {
      // Get the current date and time
      var currentDateTime = new Date();

      // Format the date and time
      var options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric' 
      };
      var formattedDateTime = currentDateTime.toLocaleString('en-US', options);

      // Set the formatted date and time directly in the HTML
      document.body.innerHTML = '<h1>' + formattedDateTime + '</h1>';
    }

    // Call the updateDateTime function to display the initial date and time
    updateDateTime();

    // Update the date and time every second
    setInterval(updateDateTime, 1000);

