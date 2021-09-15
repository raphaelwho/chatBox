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

const convertToUNIXTime = (startTime, endTime, startDate, endDate) => {
  console.log('these values will be converted to UNIX time: ', startTime, endTime, startDate, endDate);
};

export { generateTimes, convertToUNIXTime };