export const calculateBasePrice = (
  props: { start: number; end: number },
  price
) => {
  let num = Math.round(+props.end / 100) - Math.round(+props.start / 100);
  return num * price;
};

export const calculateBaseDays = (
  props: { start: number; end: number },
  days
) => {
  let num = Math.round(+props.end / 100) - Math.round(+props.start / 100);
  return num * days;
};
