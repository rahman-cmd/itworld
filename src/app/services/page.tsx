import { Navbar } from "@/components/ui/navbar";

export default function Services() {
  const services = [
    {
      title: 'Custom Web Development',
      description: 'Building scalable and modern web applications tailored to your business needs',
      features: ['React & Next.js', 'API Integration', 'Database Design', 'Cloud Deployment'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Mobile App Development',
      description: 'Creating native and cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Native APIs', 'App Store Publishing', 'Performance Optimization'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud infrastructure and deployment services',
      features: ['AWS/Azure/GCP', 'DevOps', 'Microservices', 'Scalability'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology consulting and digital transformation services',
      features: ['Tech Strategy', 'Process Optimization', 'Security Audits', 'Training'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
              Our Services
            </h1>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
              Comprehensive technology solutions tailored to drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all duration-300"
              >
                <div className="mb-6 text-orange-400 group-hover:text-amber-500 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-foreground/70">
                      <svg
                        className="w-5 h-5 text-orange-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-orange-400/20 to-amber-500/20 text-foreground hover:from-orange-400 hover:to-amber-500 hover:text-white font-medium transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-2 text-lg text-foreground/80">
              <svg
                className="w-6 h-6 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Need a custom solution? Let's discuss your project</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}