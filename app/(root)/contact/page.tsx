import { Metadata } from "next";
import { ContactView } from "@/modules/contact/ui/views/contact-view";
import ServicesBanner from "@/modules/services/ui/components/services-banner";

export const metadata: Metadata = {
	title: "Contact Us | Dubai Photographer - Get in Touch",
	description:
		"Contact Dubai Photographer for professional photography services. Fast response time guaranteed. Call, email, or fill out our contact form to discuss your event photography needs.",
	keywords:
		"contact photographer, photography services Dubai, contact Dubai photographer, photography inquiry, book photographer Dubai, photography consultation",
	authors: [{ name: "Dubai Photographer" }],
	creator: "Dubai Photographer",
	openGraph: {
		title: "Contact Us | Dubai Photographer - Get in Touch",
		description:
			"Contact Dubai Photographer for professional photography services. Fast response time guaranteed. Call, email, or fill out our contact form.",
		type: "website",
		url: "https://dubaifotographer.com/contact",
		siteName: "Dubai Photographer",
		images: [
			{
				url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=60",
				width: 1200,
				height: 630,
				alt: "Contact Dubai Photographer",
				type: "image/jpeg",
			},
		],
		locale: "en_AE",
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Us | Dubai Photographer - Get in Touch",
		description:
			"Contact Dubai Photographer for professional photography services. Fast response time guaranteed.",
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
		canonical: "https://dubaifotographer.com/contact",
	},
};

const ContactPage = () => {
	return (
		<>
			<ServicesBanner title="Contact Us" linkText="contact" />
			<ContactView />
		</>
	);
};

export default ContactPage;
