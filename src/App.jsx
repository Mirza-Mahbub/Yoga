import Header from "./Components/Header";
import Hero from "./Components/HeroSection";
import Info from "./Components/Info";
import Pricing from "./Components/Pricing";

export default function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <Info />
      <Pricing />
    </div>
  );
}
