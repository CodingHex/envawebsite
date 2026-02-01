/**
 * Products Section Component
 * Showcases ENVA's product categories
 */
export default function ProductsSection() {
  const products = [
    {
      name: 'Hosiery',
      description: 'Premium quality socks and hosiery products with superior comfort and durability',
      features: ['Breathable', 'Durable', 'Comfortable'],
    },
    {
      name: 'Denim',
      description: 'High-quality denim fabrics with innovative designs and sustainable practices',
      features: ['Eco-Friendly', 'Trendy', 'Durable'],
    },
    {
      name: 'Knitted Apparel',
      description: 'Versatile knitted garments for all seasons and occasions',
      features: ['Versatile', 'Comfortable', 'Stylish'],
    },
    {
      name: 'Seamless Activewear',
      description: 'Performance-driven seamless activewear for modern athletes',
      features: ['Performance', 'Flexible', 'Breathable'],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-black mb-4 text-center">
          Our Product Range
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Comprehensive textile solutions across multiple categories
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-primary"
            >
              <h3 className="text-2xl font-bold mb-3 text-black">{product.name}</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
