import { Calendar, Camera, MessageSquare, Sparkles } from "lucide-react"
import ProcessStep from "./process-step"

export const OurProcess = () => {
  return (
     <section className="py-24 bg-linear-to-b from-[#e09043]/30 via-card/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4 text-4xl md:text-5xl font-bold">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From initial consultation to final delivery, we ensure a seamless 
              and professional experience at every step.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep 
              icon={MessageSquare}
              step="1"
              title="Consultation"
              description="We discuss your vision, requirements, and expectations to understand your unique needs."
              delay={0}
            />
            <ProcessStep 
              icon={Calendar}
              step="2"
              title="Planning"
              description="Detailed planning including locations, timeline, and shot list to ensure perfect execution."
              delay={100}
            />
            <ProcessStep 
              icon={Camera}
              step="3"
              title="Photo Session"
              description="Professional photography session with state-of-the-art equipment and creative expertise."
              delay={200}
            />
            <ProcessStep 
              icon={Sparkles}
              step="4"
              title="Delivery"
              description="Expertly edited photos delivered in high resolution with fast turnaround time."
              delay={300}
            />
          </div>
        </div>
      </section>
  )
}
