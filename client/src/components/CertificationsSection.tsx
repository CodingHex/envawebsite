import { useState } from 'react';

type Market = 'EU' | 'US';

interface Certification {
  name: string;
  src: string;
  description: string;
  markets: Market[];
}

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const [market] = useState<Market>('EU'); // غيّرها US لو حابب

  const complianceCerts: Certification[] = [
    {
      name: 'WRAP',
      src: '/certifications/wrap.png',
      description:
        'Worldwide Responsible Accredited Production ensuring lawful, humane and ethical manufacturing.',
      markets: ['EU', 'US'],
    },
    {
      name: 'ISO 9001',
      src: '/certifications/iso.png',
      description:
        'Quality Management System ensuring consistent product quality and continuous improvement.',
      markets: ['EU', 'US'],
    },
    {
      name: 'ISO 14001',
      src: '/certifications/iso2.png',
      description:
        'Environmental Management System ensuring sustainable and eco-friendly manufacturing.',
      markets: ['EU'],
    },
    {
      name: 'Better Work',
      src: '/certifications/better-work.png',
      description:
        'International program promoting workers’ rights and improved working conditions.',
      markets: ['EU', 'US'],
    },
    {
      name: 'Sedex',
      src: '/certifications/sedex.png',
      description:
        'Ethical supply chain assessment covering labor, health & safety, and business ethics.',
      markets: ['EU'],
    },
    {
      name: 'Inditex',
      src: '/certifications/inditex.png',
      description:
        'Compliance with Inditex social and environmental manufacturing standards.',
      markets: ['EU'],
    },
    {
      name: 'Wordly',
      src: '/certifications/wordly.png',
      description:
        'Digital auditing and compliance platform for global brands.',
      markets: ['EU', 'US'],
    },
  ];

  const materialCerts: Certification[] = [
    {
      name: 'BCI',
      src: '/certifications/bci.png',
      description:
        'Better Cotton Initiative promoting sustainable cotton farming.',
      markets: ['EU', 'US'],
    },
    {
      name: 'GOTS',
      src: '/certifications/gots.png',
      description:
        'Global Organic Textile Standard for certified organic textiles.',
      markets: ['EU'],
    },
    {
      name: 'OCS',
      src: '/certifications/ocs.png',
      description:
        'Organic Content Standard verifying organic material content.',
      markets: ['EU', 'US'],
    },
    {
      name: 'Recycled',
      src: '/certifications/recycled.png',
      description:
        'Certification ensuring the use of recycled materials in production.',
      markets: ['EU', 'US'],
    },
  ];

  const filterByMarket = (certs: Certification[]) =>
    certs.filter(cert => cert.markets.includes(market));

  return (
    <section id="certifications" className="py-24 bg-white text-center">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Certifications & Compliance
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          International standards ensuring quality, ethical manufacturing,
          and sustainable sourcing.
        </p>

        {/* Factory & Social Compliance */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold mb-8">
            Factory & Social Compliance
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10 justify-items-center">
            {filterByMarket(complianceCerts).map(cert => (
              <div
                key={cert.name}
                className="relative group w-32 h-20 flex items-center justify-center cursor-pointer"
                onClick={() => setActiveCert(cert)}
              >
                <img
                  src={cert.src}
                  alt={cert.name}
                  className="
                    max-h-full max-w-full object-contain
                    opacity-80 hover:opacity-100 hover:scale-105
                    transition duration-300
                  "
                />

                {/* Tooltip */}
                <span
                  className="
                    absolute -bottom-6 text-xs text-white bg-black px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100
                    transition pointer-events-none
                  "
                >
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Materials & Sustainability */}
        <div>
          <h3 className="text-xl font-semibold mb-8">
            Materials & Sustainability Certifications
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-items-center">
            {filterByMarket(materialCerts).map(cert => (
              <div
                key={cert.name}
                className="relative group w-32 h-20 flex items-center justify-center cursor-pointer"
                onClick={() => setActiveCert(cert)}
              >
                <img
                  src={cert.src}
                  alt={cert.name}
                  className="
                    max-h-full max-w-full object-contain
                    opacity-80 hover:opacity-100 hover:scale-105
                    transition duration-300
                  "
                />

                <span
                  className="
                    absolute -bottom-6 text-xs text-white bg-black px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100
                    transition pointer-events-none
                  "
                >
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="bg-white max-w-md w-full p-6 rounded shadow-lg text-left"
            onClick={e => e.stopPropagation()}
          >
            <h4 className="text-xl font-bold mb-4">
              {activeCert.name}
            </h4>
            <p className="text-gray-700 mb-6">
              {activeCert.description}
            </p>
            <button
              className="bg-primary text-white px-6 py-2 uppercase text-sm font-semibold"
              onClick={() => setActiveCert(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
