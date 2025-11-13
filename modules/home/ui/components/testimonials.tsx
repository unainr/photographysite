import { Sparkles, Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Dubai Fotographer made our wedding day absolutely magical! Every moment was captured beautifully. The team was professional, creative, and made us feel so comfortable. We couldn't be happier with the results.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      name: "Sarah & Ahmed",
      role: "Wedding Clients",
      location: "Dubai, UAE",
    },
    {
      text: "Professional, punctual, and incredibly creative. They've been our go-to for all corporate events for the past 3 years. The quality of their work is consistently outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      name: "Emirates Tech Corp",
      role: "Corporate Client",
      location: "Dubai Marina",
    },
    {
      text: "From planning to execution, everything was flawless. The team went above and beyond to ensure our gala was a success. Their attention to detail is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      name: "Fatima Al-Mansoori",
      role: "Event Client",
      location: "Abu Dhabi",
    },
    {
      text: "The real estate photography elevated our property listings significantly. Professional, fast turnaround, and the photos look absolutely stunning. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      name: "Mohammed Hassan",
      role: "Real Estate Agent",
      location: "Palm Jumeirah",
    },
    {
      text: "Our family portraits turned out better than we could have imagined. The photographer was patient with our kids and captured such beautiful, natural moments.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
      name: "Lisa Rodriguez",
      role: "Family Client",
      location: "Downtown Dubai",
    },
    {
      text: "Working with Dubai Fotographer was an absolute pleasure. They understood my vision perfectly and delivered a stunning fashion portfolio that exceeded expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      name: "Alex Thompson",
      role: "Model & Influencer",
      location: "Business Bay",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-linear-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#d3803c]/10 dark:bg-[#e09043]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#be6b27]/10 dark:bg-[#d3803c]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d3803c]/10 dark:bg-[#e09043]/10 border border-[#d3803c]/20 dark:border-[#e09043]/20 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#d3803c] dark:text-[#e09043]" />
            <span className="text-[#d3803c] dark:text-[#e09043] text-sm font-medium">Client Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-[#d3803c] via-[#be6b27] to-[#d3803c] dark:from-[#e09043] dark:via-[#d3803c] dark:to-[#e09043] text-transparent bg-clip-text">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied clients who trust us with their most important moments
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-[#d3803c] dark:hover:border-[#e09043] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 100}ms forwards`,
                opacity: 0,
              }}
            >
              <style>{`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-[#d3803c]/5 to-[#be6b27]/5 dark:from-[#e09043]/5 dark:to-[#d3803c]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[#d3803c]/30 dark:text-[#e09043]/30 mb-4" />

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d3803c] text-[#d3803c] dark:fill-[#e09043] dark:text-[#e09043]" />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#d3803c]/30 dark:border-[#e09043]/30"
                  />
                  <div>
                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-[#d3803c] dark:text-[#e09043] text-xs">{testimonial.role}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </div>

              {/* Corner Glow on Hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br from-[#d3803c] to-[#be6b27] dark:from-[#e09043] dark:to-[#d3803c] rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}