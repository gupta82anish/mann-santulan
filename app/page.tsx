import Hero from "./components/Hero"
import AboutTherapy from "./components/AboutTherapy"
import ContactForm from "./components/ContactForm"
import AboutMe from "./components/AboutMe"
import IntroCall from "./components/IntroCall"
import MainHero from "./components/MainHero"
import MeaningSection from "./components/MeaningSection"
import FAQSection from "./components/FAQSection"
import { WavyLine } from "./components/Items"
export default function Home() {
  return (
    <div className="bg-[#F8FBF8]">
      <MainHero />
      
      {/* <Hero /> */}
      {/* <AboutMe /> */}
      <MeaningSection />
      <WavyLine />
      <AboutTherapy />
      <ContactForm />
      <IntroCall />
      <FAQSection />
      {/* <AppointmentBooking /> */}
    </div>
  )
} 