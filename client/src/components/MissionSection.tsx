/**
 * Mission Section Component
 * Displays company mission and core values
 */
export default function MissionSection() {
  const pillars = [
    {
      title: 'Minimising Environmental Impact',
      description: 'Sustainable practices at every stage of production',
      icon: '🌱',
    },
    {
      title: 'Prioritising Worker Well-Being',
      description: 'Fair wages, safe conditions, and continuous development',
      icon: '👥',
    },
    {
      title: 'Maintaining Global Standards',
      description: 'International quality certifications and compliance',
      icon: '✓',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Mission Statement */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-black mb-6 leading-tight">
            Sustainability and Innovation
            <br />
            <span className="text-primary">Drive Us Forward</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Committed to our vision of producing apparel in a responsible way. We continue to leverage three decades of manufacturing expertise to conceptualise, design, and craft products that make us proud every single day.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our commitment to sustainability is deeply rooted within the company's mission, creating benefits for all our stakeholders – a partner of choice for all.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-8 border-l-4 border-primary hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-black">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Product Categories */}
        <div className="bg-gray-50 p-12 rounded-lg">
          <h3 className="text-3xl font-bold mb-6">Our Expertise</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We carry product expertise in hosiery, denim, knitted apparel, and seamless activewear – across all ages, genders, and abilities. Our diverse portfolio allows us to serve clients across multiple market segments with tailored solutions and consistent quality.
          </p>
        </div>
      </div>
    </section>
  );
}
