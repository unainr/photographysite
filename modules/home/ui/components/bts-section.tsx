"use client";

import React from "react";

const videos = [
	{
		id: 1,
		src: "https://ik.imagekit.io/xf9zkcr75/New%20Folder/WhatsApp%20Video%202025-12-04%20at%2001.22.31_2dbe1d31.mp4",
		title: "Behind The Scenes 1",
	},
	{
		id: 2,
		src: "https://ik.imagekit.io/xf9zkcr75/New%20Folder/WhatsApp%20Video%202025-12-04%20at%2001.22.20_bbcb303c.mp4",
		title: "Behind The Scenes 2",
	},
	{
		id: 3,
		src: "https://ik.imagekit.io/xf9zkcr75/New%20Folder/IMG_4304.MOV",
		title: "Behind The Scenes 3",
	},
];

export function BTSSection() {
	return (
		<section className="w-full py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
						<span className="text-foreground">Behind The </span>
						<span className="text-[#d3803c] dark:text-[#e09043]">Scenes</span>
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
						Witness the artistry in motion. A glimpse into our creative process
						and the passion we pour into every shot.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
					{videos.map((video) => (
						<div
							key={video.id}
							className="group relative aspect-[9/16] md:aspect-[3/4] lg:aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[#d3803c]/20 border border-border/50 bg-card">
							<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none" />
							<video
								src={video.src}
								className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
								controls
								playsInline
								preload="metadata"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
