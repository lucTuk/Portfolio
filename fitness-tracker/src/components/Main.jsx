import Hero from "./sections/Hero";
import About from "./sections/About";
import Start from "./sections/Start";
import Stories from "./sections/Stories";
import TariffPlan from "./sections/TariffPlan";
import Footer from "./sections/Footer";

export default function Main() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Start />
      <Stories />
      <TariffPlan />
    </main>
  );
}
