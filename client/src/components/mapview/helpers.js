const generateTimes = () => {
  const times = ['12:00 AM'];

  let hour = 1;
  let pm = false;

  while (hour <= 12) {
    if (hour === 12 && pm) {
      return times;
    }

    if (hour === 12){
      pm = true;
      times.push(`${hour}:00 PM`);
      hour = 1;
    }

    times.push(`${hour}:00 ${pm ? 'PM' : 'AM'}`);
    hour++;
  }
};

const parseTime = (timeString) => {
  let hrs = Number(timeString.split(':')[0]);
  if (hrs === 12 && timeString.indexOf('AM') > -1) {
      return 0;
  }
  if (timeString.indexOf('PM') > - 1 && hrs < 12) {
    hrs+=12
  }
  return hrs;
};

const convertToUNIXTime = (time, date) => {
  console.log('date: ', date);
  const hour = parseTime(time);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  console.log('unix time values: ', 'hour:', hour, 'year:', year, 'month:', month, 'day:', day);
};

export { generateTimes, convertToUNIXTime };