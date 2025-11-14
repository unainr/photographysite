interface StatCardProps {
  number: string;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatCard = ({ number, label, suffix = "", delay = 0 }: StatCardProps) => {
  return (
    <div 
      className="text-center animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-2 text-5xl md:text-6xl font-bold text-[#e09043]">
        {number}{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
