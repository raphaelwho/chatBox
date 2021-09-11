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
}

export { generateTimes };