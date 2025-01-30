import { Button } from "@heroui/button";
import { useEffect } from "react";

import { text } from "@/config/primitives";
import { useTestStore } from "@/store/test";
import { formatTime } from "@/utils/time";

type Props = {
  time: number;
};

export function StopwatchView({ time }: Props) {
  const {
    isTimerRunning,
    stopwatchSeconds,
    setShowResult,
    stopStopwatch,
    decrementStopwatch,
  } = useTestStore();

  useEffect(() => {
    let interval: NodeJS.Timeout | number | undefined;

    if (isTimerRunning) {
      interval = setInterval(() => {
        decrementStopwatch();
      }, 1000);
    }

    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, [isTimerRunning, decrementStopwatch]);

  useEffect(() => {
    if (stopwatchSeconds <= 0 && isTimerRunning) {
      stopStopwatch();
      setShowResult(true);
    }
  }, [stopwatchSeconds, time, stopStopwatch]);

  return (
    <div className="text-center">
      <h1 className={text({ size: "sm", wide: true })}>
        Time: {formatTime(stopwatchSeconds, time)}
      </h1>
    </div>
  );
}

export function StopwatchAction({ time }: Props) {
  const { startStopwatch, setStopwatchSeconds } = useTestStore();

  const handleStopwatch = () => {
    startStopwatch();
    setStopwatchSeconds(time);
  };

  return (
    <div className="grid place-items-center">
      <Button color="primary" onPress={handleStopwatch}>
        Start Test
      </Button>
    </div>
  );
}
