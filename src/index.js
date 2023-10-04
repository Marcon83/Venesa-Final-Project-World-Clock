function updateTime() {
  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");

    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Denver
  let denverElement = document.querySelector("#denver");
  if (denverElement) {
    let denverDateElement = denverElement.querySelector(".date");
    let denverTimeElement = denverElement.querySelector(".time");
    let denverTime = moment().tz("America/Denver");

    denverDateElement.innerHTML = denverTime.format("MMMM Do YYYY");

    denverTimeElement.innerHTML = denverTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Fiji
  let fijiElement = document.querySelector("#fiji");
  if (fijiElement) {
    let fijiDateElement = fijiElement.querySelector(".date");
    let fijiTimeElement = fijiElement.querySelector(".time");
    let fijiTime = moment().tz("Pacific/Fiji");

    fijiDateElement.innerHTML = fijiTime.format("MMMM Do YYYY");

    fijiTimeElement.innerHTML = fijiTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
</div>
<a href="index.html">All cities</a>
`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
