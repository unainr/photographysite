import { EventView } from "@/modules/event/ui/views/event-view";
import ServicesBanner from "@/modules/services/ui/components/services-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Event Photography & Coverage | Professional Event Photographer Dubai",
	description:
		"Professional event photography services in Dubai and UAE. Capture your weddings, corporate events, fashion shows, and social gatherings with stunning photography and videography. 150+ events covered by Dubai Photographer.",
	keywords:
		"event photography Dubai, wedding photography, corporate events Dubai, fashion shows, event coverage, professional event photographer, event videography, Dubai events, UAE photography",
	authors: [{ name: "Dubai Photographer" }],
	creator: "Dubai Photographer",
	openGraph: {
		title:
			"Event Photography & Coverage | Professional Event Photographer Dubai",
		description:
			"Professional event photography services in Dubai and UAE. Capture your weddings, corporate events, fashion shows, and social gatherings with stunning photography and videography.",
		type: "website",
		url: "https://dubaifotographer.com/event",
		siteName: "Dubai Photographer",
		images: [
			{
				url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=60",
				width: 1200,
				height: 630,
				alt: "Professional Event Photography Dubai",
				type: "image/jpeg",
			},
		],
		locale: "en_AE",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Event Photography & Coverage | Professional Event Photographer Dubai",
		description:
			"Professional event photography services in Dubai and UAE. Capture your weddings, corporate events, fashion shows, and social gatherings.",
		creator: "@dubaiphotographer",
		images: [
			"https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=60",
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
		canonical: "https://dubaifotographer.com/event",
	},
};
const EventPage = () => {
	return (
		<>
			<ServicesBanner title="Event" linkText="event" />
			<EventView />
		</>
	);
};

export default EventPage;
