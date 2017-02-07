<script type="text/javascript">
function getSleepHours(day) {
  var hours = prompt('How many hours did you sleep on ' + day + '?');
  return Number(hours);
  var day = ['Monday','Tuesday','Wednsday','Thursday','Friday','Saturday','Sunday'];
}

function getActualSleepHours () {

  return getSleepHours('Monday')
  + getSleepHours('Tuesday') +
  getSleepHours('Wednsday') +
  getSleepHours ('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');
}

function getIdealSleepHours() {
  var idealSleep = prompt('How many hours of sleep per night is ideal to you?');
  return Number(idealSleep)*7;
}

function calculateSleepDebt () {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log ('You achieved the perfect amount of sleep, congratulations!!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You slept ' + (actualSleepHours - idealSleepHours) + ' hours more than you needed this week.');
    console.log('You have gotten more sleep than necessary.. daylights burning!!');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You slept ' + (actualSleepHours - idealSleepHours) + ' hours less than you needed this week.');
    console.log('You haven\'t had enough sleep.. try and get some rest.');
  }
}

calculateSleepDebt();
</script>
