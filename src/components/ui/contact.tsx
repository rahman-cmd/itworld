import React from 'react';

export function Contact() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
            Get in Touch
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how we can help.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card bg-foreground/5 p-8 rounded-2xl border border-foreground/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-orange-400 to-amber-500 text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}