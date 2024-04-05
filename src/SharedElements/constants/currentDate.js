export const currentDate = (weekday, year, month, day) => {
  const date = new Date();
  const options = {
    weekday: weekday,
    year: year,
    month: month,
    day: day,
  };
  const currentDate = date.toLocaleString("fr-FR", options);
  return currentDate;
};
