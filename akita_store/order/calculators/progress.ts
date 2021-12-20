const findIntersection = function (
  start: number,
  end: number,
  boost_durations: { min: number; max: number; duration: number }[]
) {
  return boost_durations
    .map((duration) => {
      if (start > duration.max) {
        return null;
      }
      let result = { start, end, duration: duration.duration };

      if (start >= duration.min) {
        result = { start, end, duration: duration.duration };
        if (end > duration.max) {
          result.end = duration.max;
        }
      } else if (start < duration.min && end <= duration.max) {
        result = { start: duration.min, end, duration: duration.duration };
      }
      return result;
    })
    .filter((period) => period !== null);
};

export const calculateBasePrice = (days: number, dailyPrice: number) => {
  return days * dailyPrice;
};

export const calculateBaseDays = (
  boostProps: {
    boost_durations: { min: number; max: number; duration: number }[];
  },
  props: { start: number; end: number }
) => {
  const periods = findIntersection(
    props.start,
    props.end,
    boostProps.boost_durations
  );
  return Math.ceil(
    periods.reduce(
      (acc, current) => acc + (current.end - current.start) * current.duration,
      0
    )
  );
};
