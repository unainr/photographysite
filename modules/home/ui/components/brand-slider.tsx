"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-autoplay";
import Image from "next/image";

const clients = [
	{ name: "Client 1", logo: "/images/client1.png" },
	{ name: "Client 2", logo: "/images/client2.png" },
	{ name: "Client 3", logo: "/images/client3.png" },
	{ name: "Client 4", logo: "/images/client4.png" },
	{ name: "Client 5", logo: "/images/client5.png" },
	{ name: "Client 6", logo: "/images/categories/client/c1.png" }, // Added as requested, using client1 as placeholder if file missing
];

export function BrandSlider() {
	const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
		AutoScroll({
			delay: 2000,
			stopOnInteraction: false,
			stopOnMouseEnter: true,
		}),
	]);

	return (
		<div className="w-full py-12 bg-background">
			<div className="container mx-auto px-4">
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex touch-pan-y -ml-4">
						{clients.map((client, index) => (
							<div
								key={index}
								className="flex-[0_0_50%] min-w-0 sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] pl-4">
								<div className="relative h-24 w-full bg-card dark:bg-card/50 rounded-xl border border-border/50 flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
									<div className="relative h-16 w-full">
										<Image
											src={client.logo}
											alt={client.name}
											fill
											className="object-contain"
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
