import React from 'react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechVision',
      content: 'Working with IT World has been transformative for our business. Their expertise in cloud solutions helped us scale efficiently.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateCorp',
      content: 'The mobile app they developed for us exceeded our expectations. Professional team with excellent technical skills.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, DataFlow',
      content: 'Their IT consulting services provided valuable insights that helped us modernize our infrastructure.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily'
    }
  ];

  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
            Client Testimonials
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Hear what our clients say about their experience working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card p-6 rounded-xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground/80 mb-4">{testimonial.content}</p>
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}