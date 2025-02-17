import { getDictionary } from "../lib/getDictionary"
import Hero from "../components/Hero"
import AboutTherapy from "../components/AboutTherapy"
import ContactForm from "../components/ContactForm"
import AppointmentBooking from "../components/AppointmentBooking"

export default async function Home({ params }: { params: { lang?: string } }) {
  const dict = await getDictionary(params.lang || "en")

  return (
    <>
      <Hero dict={dict.hero} />
      <AboutTherapy dict={dict.aboutTherapy} />
      <ContactForm dict={dict.contactForm} />
      <AppointmentBooking dict={dict.appointmentBooking} />
    </>
  )
}

