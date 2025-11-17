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
        scaleMobile: 1.00
        // colorMode: "variance"
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ height: '100vh', width: '100vw' }} id="landing"></div>;
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

