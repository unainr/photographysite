"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import Fade from "embla-carousel-fade";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeCarousel() {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	);

	const slides = [
		{
			image: "/images/slider1.jpg",
			title: "Dubifotographer Precision in Every Frame",
			description:
				"Professional photography services for weddings, corporate events, and special moments across Dubai and UAE.",
		},
		{
			image: "/images/slider3.jpg",
			title: "Complete Event Management & Photography Solutions",
			description:
				"From intimate gatherings to grand celebrations — we plan, capture, and create unforgettable memories.",
		},
		{
			image: "/images/slider2.jpg",
			title: "Where Moments Become Timeless Memories",
			description:
				"Award-winning photographers specializing in destination weddings, corporate events, and portrait photography in Dubai.",
		},
	];

	return (
		<Carousel
			plugins={[plugin.current, Fade()]}
			className="w-full"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}>
			<CarouselContent>
				{slides.map((slide, index) => (
					<CarouselItem key={index}>
						<div className="relative w-full h-[400px] sm:h-[600px] lg:h-[650px]">
							<Image
								src={slide.image}
								alt={`${slide.title} - Dubai Fotographer`}
								className="w-full h-full object-cover"
								width={900}
								height={200}
								priority={index === 0}
							/>
							{/* Overlay for text - adapts to theme */}
							<div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent dark:from-black/80 dark:via-black/60 flex flex-col items-start justify-center text-left p-4 sm:p-8 lg:p-12">
								<h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold drop-shadow-2xl leading-tight max-w-4xl wrap-break-word">
									{slide.title}
								</h1>
								<p className="text-white/95 dark:text-white text-base sm:text-lg lg:text-xl mt-2 sm:mt-4 max-w-lg drop-shadow-lg">
									{slide.description}
								</p>
								<Link href={"/contact"}>
									<Button
										size={"lg"}
										className="my-4 sm:my-6 bg-[#d3803c] hover:bg-[#be6b27] dark:bg-[#e09043] dark:hover:bg-[#d3803c] text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
										<span className="relative z-10">Book Our Services</span>
									</Button>
								</Link>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md cursor-pointer bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200">
				&#8249;
			</CarouselPrevious>
			<CarouselNext className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md cursor-pointer bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200">
				&#8250;
			</CarouselNext>
		</Carousel>
	);
}
