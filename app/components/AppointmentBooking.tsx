'use client'
import CalEmbed from "@calcom/embed-react"
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function AppointmentBooking() {
    useEffect(() => {
        (async function () {
          const cal = await getCalApi(); 
          cal("ui", {
            theme: "dark",
            styles: {
              branding: { brandColor: "#000000" },
            },
          });
        })();
      }, []);

    return (
      <section id="appointment" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Book Your Appointment</h2>
          <div className="max-w-2xl mx-auto">
            {/* Placeholder for Calendly integration */}
            {/* <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-center mb-4">{dict.description}</p>
              <CalEmbed
                calLink="anish-gupta-ivvfoz" // Replace with your Cal.com username
                config={{
                  layout: 'month_view',
                //   hideEventTypeDetails: true
                }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition duration-300"
              >
                {dict.bookButton}
              </CalEmbed>

            </div> */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-center mb-4">Ready to take the first step? Schedule your session now.</p>
              <button
                className="w-full bg-muted-green hover:bg-muted-green/80 text-white font-bold py-3 px-6 rounded-md transition duration-300"
                data-cal-link="anish-gupta-ivvfoz" data-cal-config='{"theme":"dark"}'
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  