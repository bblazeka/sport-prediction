export function getDatesArray(startDate, stopDate) {
  var dateArray = [];
  var currentDate = new Date(startDate.getTime());
  var modifiedStopDate = new Date(stopDate.getTime());
  modifiedStopDate.setSeconds(modifiedStopDate.getSeconds() + 50);
  while (currentDate <= modifiedStopDate) {
    dateArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateArray;
}