/**
 * Stories Section Component
 * Showcases company news and achievements
 */
export default function StoriesSection() {
  const stories = [
    {
      title: 'LEED Gold Certification Achieved',
      description: 'Our manufacturing facility has been awarded LEED Gold certification, advancing our sustainable facilities portfolio.',
      date: 'December 2025',
      category: 'Sustainability',
    },
    {
      title: 'Global Expansion Milestone',
      description: 'ENVA expands operations to serve new international markets with enhanced production capacity.',
      date: 'November 2025',
      category: 'Growth',
    },
    {
      title: 'Innovation in Seamless Technology',
      description: 'Introducing revolutionary seamless knitting technology for next-generation activewear.',
      date: 'October 2025',
      category: 'Innovation',
    },
    {
      title: 'Community Development Initiative',
      description: 'Launched comprehensive training program for 500+ workers in advanced textile manufacturing.',
      date: 'September 2025',
      category: 'Community',
    },
  ];

  return (
    <section id="stories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-black mb-4 text-center">
          Our Stories
          <br />
          <span className="text-primary">Latest Updates</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Celebrating our achievements and milestones
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-l-4 border-primary"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                  {story.category}
                </span>
                <span className="text-sm text-gray-500">{story.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-black">{story.title}</h3>
              <p className="text-gray-600 leading-relaxed">{story.description}</p>
              <button className="mt-4 text-primary font-bold hover:text-red-700 transition-colors">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
