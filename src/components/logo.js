import React from 'react';


const Krv = ({scale}) => (
    <>
      <div>
    <svg class="h-30 w-30" transform={`scale(${scale})`}>
    <defs>
    </defs>
    <path d="M5,110 C60,110 72,50 120,40 " stroke="orange" fill="transparent" strokeWidth="4.3" stroke-linecap="round" />
    <path d="M5,110 C60,80 20,50 120,40 " stroke="orange" fill="transparent" strokeWidth="2.7" stroke-linecap="round" />
    <text fill="orange" font-size="50" font-family="Verdana" x="50" y="100">K</text>
    </svg>
    </div>
    </>
  );
  
  export default Krv;