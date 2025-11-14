import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <p className="ptagesecond">
        This is the clock that shows the time in Bharat at all times
      </p>
      <p className="ptagesecond">
        This is the current time:{time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </p>
    </>
  );
};
export default Time;
