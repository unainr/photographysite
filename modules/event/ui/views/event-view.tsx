"use client";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/modules/services/ui/components/call-to-action";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export const EventView = () => {
	const [selectedCategory, setSelectedCategory] = useState("all");

	const eventCategories = [
		{ id: "all", name: "All Events" },
		{ id: "wedding", name: "Weddings" },
		{ id: "corporate", name: "Corporate" },
		{ id: "fashion", name: "Fashion" },
		{ id: "social", name: "Social Events" },
	];

	const events = [
		{
			id: 1,
			category: "wedding",
			title: "Sarah & Michael Wedding",
			date: "June 15, 2024",
			location: "Grand Ballroom, Downtown",
			guests: "250+",
			image: "/images/image1.JPG",
			description:
				"A beautiful summer wedding with elegant decorations and heartfelt moments.",
			highlights: [
				"Ceremony Coverage",
				"Reception",
				"Portraits",
				"Drone Shots",
			],
		},
		{
			id: 2,
			category: "fashion",
			title: "Spring Fashion Show 2024",
			date: "April 20, 2024",
			location: "Fashion District, NYC",
			guests: "500+",
			image: "/images/image3.JPG",
			description:
				"Capturing the elegance and energy of a high-fashion runway event.",
			highlights: [
				"Runway Coverage",
				"Backstage",
				"Designer Interviews",
				"Crowd Shots",
			],
		},
		{
			id: 3,
			category: "corporate",
			title: "Tech Summit 2024",
			date: "May 10, 2024",
			location: "Convention Center",
			guests: "1000+",
			image: "/images/image2.JPG",
			description:
				"Professional coverage of keynote speeches, networking, and panel discussions.",
			highlights: [
				"Keynote Sessions",
				"Networking",
				"Speakers",
				"Venue Coverage",
			],
		},
		{
			id: 4,
			category: "social",
			title: "Annual Gala Dinner",
			date: "March 8, 2024",
			location: "Luxury Hotel Ballroom",
			guests: "300+",
			image: "/images/wed1.JPG",
			description:
				"An elegant evening celebrating community and raising funds for charity.",
			highlights: [
				"Red Carpet",
				"Dinner Service",
				"Entertainment",
				"Candid Moments",
			],
		},
		{
			id: 5,
			category: "wedding",
			title: "Emma & James Elopement",
			date: "July 22, 2024",
			location: "Mountain Peak, Colorado",
			guests: "20",
			image: "/images/image44.jpg",
			description:
				"An intimate mountain elopement with breathtaking natural scenery.",
			highlights: [
				"Ceremony",
				"Couple Portraits",
				"Adventure Shots",
				"Sunset Photos",
			],
		},
		{
			id: 6,
			category: "corporate",
			title: "Product Launch Event",
			date: "February 14, 2024",
			location: "Innovation Hub",
			guests: "400+",
			image: "/images/image11.jpeg",
			description:
				"Capturing the excitement of a major product launch with live demonstrations.",
			highlights: [
				"Product Demo",
				"Attendees",
				"Speakers",
				"Celebration Moments",
			],
		},
	];
	const filteredEvents =
		selectedCategory === "all"
			? events
			: events.filter((event) => event.category === selectedCategory);

	const eventStats = [
		{ label: "Events Covered", value: "150+" },
		{ label: "Happy Clients", value: "500+" },
		{ label: "Photos Delivered", value: "50K+" },
		{ label: "Years Experience", value: "8+" },
	];

	return (
		<>
			<div className="min-h-screen bg-white dark:bg-slate-950">
				{/* Header */}
				<div className="relative px-6 py-10 text-center">
					<div
						className="absolute inset-0 z-0 h-[70vh] w-full pointer-events-none"
						style={{
							background:
								"linear-gradient(to right, rgba(156, 163, 175, 0.2), rgba(102, 51, 153, 0.2), rgba(224, 144, 67, 0.3))",
							filter: "blur(84px)",
							mixBlendMode: "screen",
						}}
					/>

					<div className="relative z-10">
						<h1 className="font-serif text-5xl font-extralight text-slate-900 dark:text-white mb-4">
							Our <span className="text-[#e09043]">Events</span>
						</h1>
						<p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
							Explore our portfolio of beautifully captured events. From
							intimate gatherings to grand celebrations, we bring your moments
							to life.
						</p>
					</div>
				</div>

				{/* Stats Section */}
				<div className="px-6 py-16 max-w-7xl mx-auto">
					{/* Category Filter */}
					<div className="flex flex-wrap justify-center gap-4 mb-16">
						{eventCategories.map((category) => (
							<Button
								key={category.id}
								onClick={() => setSelectedCategory(category.id)}
								className={`px-6 py-2 rounded-full transition-all duration-300 ${
									selectedCategory === category.id
										? "bg-[#e09043]  shadow-lg shadow-[#e09043]/30"
										: "border border-slate-200 dark:border-slate-800 text-slate-700  hover:border-[#e09043]/50"
								}`}>
								{category.name}
							</Button>
						))}
					</div>

					{/* Events Grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
						{filteredEvents.map((event) => (
							<div
								key={event.id}
								className="group rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-[#e09043]/50 transition-all duration-300 bg-white dark:bg-slate-900 hover:shadow-xl hover:shadow-[#e09043]/10">
								{/* Image */}
								<div className="relative h-64 overflow-hidden">
									<Image
										width={500}
										height={500}
										loading="lazy"
										src={event.image}
										alt={event.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>

								{/* Content */}
								<div className="p-6">
									<div className="inline-block px-3 py-1 bg-[#e09043]/10 text-[#e09043] text-xs font-semibold rounded-full mb-3">
										{event.category.charAt(0).toUpperCase() +
											event.category.slice(1)}
									</div>

									<h3 className="text-xl font-serif font-extralight text-slate-900 dark:text-white mb-3">
										{event.title}
									</h3>

									<p className="text-slate-600 dark:text-gray-400 text-sm mb-4">
										{event.description}
									</p>

									{/* Event Details */}
									<div className="space-y-2 mb-4 text-sm text-slate-600 dark:text-gray-400">
										<div className="flex items-center gap-2">
											<Calendar className="w-4 h-4 text-[#e09043]" />
											{event.date}
										</div>
										<div className="flex items-center gap-2">
											<MapPin className="w-4 h-4 text-[#e09043]" />
											{event.location}
										</div>
										<div className="flex items-center gap-2">
											<Users className="w-4 h-4 text-[#e09043]" />
											{event.guests} guests
										</div>
									</div>

									{/* Highlights */}
									<div className="mb-4 pb-4 border-b border-slate-200 dark:border-slate-800">
										<p className="text-xs font-semibold text-slate-700 dark:text-gray-300 mb-2">
											Highlights:
										</p>
										<div className="flex flex-wrap gap-2">
											{event.highlights.map((highlight, index) => (
												<span
													key={index}
													className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-gray-300 rounded">
													{highlight}
												</span>
											))}
										</div>
									</div>
									<Link href={"/photography"}>
										<Button
											variant="link"
											className="text-[#e09043] hover:text-[#f5a057] p-0 h-auto">
											View Full Gallery <ArrowRight className="w-4 h-4 ml-2" />
										</Button>
									</Link>
								</div>
							</div>
						))}
					</div>

					{/* Event Types Section */}
					<div className="mt-20 pt-20 border-t border-slate-200 dark:border-slate-800">
						<h2 className="text-3xl font-serif font-extralight text-slate-900 dark:text-white mb-12 text-center">
							Event Types We <span className="text-[#e09043]">Cover</span>
						</h2>

						<div className="grid md:grid-cols-2 gap-8">
							{[
								{
									title: "Weddings",
									description:
										"From intimate ceremonies to grand receptions, we capture every precious moment of your special day.",
									icon: "💍",
								},
								{
									title: "Corporate Events",
									description:
										"Professional coverage of conferences, product launches, and corporate gatherings.",
									icon: "����",
								},
								{
									title: "Fashion Shows",
									description:
										"Dynamic runway coverage, backstage moments, and designer interviews.",
									icon: "👗",
								},
								{
									title: "Social Events",
									description:
										"Galas, parties, and celebrations captured with elegance and energy.",
									icon: "🎉",
								},
								{
									title: "Birthdays & Milestones",
									description:
										"Celebrate life's important moments with professional photography.",
									icon: "🎂",
								},
								{
									title: "Sports & Competitions",
									description:
										"Action-packed coverage of athletic events and competitions.",
									icon: "🏆",
								},
							].map((type, index) => (
								<div
									key={index}
									className="p-8 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-[#e09043]/50 transition-all duration-300 bg-white dark:bg-slate-900">
									<div className="text-4xl mb-4">{type.icon}</div>
									<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
										{type.title}
									</h3>
									<p className="text-slate-600 dark:text-gray-400">
										{type.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<CallToAction />
		</>
	);
};
