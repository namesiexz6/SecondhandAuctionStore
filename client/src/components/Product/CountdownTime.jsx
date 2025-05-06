import React from 'react';

const CountdownTime = ({ endTime, onEnd }) => {
  const [timeLeft, setTimeLeft] = React.useState(() => {
    const end = new Date(endTime).getTime();
    const now = Date.now();
    return Math.max(0, Math.floor((end - now) / 1000));
  });

  React.useEffect(() => {
    if (timeLeft === 0) {
      if (onEnd) onEnd();
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          if (onEnd) onEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, onEnd]);

  const formatCountdown = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
   
      timeLeft > 0 ? formatCountdown(timeLeft) : 'หมดเวลา'
   
  );
};

export default CountdownTime;
