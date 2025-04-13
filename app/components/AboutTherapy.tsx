'use client'

export default function AboutTherapy() {
  return (
    <section className="py-24 bg-[#F8FBF8]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              What is Therapy?
            </h2>
            <div className="w-24 h-1 bg-muted-green mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Understanding the therapeutic process
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Therapy is a space just for you—a space where you can talk freely about what's on your mind, without the fear of being judged or misunderstood. It's where you can explore your thoughts, feelings, and experiences with someone who's trained to listen, understand, and support you.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                It's not only for when things feel overwhelming. Sometimes, it's about getting to know yourself better, building confidence, improving relationships, or just having someone to talk to when life feels confusing or heavy. You don't need to have a "big reason" to start therapy—wanting to feel better, lighter, or more in control is enough.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Therapy is a journey we take together, at your pace. It's about helping you find clarity, build emotional strength, and feel more connected—with yourself and the world around you.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-gray-800 mb-3">Safe Space</h3>
                <p className="text-gray-600">
                  A judgment-free environment to express yourself freely
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-gray-800 mb-3">Your Journey</h3>
                <p className="text-gray-600">
                  Progress at your own pace, guided by professional support
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Growth</h3>
                <p className="text-gray-600">
                  Build emotional strength and deeper self-understanding
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        ::selection {
          background: #1f5071;
          color: white;
        }
        ::-moz-selection {
          background: #1f5071;
          color: white;
        }
      `}</style>
    </section>
  )
}
  