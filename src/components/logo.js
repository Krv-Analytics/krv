import React from 'react';


const Krv = ({scale}) => (
    <>
      <div>
    <svg height="200" width="500" transform={`scale(${scale})`}>
    <defs>
    </defs>
    <path d="M0,110 C60,110 73,50 120,40 " stroke="orange" fill="transparent" strokeWidth="4.2" stroke-linecap="round" />
    <path d="M0,110 C60,80 20,50 120,40 " stroke="orange" fill="transparent" strokeWidth="2.7" stroke-linecap="round" />
    <text fill="orange" font-size="50" font-family="Verdana" x="50" y="100">K</text>
    </svg>
    </div>
    </>
  );
  
  export default Krv;