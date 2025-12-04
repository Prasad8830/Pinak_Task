export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Create stunning, responsive websites that engage your audience and drive conversions.',
      icon: '🌐',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      title: 'Mobile Apps',
      description: 'Build powerful mobile applications for iOS and Android platforms.',
      icon: '📱',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Craft beautiful and intuitive user interfaces that delight your users.',
      icon: '🎨',
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your growing business.',
      icon: '☁️',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      id: 5,
      title: 'AI Integration',
      description: 'Harness the power of artificial intelligence for intelligent automation.',
      icon: '🤖',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 6,
      title: 'Consulting',
      description: 'Expert guidance to transform your digital strategy and operations.',
      icon: '💼',
      color: 'from-orange-400 to-orange-600'
    }
  ]

  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-light to-white opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💡 Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet your unique business needs and drive sustainable growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:-translate-y-2 group"
            >
              {/* Icon Background */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-primary font-bold hover:text-secondary transition-colors duration-300 flex items-center group/btn">
                Learn More 
                <span className="ml-2 transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
