import Image from 'next/image';

export function Team() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%23f0f0f0"%3E%3C/rect%3E%3Ccircle cx="100" cy="85" r="40" fill="%23d0d0d0"%3E%3C/circle%3E%3Cpath d="M40 200 Q 100 150 160 200" fill="%23e0e0e0"%3E%3C/path%3E%3C/svg%3E',
      expertise: 'Strategic Leadership',
      description: 'Visionary leader with 15+ years in tech innovation'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%23f0f0f0"%3E%3C/rect%3E%3Ccircle cx="100" cy="85" r="40" fill="%23d0d0d0"%3E%3C/circle%3E%3Cpath d="M40 200 Q 100 150 160 200" fill="%23e0e0e0"%3E%3C/path%3E%3C/svg%3E',
      expertise: 'Cloud Architecture',
      description: 'Expert in scalable cloud solutions and AI integration'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%23f0f0f0"%3E%3C/rect%3E%3Ccircle cx="100" cy="85" r="40" fill="%23d0d0d0"%3E%3C/circle%3E%3Cpath d="M40 200 Q 100 150 160 200" fill="%23e0e0e0"%3E%3C/path%3E%3C/svg%3E',
      expertise: 'UX/UI Design',
      description: 'Creating intuitive and beautiful user experiences'
    },
    {
      name: 'David Kumar',
      role: 'Senior Developer',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%23f0f0f0"%3E%3C/rect%3E%3Ccircle cx="100" cy="85" r="40" fill="%23d0d0d0"%3E%3C/circle%3E%3Cpath d="M40 200 Q 100 150 160 200" fill="%23e0e0e0"%3E%3C/path%3E%3C/svg%3E',
      expertise: 'Full-Stack Development',
      description: 'Specialized in modern web technologies and frameworks'
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
            Meet Our Team
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
            Talented professionals dedicated to delivering excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-foreground/60 mb-2">{member.role}</p>
                <div className="mb-3">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-orange-400/10 text-orange-400">
                    {member.expertise}
                  </span>
                </div>
                <p className="text-sm text-foreground/70">{member.description}</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                    </svg>
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}