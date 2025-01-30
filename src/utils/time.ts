export const formatTime = (timeInSeconds: number, initial = 0) => {
  if (initial && timeInSeconds <= 0) timeInSeconds = initial;
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
};
