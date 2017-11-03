// Creating variables for today's sunrise and sunset
  var sunrise = '2017-11-01 07:29:49';
  var sunset = '2017-11-01 16:34:09';

// Generating timestamps for the times
  var sunriseTimestamp = (moment(sunrise).unix())*1000;
  var sunsetTimestamp = (moment(sunset).unix())*1000;
  var curTimestamp = Date.now();

// Calculating the difference in seconds between today's sunrise and sunset
  var t1 = new Date(sunset);
  var t2 = new Date(sunrise);
  var dif = t1.getTime() - t2.getTime();

  var secondsBetween = dif / 1000;

  console.log('Seconds between: ' + secondsBetween);

// Setting the total time of the day and calculating the time left
  var totalTime = Math.abs(secondsBetween);
  var timeLeft = countdown(sunsetTimestamp, null, countdown.SECONDS).toString().split(' ')[0];

  function percentage() {

    // Subtracting 1 from the timeLeft variable
      timeLeft = timeLeft - 1;
      console.log('Time left: ' + timeLeft);

    // Calculating the percentage of spent daylight

    if (curTimestamp > sunsetTimestamp) {
      
      var percentage = 100;

    } else {

      var percentage = 1-(timeLeft/totalTime);
      var percentage = percentage*100;

    };

      console.log('Percentage: ' + percentage);

      document.getElementById("night").style.width = percentage+'%';

  };

/*
  var count = moment("1754", "hhmm").fromNow();
  document.write(count + '<br><br>');
*/