import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * Contact Section Component
 * Provides contact information and inquiry form
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-black mb-4 text-center">
          Get In Touch
          <br />
          <span className="text-primary">We'd Love to Hear From You</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Have questions about our products or services? Reach out to our team and let's discuss how we can help your business.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
            <Phone className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600">+0090 (212) 510-01 91 - 93</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
            <Mail className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">info@envagrup.com</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
            <MapPin className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-600">ISMAILIA PUBLIC FREE ZONE – 41639</p>
            <p className="text-gray-600">ISMAILIA/EGYPT</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-12 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-black">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-black">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-black">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-black">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Tell us about your inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-4 text-lg font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
