const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

const getDaysInMonth = (month, year) => {
 
 return new Date(year, month, 0).getDate();

};

const daysInCurrentMonth = getDaysInMonth(currentMonth,currentYear);

export default daysInCurrentMonth;
