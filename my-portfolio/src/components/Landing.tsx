import React from 'react';
import * as Three from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';
import Typed from "typed.js";
import '../styles/landing.css';

function Landing() {
  const vantaRef = React.useRef(null);
  const [vantaEffect, setVantaEffect] = React.useState<any>(null);

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: vantaRef.current,
        THREE: Three,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x2469a0,
        resize: true,
        // #5892ecff
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["\"Hello, World!\"", "Scroll down to enter!", "Welcome to my portfolio!", "\"Hola, Mundo!\"", "Click the arrow below to enter!"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      backDelay: 1500,
      showCursor: true,
      cursorChar: '|',
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} id="landing">
      <div className="landing-text">
        <h1>Alexa Sheldon</h1>
        <h2><span ref={el}></span></h2>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <i className=" fa fa-chevron-down">
          </i></a>
      </div>
    </div>);
}

export default Landing;

