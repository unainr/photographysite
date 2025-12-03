import { Card, CardContent } from "@/components/ui/card";
import {
	Camera,
	PartyPopper,
	Briefcase,
	Heart,
	Building2,
	Baby,
	GraduationCap,
	Palette,
} from "lucide-react";
import Image from "next/image";

export default function Services() {
	const services = [
		{
			icon: Heart,
			title: "Wedding Photography",
			description:
				"Create timeless memories of your special day with stunning photography that captures every emotion and milestone.",
			features: [
				"Pre-wedding shoots",
				"Full day coverage",
				"Cinematic videos",
				"Premium albums",
			],
			image: "/images/photo6.jpg",
		},
		{
			icon: PartyPopper,
			title: "Event photography ",
			description:
				"Complete event planning and execution from concept to completion. We handle every detail with precision.",
			features: [
				"Venue selection",
				"Vendor coordination",
				"Theme design",
				"On-site management",
			],
			image:
				"https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
		},
		{
			icon: Briefcase,
			title: "Corporate Events",
			description:
				"Professional coverage for conferences, product launches, and corporate gatherings across Dubai and UAE.",
			features: [
				"Conference coverage",
				"Product launches",
				"Team events",
				"Brand documentation",
			],
			image:
				"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
		},
		{
			icon: Building2,
			title: "Real Estate Photography",
			description:
				"Stunning property photography that showcases spaces beautifully and helps properties sell faster.",
			features: [
				"HDR photography",
				"Virtual tours",
				"Drone shots",
				"Twilight photography",
			],
			image: "/images/photo35.jpg",
		},
		{
			icon: Camera,
			title: "Portrait Photography",
			description:
				"Professional portrait sessions that capture your personality and create stunning images for any purpose.",
			features: [
				"Studio portraits",
				"Outdoor sessions",
				"Professional headshots",
				"Creative concepts",
			],
			image: "/images/photo10.jpg",
		},
		{
			icon: GraduationCap,
			title: "Special Occasions",
			description:
				"Celebrate life's milestones with professional photography for birthdays, graduations, and anniversaries.",
			features: [
				"Birthday parties",
				"Graduations",
				"Anniversaries",
				"Cultural events",
			],
			image:
				"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop",
		},
		{
			icon: Palette,
			title: "Fashion & Portfolio",
			description:
				"Build your professional portfolio with striking fashion photography for models and professionals.",
			features: [
				"Studio sessions",
				"Outdoor shoots",
				"Concept creation",
				"Retouching",
			],
			image: "/images/photo12.jpg",
		},
		{
			icon: Camera,
			title: "Video Production",
			description:
				"Cinematic storytelling through professional video production for weddings, events, and promotional content.",
			features: [
				"Wedding films",
				"Event highlights",
				"Promotional videos",
				"4K drone footage",
				"live streaming on social media"
			],
			image:
				"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop",
		},
	];

	return (
		<section id="services" className="my-30  bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold mb-4">
						Our{" "}
						<span className="text-[#d3803c] dark:text-[#e09043]">Services</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Professional photography and Event photography  solutions tailored
						to your vision
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{services.map((service, index) => (
						<div
							key={index}
							className="group hover:shadow-2xl hover:border-[#d3803c]/50 dark:hover:border-[#e09043]/50 transition-all duration-300 border h-full flex flex-col cursor-pointer overflow-hidden">
							{/* Image Section */}
							<div className="relative w-full h-56 overflow-hidden">
								<Image
									width={900}
									height={900}
									src={service.image}
									alt={service.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
								<div className="absolute bottom-3 left-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-background/90 backdrop-blur-sm border border-[#d3803c]/20 dark:border-[#e09043]/20 group-hover:bg-[#d3803c]/20 dark:group-hover:bg-[#e09043]/20 transition-all duration-300">
									<service.icon className="w-6 h-6 text-[#d3803c] dark:text-[#e09043] group-hover:scale-110 transition-transform duration-300" />
								</div>
							</div>

							<CardContent className="p-6 flex flex-col grow">
								{/* Title */}
								<h3 className="text-xl font-semibold mb-3 group-hover:text-[#d3803c] dark:group-hover:text-[#e09043] transition-colors duration-300">
									{service.title}
								</h3>

								{/* Description */}
								<p className="text-sm text-muted-foreground mb-4 leading-relaxed">
									{service.description}
								</p>

								{/* Features List */}
								<ul className="space-y-2 mt-auto">
									{service.features.map((feature, idx) => (
										<li
											key={idx}
											className="text-sm text-muted-foreground flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-[#d3803c] dark:bg-[#e09043] shrink-0 mt-1.5 group-hover:scale-125 transition-transform duration-300" />
											{feature}
										</li>
									))}
								</ul>
							</CardContent>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
