import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NextTopLoader from "nextjs-toploader";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title:
		"Professional Photography & Event photography  Services | Dubai Photographer",
	description:
		"Award-winning photography and Event photography  services in Dubai and UAE. Specializing in weddings, corporate events, fashion shows, and real estate photography. Book your session today with Dubai Photographer.",
	keywords:
		"photography services, Event photography , wedding photography, corporate events, Dubai photographer, UAE photography, professional photographer, event coverage, Dubai events",
	authors: [{ name: "Dubai Photographer" }],
	creator: "Dubai Photographer",
	publisher: "Dubai Photographer",
	formatDetection: {
		email: false,
		telephone: false,
		address: false,
	},
	openGraph: {
		title:
			"Professional Photography & Event photography  Services | Dubai Photographer",
		description:
			"Award-winning photography and Event photography  services in Dubai and UAE. Specializing in weddings, corporate events, fashion shows, and real estate photography.",
		type: "website",
		url: "https://dubaifotographer.com",
		siteName: "Dubai Photographer",
		images: [
			{
				url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=60",
				width: 1200,
				height: 630,
				alt: "Professional Photography Services Dubai",
				type: "image/jpeg",
			},
			{
				url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=60",
				width: 1200,
				height: 630,
				alt: "Event Photography Coverage Dubai",
				type: "image/jpeg",
			},
		],
		locale: "en_AE",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Professional Photography & Event photography  Services | Dubai Photographer",
		description:
			"Award-winning photography and Event photography  services in Dubai and UAE. Specializing in weddings, corporate events, and more.",
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
		canonical: "https://dubaifotographer.com",
		languages: {
			"en-AE": "https://dubaifotographer.com/en-ae",
			"ar-AE": "https://dubaifotographer.com/ar-ae",
		},
	},
	verification: {
		google: "your-google-verification-code",
		yandex: "your-yandex-verification-code",
	},
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<NextTopLoader
					color="#ffbc5f"
					height={2}
					crawlSpeed={50}
					speed={1000}
					showSpinner={false}
				/>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
