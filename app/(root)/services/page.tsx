import { ServicesView } from "@/modules/services/ui/views/services-view";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Photography & Event photography  Services | Dubai Photographer",
	description:
		"Comprehensive photography and Event photography  services in Dubai and UAE. Wedding photography, corporate events, real estate photography, video production, and more. Professional solutions by Dubai Photographer.",
	keywords:
		"photography services Dubai, Event photography , wedding photography, corporate events, real estate photography, video production, Dubai services, UAE photography, professional photographer Dubai",
	authors: [{ name: "Dubai Photographer" }],
	creator: "Dubai Photographer",
	openGraph: {
		title: "Photography & Event photography  Services | Dubai Photographer",
		description:
			"Comprehensive photography and Event photography  services in Dubai and UAE. Wedding photography, corporate events, real estate photography, video production, and more.",
		type: "website",
		url: "https://dubaifotographer.com/services",
		siteName: "Dubai Photographer",
		images: [
			{
				url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=60",
				width: 1200,
				height: 630,
				alt: "Professional Photography Services Dubai",
				type: "image/jpeg",
			},
		],
		locale: "en_AE",
	},
	twitter: {
		card: "summary_large_image",
		title: "Photography & Event photography  Services | Dubai Photographer",
		description:
			"Comprehensive photography and Event photography  services in Dubai and UAE.",
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
		canonical: "https://dubaifotographer.com/services",
	},
};
const Services = () => {
	return (
		<>
			<ServicesView />
		</>
	);
};

export default Services;
