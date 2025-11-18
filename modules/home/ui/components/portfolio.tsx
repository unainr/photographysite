'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  const categories = ['All', 'Weddings', 'Corporate', 'Events', 'Portraits', 'Real Estate'];
  const [activeCategory, setActiveCategory] = useState('All');

  const portfolioItems = [
    {
      category: 'Weddings',
      title: 'Luxury Wedding at Burj Al Arab',
      image: '/images/photo5.jpg',
      description: 'Elegant celebration',
      alt: 'Luxury wedding photography at Burj Al Arab Dubai',
    },
    {
      category: 'Corporate',
      title: 'Tech Summit 2024',
      image: '/images/image2.JPG',
      description: 'Professional conference',
      alt: 'Corporate event photography Tech Summit Dubai',
    },
    {
      category: 'Events',
      title: 'Dubai Fashion Week',
      image: '/images/photo12.jpg',
      description: 'High-end fashion event',
      alt: 'Dubai Fashion Week event photography coverage',
    },
    {
      category: 'Portraits',
      title: 'Executive Portraits',
      image: '/images/wed1.JPG',
      description: 'Professional headshots',
      alt: 'Executive portrait photography Dubai professionals',
    },
    {
      category: 'Real Estate',
      title: 'Palm Jumeirah Villa',
      image: '/images/photo35.jpg',
      description: 'Luxury property',
      alt: 'Luxury villa photography Palm Jumeirah Dubai',
    },
    {
      category: 'Weddings',
      title: 'Beach Wedding Ceremony',
      image: '/images/image5.jpeg',
      description: 'Romantic beachside',
      alt: 'Beach wedding photography Dubai romantic ceremony',
    },
    {
      category: 'Corporate',
      title: 'Annual Corporate Gala',
      image: '/images/image6.jpeg',
      description: 'Premium corporate event',
      alt: 'Corporate gala event photography Dubai',
    },
    {
      category: 'Events',
      title: 'Cultural Festival',
      image: '/images/image8.jpeg',
      description: 'Vibrant celebration',
      alt: 'Cultural festival photography Dubai UAE',
    },
    {
      category: 'Portraits',
      title: 'Fashion Portfolio Shoot',
      image: '/images/photo41.jpg',
      description: 'Model portfolio',
      alt: 'Fashion portfolio photography Dubai model shoot',
    },
    {
      category: 'Real Estate',
      title: 'Downtown Dubai Penthouse',
      image: '/images/image10.jpeg',
      description: 'Luxury interior',
      alt: 'Penthouse interior photography Downtown Dubai',
    },
    {
      category: 'Weddings',
      title: 'Traditional Wedding',
      image: '/images/image11.jpeg',
      description: 'Cultural celebration',
      alt: 'Traditional wedding photography cultural ceremony UAE',
    },
    {
      category: 'Events',
      title: 'Product Launch Event',
      image: '/images/image12.jpeg',
      description: 'Brand activation',
      alt: 'Product launch event photography Dubai brand activation',
    },
  ];

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-linear-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-[#d3803c] dark:text-[#e09043]">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our collection of stunning photography and successful events
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={
                  activeCategory === category
                    ? 'bg-[#d3803c] hover:bg-[#be6b27] dark:bg-[#e09043] dark:hover:bg-[#d3803c] text-white font-semibold transition-all duration-300'
                    : 'border-[#d3803c]/30 dark:border-[#e09043]/30 text-[#d3803c] dark:text-[#e09043] hover:bg-[#d3803c]/10 dark:hover:bg-[#e09043]/10 transition-all duration-300'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-card border-2 border-border hover:border-[#d3803c] dark:hover:border-[#e09043] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs sm:text-sm text-[#d3803c] dark:text-[#e09043] font-semibold mb-1 uppercase tracking-wide">
                    {item.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-1">
                    {item.description}
                  </p>
                </div>

              
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No items found in this category. Please try another filter.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Want to see more of our work? Follow us on social media or get in touch!
          </p>
          <Link href={'/photography'}>
          <Button 
            size="lg"
            className="bg-[#d3803c] hover:bg-[#be6b27] dark:bg-[#e09043] dark:hover:bg-[#d3803c] text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
            View Full Portfolio
          </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}