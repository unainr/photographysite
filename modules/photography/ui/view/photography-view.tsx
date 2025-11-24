import ServicesBanner from "@/modules/services/ui/components/services-banner"
import { Metadata } from 'next';
import { CategoryGrid } from "../components/category-grid";
import { photographyCategories } from "@/data/photography-categories";

export const metadata: Metadata = {
  title: 'Photography Gallery | Professional Photography Portfolio Dubai',
  description: 'Explore our stunning photography gallery featuring weddings, corporate events, fashion shows, real estate, and more. Professional photography services in Dubai and UAE. 50K+ photos delivered by Dubai Photographer.',
  keywords: 'photography gallery Dubai, professional photographer, wedding photography, event photography, Dubai photographer, UAE photography, photography portfolio, professional photography, photo gallery Dubai',
  authors: [{ name: 'Dubai Photographer' }],
  creator: 'Dubai Photographer',
  openGraph: {
    title: 'Photography Gallery | Professional Photography Portfolio Dubai',
    description: 'Explore our stunning photography gallery featuring weddings, corporate events, fashion shows, real estate, and more. Professional photography services in Dubai and UAE.',
    type: 'website',
    url: 'https://dubaifotographer.com/photography',
    siteName: 'Dubai Photographer',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=60',
        width: 1200,
        height: 630,
        alt: 'Professional Photography Gallery Dubai',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photography Gallery | Professional Photography Portfolio Dubai',
    description: 'Explore our stunning photography gallery featuring weddings, corporate events, fashion shows, real estate, and more.',
    creator: '@dubaiphotographer',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=60'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://dubaifotographer.com/photography',
  },
};
export const PhotographyView = () => {
  return (
    <>
    <ServicesBanner title="Photography" linkText="photography" />
    <CategoryGrid categories={photographyCategories} />
    </>
  )
}
