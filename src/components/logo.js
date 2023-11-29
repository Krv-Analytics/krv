import React from 'react';


const Krv = ({color, size}) => (

    <>
      <div>
    <svg className={'h-15 w-14 transform scale-[1.2]'}>
    <defs>
    </defs>
    <g transform="translate(0, 40)">
    <path d="M2.5,55 C30,55 36,25 60,20 " stroke={color} fill="transparent" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M2.5,55 C30,40 10,25 60,20 " stroke={color} fill="transparent" strokeWidth="1.3" strokeLinecap="round" />
    <text fill={color} fontSize="25" fontFamily="Verdana" x="25" y="50">K</text>
    <text fill={color} fontSize="16" fontFamily="Verdana" x="42" y="50">r</text>
    <text fill={color} fontSize="16" fontFamily="Verdana" x="48" y="50">v</text>
    </g>
    </svg>
    </div>

    </>
  );
  
  export default Krv;