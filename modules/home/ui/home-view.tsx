import { LogoCloud } from "./components/clients";
import { HomeCarousel } from "./components/home-carousel";
import Portfolio from "./components/portfolio";
import Process from "./components/process";
import Services from "./components/services";
import Testimonials from "./components/testimonials";

export const HomeView = () => {
	return (
		<>
			<HomeCarousel />
      <Services/>
      <Process/>
      <Portfolio/>
			<div className="min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-12 md:py-20">
      <section className="relative w-full max-w-5xl">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="mb-3 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-foreground">Trusted By </span>
            <span className="text-[#d3803c] dark:text-[#e09043]">Leading Brands</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional photography and event management services across Dubai and UAE.
          </p>
        </div>

        <LogoCloud />
      </section>
    </div>
    <Testimonials/>
		</>
	);
};
