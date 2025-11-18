import React from 'react';
import * as Three from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';

function Landing() {
  const vantaRef = React.useRef(null);
  const [vantaEffect, setVantaEffect] = React.useState<any>(null);

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: vantaRef.current,
        THREE: Three,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x000000, // Dark greenish background
        backgroundAlpha: 0.0,
        color1: 0x6495ed, // Cornflower blue
        color2: 0xc8d62b, // Bright yellow-green
        birdSize: 1.50,
        wingSpan: 20.00,
        separation: 60.00,
        alignment: 20.00,
        cohesion: 20.00,
        quantity: 4.00,
        speedLimit: 4.00,
        colorMode: "lerpGradient"
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ height: '100vh', width: '100%' }} id="landing">
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#3f523a',
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >
        <p>Hello, World!</p>
        <p>My name is Alexa Sheldon</p>
      </div>
    </div>);
}

//   return (
//     <section
//       id="landing"
//       style={{
//         height: '100vh', // full viewport height
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: '#222',
//         color: '#fff',
//       }}
//     >
//       <h1>Welcome to My Portfolio</h1>
//     </section>
//   );
// };

export default Landing;

