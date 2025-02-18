import { getDictionary } from "../lib/getDictionary"
import Hero from "../components/Hero"
import AboutTherapy from "../components/AboutTherapy"
import ContactForm from "../components/ContactForm"
import AppointmentBooking from "../components/AppointmentBooking"
import AboutMe from "../components/AboutMe"

export default async function Home({ params }: { params: { lang?: string } }) {
  const { lang } = await params
  const dict = await getDictionary(lang || "en")

  return (
    <>
      <Hero dict={dict.hero} />
      <AboutMe dict={dict.aboutMe} />
      <AboutTherapy dict={dict.aboutTherapy} />
      <ContactForm dict={dict.contactForm} />
      <AppointmentBooking dict={dict.appointmentBooking} />
    </>
  )
}

