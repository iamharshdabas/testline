export const formatTime = (timeInSeconds: number, initial = 0): string => {
  if (initial && timeInSeconds <= 0) timeInSeconds = initial;
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export function checkIntegerAnswer(
  userAnswer: string | number | null,
  correctAnswer: string,
): boolean {
  return String(userAnswer).trim() === String(correctAnswer).trim();
}
