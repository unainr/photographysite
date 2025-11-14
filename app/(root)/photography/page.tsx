import { PhotographyView } from "@/modules/photography/ui/view/photography-view";
import { Metadata } from "next";

const Photography = () => {
	return (
		<>
			<PhotographyView />
		</>
	);
};

export default Photography;

export const metadata: Metadata = {
	title: "Photography Gallery | Professional Photography Portfolio Dubai",
	description:
		"Explore our stunning photography gallery featuring weddings, corporate events, fashion shows, and more. Professional photography services in Dubai and UAE.",
	keywords:
		"photography gallery, professional photographer, wedding photography, event photography, Dubai photographer, photography portfolio",
	openGraph: {
		title: "Photography Gallery | Professional Photography Portfolio Dubai",
		description:
			"Explore our stunning photography gallery featuring weddings, corporate events, fashion shows, and more. Professional photography services in Dubai and UAE.",
		type: "website",
		url: "https://dubaifotographer.com/photography",
		images: [
			{
				url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=60",
				width: 1200,
				height: 630,
				alt: "Professional Photography Gallery",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Photography Gallery | Professional Photography Portfolio Dubai",
		description:
			"Explore our stunning photography gallery featuring weddings, corporate events, fashion shows, and more.",
		images: [
			"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=60",
		],
	},
	robots: "index, follow",
};
