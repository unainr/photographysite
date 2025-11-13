import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-2",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute left-1/2 -top-px w-screen -translate-x-1/2 border-t" />

      <LogoCard
        className="relative border-r border-b bg-secondary dark:bg-secondary/30"
        logo={{
          src: "/images/client1.png",
          alt: "Client 1 Logo",
        }}
      >
        <PlusIcon
          className="absolute -right-[12.5px] -bottom-[12.5px] z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b"
        logo={{
          src: "/images/client2.png",
          alt: "Client 2 Logo",
        }}
      >
        <PlusIcon
          className="absolute -left-[12.5px] -bottom-[12.5px] z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="relative border-r bg-secondary dark:bg-secondary/30"
        logo={{
          src: "/images/client3.png",
          alt: "Client 3 Logo",
        }}
      >
        <PlusIcon
          className="absolute -right-[12.5px] -top-[12.5px] z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="relative bg-background dark:bg-background"
        logo={{
          src: "/images/client4.png",
          alt: "Client 4 Logo",
        }}
      >
        <PlusIcon
          className="absolute -left-[12.5px] -top-[12.5px] z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>
      

      <div className="pointer-events-none absolute left-1/2 -bottom-px w-screen -translate-x-1/2 border-b" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-background px-4 py-8 md:p-12",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-8 select-none md:h-12 dark:brightness-0 dark:invert"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}