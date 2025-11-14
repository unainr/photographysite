import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
export const CallToAction = () => {
	return (
		<section className="py-16 ">
			<div className="container mx-auto px-4">
				<div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#e09043]/30 via-[#D4A574]/20 to-[#e09043]/30 p-5  text-center border-2 border-[#e09043]/40 shadow-2xl shadow-[#e09043]/30">
					{/* Grid pattern overlay */}
					<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMjQsIDE0NCwgNjcsIDAuMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

					{/* Radial glow effect */}
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#e09043_0%,transparent_70%)] opacity-20" />

					{/* Corner accents */}
					<div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#e09043]/60 rounded-tl-3xl" />
					<div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#e09043]/60 rounded-br-3xl" />

					<div className="relative z-10">
						{/* Badge */}
						<div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-[#e09043]/20 border border-[#e09043]/50 rounded-full backdrop-blur-sm">
							<div className="w-2 h-2 rounded-full bg-[#e09043] animate-pulse" />
							<span className="text-xs md:text-sm font-bold text-[#e09043] tracking-wider">
								LET'S CREATE TOGETHER
							</span>
						</div>

						<h2 className="mb-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
							Ready to Create Something
							<span className="block mt-1 bg-linear-to-r from-[#e09043] via-[#E5B880] to-[#D4A574] bg-clip-text text-transparent">
								Amazing?
							</span>
						</h2>

						<p className="mx-auto mb-6 max-w-2xl text-base md:text-lg text-neutral-300">
							Let's bring your vision to life. Contact us today for a
							consultation and discover how we can capture your story.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
							 <Link href={'/contact'}>
                            <Button
								size={"lg"}
								className="py-6 bg-[#d3803c] hover:bg-[#be6b27] dark:bg-[#e09043] dark:hover:bg-[#d3803c] text-white font-semibold shadow-xl transition-all duration-300 ">
								<Phone /> Contact Us
							</Button>
                                    </Link>
                            <Link href={'/pricing'}>
							<Button
								size={"lg"}
								className="py-6 bg-[#d3803c] hover:bg-[#be6b27] dark:bg-[#e09043] dark:hover:bg-[#d3803c] text-white font-semibold shadow-xl transition-all duration-300 ">
								View Pricing
							</Button>
                                    </Link>
						</div>

						{/* Trust indicators */}
						<div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-neutral-400 text-xs md:text-sm">
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 rounded-full bg-[#e09043]" />
								<span>500+ Happy Clients</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 rounded-full bg-[#e09043]" />
								<span>10+ Years Experience</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 rounded-full bg-[#e09043]" />
								<span>Award Winning</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
