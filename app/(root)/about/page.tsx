import { AboutView } from "@/modules/about/ui/view/about-view";
import ServicesBanner from "@/modules/services/ui/components/services-banner";
import { Metadata } from "next";

const About = () => {
	return (
		<>
			<ServicesBanner title="About" linkText="about" />
			<AboutView />
		</>
	);
};

export default About;
export const metadata: Metadata = {
  title: "About Us | Dubifotographer – Photography & Event Management in Dubai",
  description:
    "Learn about Dubifotographer, Dubai’s trusted photography and event management team. We specialize in weddings, corporate events, portraits, and professional photography services.",
  keywords:
    "about dubifotographer, Dubai photographer, photography team Dubai, event management Dubai, professional photography UAE, photographer bio, photography company Dubai",
  authors: [{ name: "Dubifotographer" }],
  creator: "Dubifotographer",

  openGraph: {
    title: "About Us | Dubifotographer – Professional Photography in Dubai",
    description:
      "Discover the story behind Dubifotographer — Dubai’s creative photography and event management experts.",
    type: "website",
    url: "https://dubifotographer.com/about",
    siteName: "Dubifotographer",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200&auto=format&fit=crop&q=60",
        width: 1200,
        height: 630,
        alt: "About Dubifotographer – Photography Team Dubai",
        type: "image/jpeg",
      },
    ],
    locale: "en_AE",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | Dubifotographer – Photography & Event Experts",
    description:
      "Meet the team behind Dubifotographer — Dubai’s trusted name for photography and event management.",
    creator: "@dubifotographer",
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200&auto=format&fit=crop&q=60",
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
    canonical: "https://dubifotographer.com/about",
  },
};
