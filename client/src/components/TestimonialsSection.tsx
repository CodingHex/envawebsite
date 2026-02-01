/**
 * Testimonials Section Component
 * Showcases customer feedback and success stories
 */
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'Premium Apparel Co.',
      role: 'CEO',
      feedback: 'ENVA has been our trusted manufacturing partner for 5 years. Their quality and reliability are unmatched in the industry.',
      image: '👨‍💼',
    },
    {
      name: 'Sarah Johnson',
      company: 'Global Fashion Brands',
      role: 'Production Manager',
      feedback: 'The seamless activewear produced by ENVA exceeds our expectations. Their innovation is remarkable.',
      image: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      company: 'Sustainable Textiles Inc.',
      role: 'Sustainability Officer',
      feedback: 'ENVA\'s commitment to sustainability aligns perfectly with our values. They\'re true partners in responsible manufacturing.',
      image: '👨‍💼',
    },
    {
      name: 'Emma Williams',
      company: 'Fashion Forward Ltd.',
      role: 'Design Director',
      feedback: 'Working with ENVA\'s design studio has transformed our product development process. Highly recommended!',
      image: '👩‍💼',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-black mb-4 text-center">
          What Our Clients Say
          <br />
          <span className="text-primary">Trusted by Global Brands</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Hear from companies that have partnered with ENVA for their textile manufacturing needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonial.image}</div>
                <div>
                  <h4 className="text-lg font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.feedback}"</p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
