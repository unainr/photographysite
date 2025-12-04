import { CallToAction } from "@/modules/services/ui/components/call-to-action";
import { BrandSlider } from "./components/brand-slider";
import { BTSSection } from "./components/bts-section";
import { HomeCarousel } from "./components/home-carousel";
import Portfolio from "./components/portfolio";
import Process from "./components/process";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Categories from "./components/categories";

export const HomeView = () => {
	return (
		<>
			<HomeCarousel />
			<Services />
			<Categories />
			<Process />
			<Portfolio />

			<section className="w-full py-12 md:py-20 bg-background overflow-hidden">
				<div className="container mx-auto px-4 mb-8 md:mb-12 text-center">
					<h2 className="mb-3 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
						<span className="text-foreground">Trusted By </span>
						<span className="text-[#d3803c] dark:text-[#e09043]">
							Leading Brands
						</span>
					</h2>
					<p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
						We collaborate with industry leaders to deliver exceptional
						photography and Event photography services across Dubai and UAE.
					</p>
				</div>
				<BrandSlider />
			</section>

			<BTSSection />

			<Testimonials />
			<CallToAction />
		</>
	);
};
