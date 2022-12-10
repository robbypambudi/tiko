const formatedTimestamp = (T?: number) => {
  const d = new Date();
  if (T) {
    d.setHours(d.getHours() + T);
  }
  const date = d.toISOString().split('T')[0];
  const time = d.toTimeString().split(' ')[0];
  return `${date} ${time}`;
};

export default formatedTimestamp;
