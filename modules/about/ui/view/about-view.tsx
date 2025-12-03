import FAQ from "@/components/faq-section";
import { LogoCloud } from "@/modules/home/ui/components/clients";
import Testimonials from "@/modules/home/ui/components/testimonials";
import { CallToAction } from "@/modules/services/ui/components/call-to-action";
import WhyChooseSection from "@/modules/services/ui/components/choose-us";
import { StateSection } from "@/modules/services/ui/components/state-section";

export const AboutView = () => {
	return (
		<>
			<WhyChooseSection image="/images/about.jpg" />
			<StateSection />
			<div className="min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-12 md:py-20">
				<section className="relative w-full max-w-5xl">
					<div className="mb-8 md:mb-12 text-center">
						<h2 className="mb-3 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
							<span className="text-foreground">Trusted By </span>
							<span className="text-[#d3803c] dark:text-[#e09043]">
								Leading Brands
							</span>
						</h2>
						<p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
							We collaborate with industry leaders to deliver exceptional
							photography and Event photography  services across Dubai and UAE.
						</p>
					</div>

					<LogoCloud />
				</section>
			</div>
			<Testimonials />
			<CallToAction />
			<FAQ />
		</>
	);
};
