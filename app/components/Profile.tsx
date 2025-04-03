import Image from "next/image"

export default function Profile() {
  return (
    <div className="max-w-6xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Left Column - Photo and Contact */}
        <div className="md:w-1/3">
          <div className="mb-8">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                src="/assets/images/IMG_2583.jpeg"
                alt="Ridhima Gupta"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <a href="mailto:ridhimagupta920@gmail.com" className="flex items-center text-[#4A4A4A] hover:text-[#2D2D2D]">
                <span className="mr-2">✉</span>
                ridhimagupta920@gmail.com
              </a>
              <p className="flex items-center text-[#4A4A4A]">
                <span className="mr-2">📞</span>
                7889544214
              </p>
              <p className="flex items-center text-[#4A4A4A]">
                <span className="mr-2">📍</span>
                Jammu & Kashmir
              </p>
              <a href="https://www.linkedin.com/in/guptaridhima" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#4A4A4A] hover:text-[#2D2D2D]">
                <span className="mr-2">🔗</span>
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#2D2D2D]">EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#2D2D2D]">Advanced Certification in Child & Adolescent mental health</h3>
                <p className="text-[#4A4A4A]">VIMHANS (Affiliated with ICMR & HSSC)</p>
                <p className="text-[#666666]">2023-2024</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#2D2D2D]">M.A. in Clinical Psychology</h3>
                <p className="text-[#4A4A4A]">Amity University</p>
                <p className="text-[#666666]">2019-2021</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#2D2D2D]">Bachelor in Arts</h3>
                <p className="text-[#4A4A4A]">University of Jammu</p>
                <p className="text-[#666666]">2016-2019</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#2D2D2D]">SKILLS</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#4A4A4A]">
              <li>Psychological assessments and evaluation</li>
              <li>Counselling & therapeutic techniques</li>
              <li>Compassionate & empathetic client engagement</li>
              <li>Problem-solving and conflict resolution</li>
              <li>Strong interpersonal & communication skills</li>
              <li>Psychoeducation & mental health advocacy</li>
              <li>Assessment & Diagnosis of mental health concerns</li>
              <li>Collaborative mindset with a proactive work style</li>
              <li>Attention to detail in clinical practice</li>
            </ul>
          </div>

          {/* Language Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#2D2D2D]">LANGUAGE</h2>
            <p className="text-[#4A4A4A]">English & Hindi</p>
          </div>
        </div>

        {/* Right Column - Main Content */}
        <div className="md:w-2/3">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2 text-[#2D2D2D]">RIDHIMA GUPTA</h1>
            <h2 className="text-2xl mb-6 text-[#4A4A4A]">Counselling Psychologist</h2>
            <p className="text-[#4A4A4A] leading-relaxed">
              As a counseling psychologist, I create a safe and supportive space where clients feel heard and empowered. 
              Using evidence-based therapies and personalised support, I help individuals gain insight, develop coping strategies, 
              and work toward emotional well-being. I strongly believe in a holistic approach to well-being, integrating physical, 
              emotional, mental, and spiritual dimensions in treatment.
            </p>
          </div>

          {/* Work Experience Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#2D2D2D]">WORK EXPERIENCE</h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold text-[#2D2D2D]">Balvantrai Mehta Vidya Bhawan, Delhi</h3>
                  <p className="text-[#666666]">March 2024 – Aug 2024</p>
                </div>
                <p className="font-medium mb-2 text-[#4A4A4A]">School Counsellor</p>
                <ul className="list-disc pl-5 space-y-2 text-[#4A4A4A]">
                  <li>Provided individual & group counselling to students addressing social emotional,& academic issues.</li>
                  <li>Conducted assessments such as CBCL, WIAT, ISAA etc to identify mental health concerns.</li>
                  <li>Collaborated with parents, teachers & administration to implement student support plans & guided them on behaviour management strategies.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold text-[#2D2D2D]">VIMHANS, Delhi</h3>
                  <p className="text-[#666666]">Aug 2023-Sep 2024</p>
                </div>
                <p className="font-medium mb-2 text-[#4A4A4A]">Counselling psychologist trainee</p>
                <ul className="list-disc pl-5 space-y-2 text-[#4A4A4A]">
                  <li>Conducted psychological assessments such as WISC-IV, DALI, ISAA, WIAT etc to check for neuro-developmental or psychological conditions.</li>
                  <li>Provided psycho-education to clients & caregivers about symptoms & treatment approaches.</li>
                  <li>Maintained detailed client records while ensuring confidentiality & continuity of care.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold text-[#2D2D2D]">Yocket</h3>
                  <p className="text-[#666666]">Sept 2021-July 2022</p>
                </div>
                <p className="font-medium mb-2 text-[#4A4A4A]">Education Counsellor</p>
                <ul className="list-disc pl-5 space-y-2 text-[#4A4A4A]">
                  <li>Supported students in managing anxiety related to studying abroad.</li>
                  <li>Developed and implemented strategies to enhance students' coping skills for managing academic pressure, social challenges, and life transitions.</li>
                  <li>Worked effectively in fast-paced, high pressure environment.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Trainings & Internships Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#2D2D2D]">TRAININGS & INTERNSHIPS</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#4A4A4A]">
              <li><span className="font-medium text-[#2D2D2D]">SensAble Child in collaboration with St Teresa's College</span> - Intensive training in learning disability in children ( Oct 22-Nov 22)</li>
              <li><span className="font-medium text-[#2D2D2D]">PsychSchool</span> - Counselling Psychologist training program (Jun 21- Nov 21)</li>
              <li><span className="font-medium text-[#2D2D2D]">Fortis Escorts Hospital</span> - Internship in counselling psychology ( Dec 19- March 20)</li>
              <li><span className="font-medium text-[#2D2D2D]">Moolchand Hospital</span> - Internship in counselling psychology Sept 19- Oct 19)</li>
              <li><span className="font-medium text-[#2D2D2D]">Manjil NGO</span> - Volunteer for social welfare ( Dec 19-March 21)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 