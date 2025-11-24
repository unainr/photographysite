"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PhotoCategory } from "@/data/photography-categories";

interface CategoryGridProps {
  categories: PhotoCategory[];
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center mb-12">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent 
                     bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
                     dark:from-white dark:via-gray-200 dark:to-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Photography Portfolio
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explore our diverse collection of professional photography across various categories
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredId(category.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link href={`/photography/${category.slug}`}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3] bg-gray-100 dark:bg-gray-800">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: hoveredId === category.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={category.coverImage}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.h3
                    className="text-white text-xl sm:text-2xl font-bold mb-2"
                    animate={{
                      y: hoveredId === category.id ? -5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.name}
                  </motion.h3>
                  <motion.p
                    className="text-white/90 text-sm sm:text-base mb-4"
                    animate={{
                      opacity: hoveredId === category.id ? 1 : 0.8,
                      y: hoveredId === category.id ? -5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.description}
                  </motion.p>

                  {/* View Button */}
                  <motion.div
                    className="flex items-center gap-2 text-white font-medium"
                    animate={{
                      x: hoveredId === category.id ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm sm:text-base">View Gallery</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Photo Count Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs sm:text-sm font-medium">
                  {category.photos.length} Photos
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
