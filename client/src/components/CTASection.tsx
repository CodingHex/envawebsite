/**
 * CTA Section Component
 * Call-to-action section to encourage user engagement
 */
export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-black mb-6">
          Ready to Partner With Us?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how ENVA can become your trusted textile manufacturing partner. Our team is ready to understand your needs and deliver exceptional solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 font-bold text-sm uppercase tracking-widest bg-black text-white hover:bg-gray-900 transition-all duration-300 rounded-sm">
            Get In Touch
          </button>
          <button className="px-8 py-3 font-bold text-sm uppercase tracking-widest border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 rounded-sm">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
