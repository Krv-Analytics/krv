import React from 'react';


const Krv = ({scale}) => (
    <>
      <div >
    <svg height="200" width="500" transform={`scale(${scale})`}>
    <defs>
    </defs>
    <path d="M0,110 C60,110 73,50 120,40 " stroke="orange" fill="transparent" strokeWidth="4.2" stroke-linecap="round" />
    <path d="M0,110 C60,80 20,50 120,40 " stroke="orange" fill="transparent" strokeWidth="2.7" stroke-linecap="round" />
    <text fill="orange" font-size="50" font-family="Verdana" x="50" y="100">K</text>
    <text fill="white" font-size="25" font-family="Verdana" x="85" y="100">r</text>
    <text fill="white" font-size="25" font-family="Verdana" x="100" y="100">v</text>

    <text fill="white" font-size="15" font-family="Verdana" x="70" y="115">A</text>
    <text fill="white" font-size="15" font-family="Verdana" x="80" y="115">n</text>
    <text fill="white" font-size="15" font-family="Verdana" x="90" y="115">a</text>
    <text fill="white" font-size="15" font-family="Verdana" x="100" y="115">l</text>
    <text fill="white" font-size="15" font-family="Verdana" x="105" y="115">y</text>
    <text fill="white" font-size="15" font-family="Verdana" x="115" y="115">t</text>
    <text fill="white" font-size="15" font-family="Verdana" x="122" y="115">i</text>
    <text fill="white" font-size="15" font-family="Verdana" x="127" y="115">c</text>
    <text fill="white" font-size="15" font-family="Verdana" x="136" y="115">s</text>
    </svg>
    </div>
    </>
  );
  
  export default Krv;