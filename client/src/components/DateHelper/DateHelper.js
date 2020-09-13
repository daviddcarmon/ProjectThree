const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (month, year) => {
  return new Date(year, month, 1).getDay();
};

const daysInCurrentMonth = getDaysInMonth(currentMonth, currentYear);
const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

export { daysInCurrentMonth, firstDayOfMonth };
