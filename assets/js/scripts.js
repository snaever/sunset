// Creating variables for today's sunrise and sunset
  var sunrise = '2017-10-26 08:12:29';
  var sunset = '2017-10-26 17:52:06';

// Generating timestamps for the times
  var sunriseTimestamp = (moment('2017-10-26 08:12:29').unix())*1000;
  var sunsetTimestamp = (moment('2017-10-26 17:52:06').unix())*1000;

// Calculating the difference in seconds between today's sunrise and sunset
  var t1 = new Date(sunset);
  var t2 = new Date(sunrise);
  var dif = t1.getTime() - t2.getTime();

  var secondsBetween = dif / 1000;

  console.log('Seconds between: ' + secondsBetween);

  var totalTime = Math.abs(secondsBetween);
  var timeLeft = countdown(sunsetTimestamp, null, countdown.SECONDS);

  console.log('Time left: ' + timeLeft);

  var percentage = 1 - (timeLeft/totalTime);

  console.log('Percentage: ' + percentage);

/*
  var count = moment("1754", "hhmm").fromNow();
  document.write(count + '<br><br>');
*/