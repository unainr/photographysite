"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { PhotoItem } from "@/data/photography-categories";

interface CategoryDetailGalleryProps {
	categoryName: string;
	description: string;
	photos: PhotoItem[];
}

export const CategoryDetailGallery: React.FC<CategoryDetailGalleryProps> = ({
	categoryName,
	description,
	photos,
}) => {
	const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	const openLightbox = (photo: PhotoItem, index: number) => {
		setSelectedPhoto(photo);
		setSelectedIndex(index);
	};

	const closeLightbox = () => {
		setSelectedPhoto(null);
	};

	const nextPhoto = () => {
		const newIndex = (selectedIndex + 1) % photos.length;
		setSelectedIndex(newIndex);
		setSelectedPhoto(photos[newIndex]);
	};

	const prevPhoto = () => {
		const newIndex = (selectedIndex - 1 + photos.length) % photos.length;
		setSelectedIndex(newIndex);
		setSelectedPhoto(photos[newIndex]);
	};

	return (
		<div className="min-h-screen w-full">
			{/* Header */}
			<div className="container mx-auto px-4 py-8 ">
				<Link
					href="/photography"
					className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6">
					<ChevronLeft className="w-5 h-5" />
					<span>Back to Categories</span>
				</Link>

				<motion.div
					className="text-center mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white mb-4">
						{categoryName}
					</h1>
					<p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						{description}
					</p>
				</motion.div>

				{/* Masonry Grid */}
				<div className=" columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-4 space-y-4">
					{photos.map((photo, index) => (
						<motion.div
							key={photo.id}
							className="break-inside-avoid mb-4"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4, delay: index * 0.05 }}>
							<div
								className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
								onClick={() => openLightbox(photo, index)}>
								<div className="relative">
									<Image
										src={photo.url}
										alt={photo.title || "Gallery image"}
										width={1920}
										height={1920}
										className="object-cover h-full group-hover:scale-110 transition-transform duration-500"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									/>
								</div>

								{/* Hover Overlay */}
								<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="absolute bottom-0 left-0 right-0 p-4">
										{photo.title && (
											<h3 className="text-white font-semibold text-sm sm:text-base mb-1">
												{photo.title}
											</h3>
										)}
										{photo.desc && (
											<p className="text-white/80 text-xs sm:text-sm">
												{photo.desc}
											</p>
										)}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Lightbox Modal */}
			<AnimatePresence>
				{selectedPhoto && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={closeLightbox}>
						{/* Close Button */}
						<button
							className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
							onClick={closeLightbox}>
							<X className="w-6 h-6" />
						</button>

						{/* Navigation Buttons */}
						<button
							className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
							onClick={(e) => {
								e.stopPropagation();
								prevPhoto();
							}}>
							<ChevronLeft className="w-6 h-6" />
						</button>

						<button
							className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
							onClick={(e) => {
								e.stopPropagation();
								nextPhoto();
							}}>
							<ChevronLeft className="w-6 h-6 rotate-180" />
						</button>

						{/* Image */}
						<motion.div
							className="relative max-w-7xl max-h-[90vh] w-full mx-4"
							initial={{ scale: 0.9, y: 20 }}
							animate={{ scale: 1, y: 0 }}
							exit={{ scale: 0.9, y: 20 }}
							onClick={(e) => e.stopPropagation()}>
							<div className="relative w-full h-full">
								<Image
									src={selectedPhoto.url}
									alt={selectedPhoto.title || "Gallery image"}
									width={1920}
									height={1080}
									quality={100}
									className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
								/>
							</div>

							{/* Image Info */}
							{(selectedPhoto.title || selectedPhoto.desc) && (
								<div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent rounded-b-lg">
									{selectedPhoto.title && (
										<h3 className="text-white text-xl font-semibold mb-2">
											{selectedPhoto.title}
										</h3>
									)}
									{selectedPhoto.desc && (
										<p className="text-white/80 text-sm">
											{selectedPhoto.desc}
										</p>
									)}
								</div>
							)}

							{/* Counter */}
							<div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
								{selectedIndex + 1} / {photos.length}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
