let date = new Date();
let currentCalendar = new Date();

monthData = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function renderCalendar() {
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  let prevlastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  document.getElementById("todayMonth").innerHTML = monthData[date.getMonth()];
  if (date.getMonth() == currentCalendar.getMonth()) {
    document.getElementById("todayDate").innerHTML = date.toDateString();
  }
  let cells = "";
  for (let i = firstDay.getDay(); i > 0; i--) {
    cells += `<li class="prev">${prevlastDay - i}</li>`;
  }
  for (let i = 1; i <= lastDay.getDate(); i++) {
    if (
      i == currentCalendar.getDate() &&
      date.getMonth() == currentCalendar.getMonth()
    ) {
      cells += `<li class="today">${i}</li>`;
    } else {
      cells += `<li>${i}</li>`;
    }
  }
  document.getElementById("dates").innerHTML = cells;
}

function moveCalendar(para) {
  if (para == "prev") {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  }
  if (para == "next") {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  }
}
