import { useEffect, useState } from "react";

const ProgressBar = ({ skillLevel,progressCount }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        progressCount(nextProgress)
        return nextProgress >= skillLevel ? skillLevel : nextProgress;
      });
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [skillLevel]);

  const progressStyle = {
    width: `${progress}%`,
  };
    return (
      <div className="progress-bar">
        <div className="progress h-1" style={progressStyle}></div>
      </div>
    );
  };
  
  export default ProgressBar;