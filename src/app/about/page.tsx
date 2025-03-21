import { Navbar } from "@/components/ui/navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
              About Us
            </h1>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
              We are a passionate team of technology experts dedicated to delivering innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-foreground/70">
                To empower businesses through cutting-edge technology solutions that drive growth and innovation.
                We believe in creating lasting partnerships with our clients and delivering excellence in every project.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Fast & Efficient</h3>
                  <p className="text-sm text-foreground/60">Quick turnaround without compromising quality</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-400/20 to-amber-500/20 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 opacity-10" />
                  <div className="absolute inset-0 islamic-pattern opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">Years of Excellence</h3>
                      <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
                        10+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Innovation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integrity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Excellence</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Web Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mobile Apps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Cloud Solutions</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>200+ Projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>50+ Clients</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>24/7 Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}