import { Navbar } from "@/components/ui/navbar";
import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce solution with real-time inventory management',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%23f0f0f0"%3E%3C/rect%3E%3Cpath d="M400 150l200 300H200z" fill="%23e0e0e0" stroke="%23d0d0d0" stroke-width="2"%3E%3C/path%3E%3Ccircle cx="400" cy="300" r="50" fill="%23cccccc"%3E%3C/circle%3E%3C/svg%3E'
    },
    {
      title: 'Healthcare App',
      category: 'Mobile Development',
      description: 'Patient management system with telemedicine features',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%23f0f0f0"%3E%3C/rect%3E%3Crect x="250" y="100" width="300" height="400" rx="20" fill="%23e0e0e0" stroke="%23d0d0d0" stroke-width="2"%3E%3C/rect%3E%3Ccircle cx="400" cy="450" r="20" fill="%23cccccc"%3E%3C/circle%3E%3C/svg%3E'
    },
    {
      title: 'Cloud Migration',
      category: 'Cloud Solutions',
      description: 'Enterprise-scale cloud migration and optimization',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%23f0f0f0"%3E%3C/rect%3E%3Cpath d="M200 300 Q 400 200 600 300 Q 400 400 200 300" fill="%23e0e0e0" stroke="%23d0d0d0" stroke-width="2"%3E%3C/path%3E%3Ccircle cx="400" cy="300" r="30" fill="%23cccccc"%3E%3C/circle%3E%3C/svg%3E'
    },
    {
      title: 'AI Analytics Platform',
      category: 'Machine Learning',
      description: 'Advanced analytics platform with AI-powered insights',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%23f0f0f0"%3E%3C/rect%3E%3Cpath d="M100 500 L 200 300 L 300 400 L 400 200 L 500 350 L 600 150 L 700 250" fill="none" stroke="%23d0d0d0" stroke-width="2"%3E%3C/path%3E%3Ccircle cx="400" cy="300" r="40" fill="%23cccccc"%3E%3C/circle%3E%3C/svg%3E'
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
              Our Portfolio
            </h1>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
              Explore our successful projects and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all duration-300"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-orange-400/10 text-orange-400">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70">{project.description}</p>
                  <div className="mt-4">
                    <button className="text-sm font-medium text-amber-500 hover:text-amber-600 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-400 to-amber-500 text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              View More Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}