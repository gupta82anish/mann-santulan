'use client'
export default function AppointmentBooking({ dict }: { dict: any }) {
    return (
      <section id="appointment" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">{dict.title}</h2>
          <div className="max-w-2xl mx-auto">
            {/* Placeholder for Calendly integration */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-center mb-4">{dict.description}</p>
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition duration-300"
                onClick={() => {
                  // Implement Calendly popup or redirect here
                  alert('Calendly integration would open here')
                }}
              >
                {dict.bookButton}
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  