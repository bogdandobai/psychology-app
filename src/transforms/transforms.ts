const months = [
  'februarie',
  'ianuarie',
  'martie',
  'aprilie',
  'mai',
  'iunie',
  'iulie',
  'august',
  'septembrie',
  'octombrie',
  'noiembrie',
  'decembrie',
];

export const transformDate = (dateAsString: string) => {
  const date = new Date(dateAsString);
  const month = months[date.getMonth()];

  return `${date.getDate()} ${month} ${date.getFullYear()}`;
};
