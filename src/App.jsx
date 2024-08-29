import Highlights from "./components/Highlights";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Features from "./components/Features";
import HowitWorks from "./components/HowItWorks";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowitWorks />
    </main>
  );
}

export default App;
