import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ initialValue = 10 }) {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning]);

  useEffect(() => {
    // stop when reaches zero
    if (timeRemaining === 0) setIsRunning(false);
  }, [timeRemaining]);

  useEffect(() => {
    // reset when initialValue changes
    setTimeRemaining(initialValue);
    setIsRunning(true);
  }, [initialValue]);

  const toggleRunning = () => {
    if (!isRunning) {
      // if timer finished, reset to initial value and start
      if (timeRemaining === 0) {
        setTimeRemaining(initialValue);
        setIsRunning(true);
        return;
      }
      setIsRunning(true);
      return;
    }
    setIsRunning(false);
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>Time Remaining: {Math.max(0, timeRemaining)}</p>
      <button type="button" onClick={toggleRunning} style={{marginRight:8}}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button
        type="button"
        onClick={() => {
          setTimeRemaining(initialValue);
          setIsRunning(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}
