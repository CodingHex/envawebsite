/**
 * Culture Section Component
 * Showcases company culture and values
 */
export default function CultureSection() {
  const culturePoints = [
    {
      title: 'Innovation Lab',
      description: 'Continuous research and development for cutting-edge textile solutions',
    },
    {
      title: 'Design Studio',
      description: 'Creative hub driving digital design and new product collections',
    },
    {
      title: 'Sustainability Focus',
      description: 'Environmental responsibility integrated into every process',
    },
  ];

  return (
    <section id="culture" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-black mb-6 text-center">
          Our Culture
          <br />
          <span className="text-primary">Endless Possibilities</span>
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto text-lg">
          At ENVA, we see endless possibilities ahead. Together we are a team of diverse and passionate people who keep pushing new boundaries every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {culturePoints.map((point, index) => (
            <div
              key={index}
              className="p-8 border-l-4 border-primary hover:bg-primary/10 transition-all duration-300 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
              <p className="text-gray-300">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Culture Statement */}
        <div className="bg-primary/10 p-12 rounded-lg border border-primary/30">
          <p className="text-lg leading-relaxed text-gray-100">
            We are creating a culture that is inclusive and inspirational where our people can innovate, thrive, and live ENVA values by giving back. Our team is empowered with digital transformation tools and an agile mindset to deliver excellence at every level.
          </p>
        </div>
      </div>
    </section>
  );
}
