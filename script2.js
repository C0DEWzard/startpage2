var span = document.getElementById('timeofday');

function dayTime() {

  var d = new Date();

  var hour = d.getHours();

  if (hour < 12) {
    greeting = "Good Morning";
  }

  if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon";
  }

  if (hour >= 18) {
    greeting = "Good Evening";
  }

  span.textContent = greeting;
}

  setInterval(time, 1);
