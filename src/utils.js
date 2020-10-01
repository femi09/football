export const formatDate = (utcDate) => {
  let date = new Date(utcDate);

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let formatted_date = `${days[date.getDay()]}, ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;

  return formatted_date;
};

export const formatMatchTime = (utcDate) => {
  let date = new Date(utcDate);
  let minutes = date.getMinutes();
  let newMin = minutes.toString().length === 2 ? minutes : minutes + "0";

  let formatted_time = `${date.getHours()}:${newMin}`;

  return formatted_time;
};

export const formatCurrentDate = (date) => {
  const months = [
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

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formatted_date = `${days[date.getDay()]}, ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} `;

  return formatted_date;
};


export const formatFixturesDate = (utcDate) => {
  let date = new Date(utcDate);
  const months = [
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
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formatted_date = `${days[date.getDay()]}, ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} `;

  return formatted_date;
};


export const formatDay = (utcDate) => {
  const day = new Date(utcDate)
  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const date = day.getDate();
  
  const formatDate = year + "-" + month + "-" + date;
  return formatDate
}

export const truncateTeamName = (str) => {
  if (str === "Manchester United") {
    return "Man United";
  } else if (str === "Manchester City") {
    return "Man City";
  } else if (str === "Crystal Palace") {
    return "C.Palace";
  } 
   else {
    return str;
  }
};
