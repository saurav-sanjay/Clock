function callForCurrentTime() {
  //Currently in 24 Hr format
  const timeContainer = document.getElementById("timeContainer");
  const toggleBtn = document.getElementById("toggleBtn");
  const dateToday = document.getElementById("dateToday");
  toggleBtn.addEventListener("change", toogleFormat);
  var date = new Date();
  var timeFormat = getTimeFormat();
  console.log(timeFormat);
  let hours = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let month = whichMonth(date.getMonth());
  let day = date.getDate().toString().padStart(2, "0");
  let meridiem = undefined;
  if (timeFormat === "12") {
    // if AM or PM
    if (hours > 12) {
      meridiem = "PM";
    } else {
      meridiem = "AM";
    }
    hours %= 12;
  } else {
    toggleBtn.checked = true;
  }

  // Fromatting
  hours = hours.toString().padStart(2, "0");
  minute = minute.toString().padStart(2, "0");
  second = second.toString().padStart(2, "0");

  let currentTime =
    hours + " : " + minute + " : " + second + " " + (meridiem ? meridiem : "");
  let currentDate = day + " " + month;
  timeContainer.innerText = "";
  timeContainer.innerText = currentTime;
  dateToday.innerText = currentDate;
}
setInterval(callForCurrentTime, 1000);

function getTimeFormat() {
  // return if time_format is 12hrs or 24hrs
  if (!window.localStorage.getItem("time_format")) {
    window.localStorage.setItem("time_format", "12");
  }
  return window.localStorage.getItem("time_format");
}

function toogleFormat() {
  if (window.localStorage.getItem("time_format") === "12") {
    window.localStorage.setItem("time_format", "24");
  } else {
    window.localStorage.setItem("time_format", "12");
  }
}

function whichMonth(monthInNumber) {
  switch (monthInNumber) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
}
