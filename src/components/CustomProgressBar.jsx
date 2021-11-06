import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "../css/animate.css";

export const CustomProgressBar = ({ percent, color, colorAcent, text }) => {
  const [progress, setProgress] = useState(50);

  useEffect(
    () =>
      setTimeout(() => {
        setProgress((percent / 10) * 100 > 100 ? 100 : (percent / 10) * 100);
      }, 50),
    [setProgress, percent]
  );

  return (
    <div
      className={`w-full bg-icon rounded-xl text-xs text-center text-white ${
        progress === 0 && "py-0.5"
      }`}
    >
      <div
        className={`py-0.5 rounded-xl ${
          progress === 0 && "hidden"
        } progress bg-${color}${colorAcent ? `-${colorAcent}` : "-500"}`}
        style={{ width: `${progress <= 10 ? 100 : progress}%` }}
      >
        {`${text} : ${percent}`}
      </div>
      {progress === 0 && `${text} : ${percent}`}
    </div>
  );
};

CustomProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

CustomProgressBar.defaultProps = {
  colorAcent: null,
  percent: 100,
};
