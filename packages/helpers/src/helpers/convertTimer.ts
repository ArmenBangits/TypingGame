export const convertTimer = (time: number) =>
  `${time < 10 ? '0' : ''}${time}:00`;
