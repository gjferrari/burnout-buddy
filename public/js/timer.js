console.log('hello');

const timer = document.querySelector('#timer');

// will need to link different timers to the activity

function activityTime() {

var timeLeft = 300 // 5 min timer 

var minutes = parseInt((timeLeft % 3600) / 60);
var seconds = parseInt(timeLeft % 60);

    // let timerContent = ''
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      console.log(timeLeft);
      timer.textContent = timeLeft;
      if (timeLeft > 1) {
        // Set timerContent to show the remaining seconds
        // timerContent= timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        // timerContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerContent` to an empty string
        // timerContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        activityPage();
      }
    }, 1000);

// function to bring us to the finished activity page
function activityPage () {
    if(timeLeft === 0){
      console.log('working!')
      var queryString = '/finishedactivity';

      location.assign(queryString);
    }
}

}

activityTime();