import Highlights from "./components/Highlights";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Model from "./components/Model";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
}

export default App;
