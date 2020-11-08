export const truncateTeamName = (str) => {
  if (str === "Manchester United") {
    return "Man United";
  } else if (str === "Manchester City") {
    return "Man City";
  } else if (str === "Crystal Palace") {
    return "C.Palace";
  } else if (str === "Sheffield Utd") {
    return "Sheffield";
  } else {
    return str;
  }
};

export const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};
