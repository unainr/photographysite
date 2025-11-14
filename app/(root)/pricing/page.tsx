import { PricingView } from "@/modules/pricing/ui/views/pricing-view";
import ServicesBanner from "@/modules/services/ui/components/services-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Photography Pricing & Packages | Dubai Fhotographer",
	description:
		"Transparent and affordable photography pricing packages in Dubai. Starter, Professional, and Premium packages for weddings, events, and more. Get the perfect package for your needs.",
	keywords:
		"photography pricing, photography packages, wedding photography price, event photography cost, Dubai photographer pricing, affordable photography, photography rates",
	authors: [{ name: "Dubai Photographer" }],
	creator: "Dubai Photographer",
	openGraph: {
		title: "Photography Pricing & Packages | Dubai Photographer",
		description:
			"Transparent and affordable photography pricing packages in Dubai. Starter, Professional, and Premium packages for weddings, events, and more.",
		type: "website",
		url: "https://dubaifotographer.com/pricing",
		siteName: "Dubai Photographer",
		images: [
			{
				url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=60",
				width: 1200,
				height: 630,
				alt: "Photography Pricing Packages Dubai",
				type: "image/jpeg",
			},
		],
		locale: "en_AE",
	},
	twitter: {
		card: "summary_large_image",
		title: "Photography Pricing & Packages | Dubai Photographer",
		description:
			"Transparent and affordable photography pricing packages in Dubai.",
		creator: "@dubaiphotographer",
		images: [
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=60",
		],
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	},
	alternates: {
		canonical: "https://dubaifotographer.com/pricing",
	},
};
const PricingPage = () => {
	return (
		<>
			<ServicesBanner title="Pricing" linkText="pricing" />

			<PricingView />
		</>
	);
};

export default PricingPage;
