import { Sparkles, MessageCircle, Calendar, Camera, Edit, Package } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Consultation',
      description: 'We discuss your vision, requirements, and preferences in detail.',
      details: ['Free consultation', 'Understand your needs', 'Budget discussion'],
    },
    {
      number: '02',
      icon: Calendar,
      title: 'Planning',
      description: 'Create a detailed plan and timeline for your perfect event.',
      details: ['Timeline creation', 'Venue coordination', 'Shot list preparation'],
    },
    {
      number: '03',
      icon: Camera,
      title: 'Capture',
      description: 'Professional photography and videography on your special day.',
      details: ['Expert team', 'Premium equipment', 'Complete coverage'],
    },
    {
      number: '04',
      icon: Edit,
      title: 'Editing',
      description: 'Meticulous editing and retouching to perfection.',
      details: ['Color correction', 'Professional editing', 'Quality check'],
    },
    {
      number: '05',
      icon: Package,
      title: 'Delivery',
      description: 'Receive your beautifully edited photos and videos.',
      details: ['Cloud gallery', 'High-res downloads', 'Albums & prints'],
    },
  ];

  return (
    <section className="relative py-16  bg-linear-to-b from-background via-muted/30 to-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#d3803c]/10 dark:bg-[#e09043]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#be6b27]/10 dark:bg-[#d3803c]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d3803c]/10 dark:bg-[#e09043]/10 border border-[#d3803c]/20 dark:border-[#e09043]/20 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#d3803c] dark:text-[#e09043]" />
            <span className="text-[#d3803c] dark:text-[#e09043] text-sm font-medium">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-[#d3803c] via-[#be6b27] to-[#d3803c] dark:from-[#e09043] dark:via-[#d3803c] dark:to-[#e09043] text-transparent bg-clip-text">
              How We Work
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A seamless journey from concept to cherished memories
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group h-full">
                {/* Card */}
                <div className="relative bg-card rounded-2xl p-6 border-2 border-border group-hover:border-[#d3803c] dark:group-hover:border-[#e09043] transition-all duration-300 h-full flex flex-col shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="text-4xl font-bold bg-linear-to-r from-[#d3803c] to-[#be6b27] dark:from-[#e09043] dark:to-[#d3803c] text-transparent bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-linear-to-br from-[#d3803c] to-[#be6b27] dark:from-[#e09043] dark:to-[#d3803c] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 group-hover:text-[#d3803c] dark:group-hover:text-[#e09043] transition-colors duration-300">{step.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 grow">{step.description}</p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-[#d3803c] dark:bg-[#e09043] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-linear-to-r from-[#d3803c] dark:from-[#e09043] to-transparent -translate-y-1/2"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[
            {
              title: 'Quality Guaranteed',
              description: 'We stand behind our work with 100% satisfaction guarantee. Your happiness is our success.',
              icon: '✓',
            },
            {
              title: 'Quick Turnaround',
              description: 'Receive your edited photos and videos within 2-4 weeks. Same-day highlights available.',
              icon: '⚡',
            },
            
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative bg-card border-2 border-border rounded-2xl p-8 hover:border-[#d3803c] dark:hover:border-[#e09043] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 origin-left">{item.icon}</div>
                {/* Title */}
                <h4 className="text-xl font-bold mb-3 group-hover:text-[#d3803c] dark:group-hover:text-[#e09043] transition-colors duration-300">{item.title}</h4>
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}