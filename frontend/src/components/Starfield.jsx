import React from 'react';
import './starfield.css';
export default function Starfield(){
  return (
    <div aria-hidden>
      <div className="starfield">
        <div className="sf-layer sf-small"></div>
        <div className="sf-layer sf-mid"></div>
        <div className="sf-layer sf-large"></div>
      </div>
    </div>
  )
}
