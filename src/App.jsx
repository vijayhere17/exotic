import HeaderSection from "./components/HeaderSection/HeaderSection";
import Hero from "./components/Homepage/Hero";
import Services from "./components/Services/ServiceSection";
import CounterSection from "./components/CounterSection/CounterSection";
import Header from "./components/Header/Header";
import ApproachSection from "./components/ApproachSection/ApproachSection";
import OurLeaders from "./components/Leader/OurLeaders";
import Footer from "./components/Footer/Footer";
import FooterSection from "./components/FooterSection/FooterSection";

function App() {
  return (
    <>
      <HeaderSection />
      <Header />
      <Hero />
      <Services />
      <CounterSection />
      <ApproachSection />
      <OurLeaders />
      <Footer />
      <FooterSection />
    </>
  );
}

export default App;
