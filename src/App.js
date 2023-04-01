import { useState,useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import Loader from "./components/loader";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocilaLinks from "./components/SocilaLinks";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  

  return (
    <div >
       {loading === false ? (
        <>
         <Navbar/>
         <Home/>
         <SocilaLinks/>
         <About/>
         <Portfolio/>
         <Experience/>
         <Contact/>
         <Footer/>
        
         </>
      ) : (
        <Loader/>
      )}
    </div>
  );
}

export default App;
