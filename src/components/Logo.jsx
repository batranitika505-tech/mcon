import React from 'react';

const Logo = ({ className = "h-12", light = false }) => {
    const mainColor = light ? "#FFFFFF" : "#333F48";

    return (
        <svg
            viewBox="0 0 500 180"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Building Icon Container */}
            <g transform="translate(10, 20)">
                {/* Ground Curve */}
                <path
                    d="M10 145 Q80 135 150 145"
                    stroke={mainColor}
                    strokeWidth="6"
                    strokeLinecap="round"
                />

                {/* Stylized Buildings / M */}
                <path
                    d="M20 135 V75 L55 110 L90 75 V135"
                    stroke={mainColor}
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Extra Towers */}
                <rect x="105" y="60" width="16" height="75" fill={mainColor} rx="2" />
                <rect x="128" y="85" width="16" height="50" fill={mainColor} rx="2" />

                {/* Orange Roof */}
                <path
                    d="M5 85 L55 40 L105 85"
                    stroke="#F58220"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Window Details */}
                <rect x="48" y="70" width="6" height="6" fill={mainColor} />
                <rect x="56" y="70" width="6" height="6" fill={mainColor} />
                <rect x="48" y="78" width="6" height="6" fill={mainColor} />
                <rect x="56" y="78" width="6" height="6" fill={mainColor} />
            </g>

            {/* Text - MCON */}
            <text
                x="180"
                y="95"
                fill={mainColor}
                style={{
                    font: 'bold 90px "Helvetica", "Arial", sans-serif',
                    letterSpacing: '-2px'
                }}
            >
                mcon
            </text>

            {/* Text - BUILDRZ */}
            <text
                x="180"
                y="145"
                fill="#F58220"
                style={{
                    font: 'bold 65px "Helvetica", "Arial", sans-serif',
                    letterSpacing: '2px'
                }}
            >
                buildrz
            </text>
        </svg>
    );
};

export default Logo;
