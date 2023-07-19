import React from 'react';


const Krv = ({color}) => (

    <>
      <div>
    <svg class="h-15 w-14 transform scale-[.75]">
    <defs>
    </defs>
    <g transform="translate(0, 40)">
    <path d="M2.5,55 C30,55 36,25 60,20 " stroke={color} fill="transparent" strokeWidth="2.4" stroke-linecap="round" />
    <path d="M2.5,55 C30,40 10,25 60,20 " stroke={color} fill="transparent" strokeWidth="1.3" stroke-linecap="round" />
    <text fill={color} font-size="25" font-family="Verdana" x="25" y="50">K</text>
    </g>
    </svg>
    </div>

    </>
  );
  
  export default Krv;