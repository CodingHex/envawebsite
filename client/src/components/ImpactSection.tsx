/**
 * Impact Section Component
 * Displays key metrics and achievements
 */
export default function ImpactSection() {
  const stats = [
    {
      number: '30+',
      label: 'Years of Experience',
      description: 'Decades of manufacturing expertise',
    },
    {
      number: '5,000+',
      label: 'Skilled Workers',
      description: 'Dedicated team members',
    },
    {
      number: '50+',
      label: 'Global Clients',
      description: 'Serving worldwide brands',
    },
    {
      number: '100%',
      label: 'Quality Certified',
      description: 'International standards compliance',
    },
    {
      number: '40%',
      label: 'Sustainable Materials',
      description: 'Eco-friendly production',
    },
    {
      number: '24/7',
      label: 'Production Capacity',
      description: 'Round-the-clock operations',
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-black mb-4 text-center">
          Our Impact
          <br />
          <span className="text-primary">By The Numbers</span>
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto text-lg">
          Measuring our commitment to excellence and sustainable growth
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 border border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 rounded-lg"
            >
              <div className="text-5xl font-black text-primary mb-3">{stat.number}</div>
              <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
