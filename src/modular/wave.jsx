import React from "react";

const WaveDivider = ({ colorClass = "text-white", flip = false }) => {
  return (
    <div className={`relative w-full overflow-hidden leading-none ${colorClass}`}>
      <svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className={`w-full h-32 ${flip ? "rotate-180" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 200 L 0 100 Q 0 100 60 111.75570504584947 Q 120 123.51141009169893 180 130.77683537175255 Q 240 138.04226065180615 300 138.04226065180615 Q 360 138.04226065180615 420 130.77683537175255 Q 480 123.51141009169893 540 111.75570504584947 Q 600 100 660 88.24429495415055 Q 720 76.48858990830108 780 69.22316462824747 Q 840 61.95773934819386 900 61.957739348193854 Q 960 61.957739348193854 1020 69.22316462824746 Q 1080 76.48858990830107 1140 88.24429495415052 L 1200 99.99999999999999 L 1200 200 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;