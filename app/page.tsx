import Hero from "./components/Hero"
import AboutTherapy from "./components/AboutTherapy"
import ContactForm from "./components/ContactForm"
import AboutMe from "./components/AboutMe"
import IntroCall from "./components/IntroCall"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <AboutTherapy />
      <ContactForm />
      <IntroCall />
      {/* <AppointmentBooking /> */}
    </>
  )
} 