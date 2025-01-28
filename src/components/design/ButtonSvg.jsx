// ButtonSvg.jsx
const ButtonSvg = ({ size = 88, white = false }) => (
  <>
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#89F9E8" />
          <stop offset="100%" stopColor="#FACB7B" />
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#D87CEE" />
          <stop offset="100%" stopColor="#FACB7B" />
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#9099FC" />
          <stop offset="100%" stopColor="#89F9E8" />
        </linearGradient>
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#9099FC" />
          <stop offset="100%" stopColor="#D87CEE" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      className="absolute top-0 left-0"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-left)"}
        strokeWidth="4" // Increased strokeWidth for better visibility
        d={`M${size},${size} L${size / 2},${size} C${size / 5},${size} 0,${
          size - size / 5
        } 0,${size / 5} L0,0 C0,0 ${size / 2},0 ${size},0`}
      />
    </svg>
    <svg
      className="absolute top-0 left-[calc(${size} * 0.075)] w-[calc(${size} - 2 * (${size} * 0.075))]"
      height={size}
      viewBox={`0 0 ${size * 5} ${size}`}
      preserveAspectRatio="none"
      fill={white ? "white" : "none"}
    >
      {white ? (
        <polygon
          fill="white"
          fillRule="nonzero"
          points={`0 0 ${size * 5} 0 ${size * 5} ${size} 0 ${size}`}
        />
      ) : (
        <>
          <polygon
            fill="url(#btn-top)"
            fillRule="nonzero"
            points={`0 ${size - 2} ${size * 5} ${size - 2} ${
              size * 5
            } ${size} 0 ${size}`}
          />
          <polygon
            fill="url(#btn-bottom)"
            fillRule="nonzero"
            points={`0 0 ${size * 5} 0 ${size * 5} 2 0 2`}
          />
        </>
      )}
    </svg>
    <svg
      className="absolute top-0 right-0"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-right)"}
        strokeWidth="4" // Increased strokeWidth for better visibility
        d={`M0,${size} L${size / 2},${size} L${size},${size} C${
          size * 1.5
        },${size} ${size * 1.5},${size - size / 5} ${size},${
          size / 5
        } L${size},0`}
      />
    </svg>
  </>
);

export default ButtonSvg;
