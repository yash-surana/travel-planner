const month_names_short = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export default function getFormattedDate(dateReceived) {
  const date = new Date(dateReceived);
  return `${
    month_names_short[date.getMonth()]
  }  ${date.getDate()} , ${date.getFullYear()}`;
}
