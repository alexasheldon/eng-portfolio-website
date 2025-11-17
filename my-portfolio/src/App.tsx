import React from 'react'
import './styles/global.css'
import Landing from './components/Landing.tsx'
import Sidebar from './components/Sidebar.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Footer from './components/Footer.tsx'
import ToTop from './components/ToTop.tsx'

function App() {
  const [showSidebar, setShowSidebar] = React.useState(false);

  // For sidebar integration
  React.useEffect(() => {
    const handleScroll = () => {
      const landingHeight = window.innerHeight;
      setShowSidebar(window.scrollY > landingHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <><div className="w3-light-grey w3-content" style={{ maxWidth: "1600px" }}>
      <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />
      <div id="main" className={showSidebar ? "sidebar-open" : ""}>
        <Landing />
        <About />
        <Projects />
        <Footer />
      </div>
      <ToTop />
    </div></>
  )
}

export default App
