import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep = ({ icon: Icon, step, title, description, delay = 0 }: ProcessStepProps) => {
  return (
    <div 
      className="relative group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#e09043/90] blur-xl rounded-full animate-glow" />
          <div className="relative h-20 w-20 rounded-full bg-linear-to-br from-[#e09043] to-accent/30 border-2 border-primary/50 flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary">
            <Icon className="h-10 w-10 text-primary" />
          </div>
          <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-[#e09043]  flex items-center justify-center text-sm font-bold">
            {step}
          </div>
        </div>
        <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
