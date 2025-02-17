export default function AboutTherapy({ dict }: { dict: any }) {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">{dict.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{dict.importance.title}</h3>
              <p>{dict.importance.content}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{dict.benefits.title}</h3>
              <ul className="list-disc pl-5">
                {dict.benefits.list.map((benefit: string, index: number) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  