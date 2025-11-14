import Services from "@/modules/home/ui/components/services";
import { CallToAction } from "../components/call-to-action";
import WhyChooseSection from "../components/choose-us";
import ServicesBanner from "../components/services-banner";
import { StateSection } from "../components/state-section";
import { OurProcess } from "../components/out-process";
import Testimonials from "@/modules/home/ui/components/testimonials";

export const ServicesView = () => {
	return (
		<>
			<ServicesBanner title="Services" linkText="services" />
			<WhyChooseSection/>
			  <Services/>
			  <OurProcess/>
			  <StateSection/>
			  	<Testimonials/>
			  
			<CallToAction/>
		</>
	);
};
