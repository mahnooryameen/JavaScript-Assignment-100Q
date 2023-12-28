/*var n=

alert("You have visited this site " + n + " times");  */

   // Retrieve the number of visits from local storage
      var visitCount = localStorage.getItem('visitCount');
      
      // Check if the visit count exists in local storage
      if (visitCount) {
        visitCount = parseInt(visitCount) + 1;
      } else {
        visitCount = 1;
      }
      
      // Save the updated visit count to local storage
      localStorage.setItem('visitCount', visitCount);
      
      // Display the visit count on the web page
      window.onload = function() {
        document.getElementById('visitCounter').textContent = "You have visited this site " + visitCount + " times.";
      };