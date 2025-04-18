import ContactForm from "../components/ContactForm"
import { WavyLine } from "../components/Items"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FBF8]">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-[100rem]">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Contact Me
            </h1>
            <div className="w-24 h-1 bg-muted-green mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Take the first step towards your healing journey
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-[1.5fr_1.5fr] gap-8">
            {/* Left Column - Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-light text-gray-800 mb-4">Client Information</h2>
                    <p className="text-gray-700 leading-relaxed">
                      I am currently working with clients from the age range 18-35, focusing on adolescents and young adults.
                    </p>
                  </div>

                  <WavyLine />

                  <div>
                    <h2 className="text-2xl font-light text-gray-800 mb-4">Therapeutic Commitment</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Reaching out for therapy is a courageous and important step towards self-growth and betterment. However, this journey also requires shared commitment, responsibility, and accountability between you and your therapist.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      I kindly ask that you complete this form only if you are ready to take on the responsibility of being punctual, regular, and committed to the therapeutic process, while following the necessary guidelines and pre-requisites of the practice.
                    </p>
                  </div>

                  <WavyLine />

                  <div>
                    <h2 className="text-2xl font-light text-gray-800 mb-4">Important Note ‼️</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Please note that I do not offer crisis intervention services in my practice, which means I am not equipped and will not be available to provide immediate or emergency mental health support if you are in midst of a mental health crisis.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      This in no way means that I do not acknowledge the seriousness of your situation. If you are in a crisis situation, it is crucial to seek immediate help. Please reach out to the below mentioned contacts for emergency services.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-800 mb-4">Emergency Contacts</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>
                        <span className="font-medium">India Suicide Helpline Directory</span>
                      </li>
                      <li>
                        <span className="font-medium">AASRA:</span> 91-9820466726
                      </li>
                      <li>
                        <span className="font-medium">Vandrevala Foundation for Mental Health:</span> 9999666555 or help@vandrevalafoundation.com
                      </li>
                      <li>
                        <span className="font-medium">Emergency number:</span> 112
                      </li>
                      <li>
                        <span className="font-medium">TISS iCall:</span> 022-25521111
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            
              <ContactForm />
            
          </div>
        </div>
      </div>
    </div>
  )
} 