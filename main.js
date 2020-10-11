let startingDate = new Date("Sep 2, 2020 18:14:00").getTime();

let addingSeconds = setInterval(function () {
  let now = new Date().getTime();

  let timeDistance = now - startingDate;

  let days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
