export const SCREEN_SIZE: Record<string, string> = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const DEVICE: Record<string, string> = {
  mobileS: `(min-width: ${SCREEN_SIZE.mobileS})`,
  mobileM: `(min-width: ${SCREEN_SIZE.mobileM})`,
  mobileL: `(min-width: ${SCREEN_SIZE.mobileL})`,
  tablet: `(min-width: ${SCREEN_SIZE.tablet})`,
  laptop: `(min-width: ${SCREEN_SIZE.laptop})`,
  laptopL: `(min-width: ${SCREEN_SIZE.laptopL})`,
  desktop: `(min-width: ${SCREEN_SIZE.desktop})`,
  desktopL: `(min-width: ${SCREEN_SIZE.desktop})`,
};
