import Banner from "./Components/Banner";
import Foundation from "./Components/Foundation";
import Header from "./Components/Header";
import Hero from "./Components/HeroSection";
import Info from "./Components/Info";
import Instructor from "./Components/Instructor";
import Pricing from "./Components/Pricing";

export default function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <Info />
      <Pricing />
      <Foundation />
      <Instructor />
      <Banner />
    </div>
  );
}
