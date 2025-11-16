import { Award, Users, Camera, Sparkles, CheckCircle } from "lucide-react";
import Image from "next/image";
interface Props {
	image: string;
	badge?: boolean;
}
export default function WhyChooseSection({ image, badge }: Props) {
	const features = [
		{ icon: Award, text: "10+ years of professional photography experience" },
		{ icon: Users, text: "Award-winning creative team of specialists" },
		{ icon: Camera, text: "State-of-the-art equipment and latest techniques" },
		{ icon: Sparkles, text: "Fast turnaround with premium quality results" },
		{ icon: CheckCircle, text: "Personalized service and attention to detail" },
	];

	return (
		<section className="py-12 md:py-20 lg:py-24 relative overflow-hidden ">
			{/* Animated background pattern */}
			<div className="absolute inset-0 opacity-20 dark:opacity-20">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `radial-linear(circle at 2px 2px, #e09043 1px, transparent 1px)`,
						backgroundSize: "60px 60px",
					}}
				/>
			</div>

			{/* Glowing orbs */}
			<div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 h-48 md:w-96 md:h-96 bg-[#e09043] rounded-full blur-3xl opacity-10 animate-pulse" />
			<div
				className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-48 h-48 md:w-96 md:h-96 bg-[#e09043] rounded-full blur-3xl opacity-10 animate-pulse"
				style={{ animationDelay: "1s" }}
			/>

			<div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">
				<div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
					{/* Image Section */}
					<div className="order-2 lg:order-1 animate-fade-in">
						<div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl md:rounded-2xl overflow-hidden group">
							<Image
								width={900}
								height={900}
								src={image}
								alt="Professional equipment"
								className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>

							{/* linear overlays */}
							<div className="absolute inset-0 bg-linear-to-t from-slate-950 dark:from-slate-950 dark:via-slate-950/60 via-white/60 to-transparent" />
							<div className="absolute inset-0 bg-linear-to-r from-slate-950 dark:from-slate-950/40 to-transparent" />

							{/* Border glow effect */}
							<div className="absolute inset-0 rounded-xl md:rounded-2xl ring-2 ring-[#e09043]/30 group-hover:ring-[#e09043]/60 transition-all duration-500" />

							{/* Award badge */}
							{badge && (
								<div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 transform transition-transform duration-500 group-hover:-translate-y-2">
									<div className="backdrop-blur-xl bg-slate-900/80 dark:bg-slate-900/80 p-4 sm:p-6 rounded-lg md:rounded-xl border border-[#e09043]/30 shadow-2xl">
										<div className="flex items-center gap-3 sm:gap-4">
											<div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-linear-to-br from-[#e09043] to-[#c47836] flex items-center justify-center shadow-lg shadow-[#e09043]/50">
												<Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
											</div>
											<div>
												<div className="text-lg sm:text-2xl font-bold text-white dark:text-white">
													Award Winning
												</div>
												<div className="text-xs sm:text-sm  text-slate-600">
													Excellence in Photography
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Content Section */}
					<div className="order-1 lg:order-2 animate-fade-in">
						<div className="inline-block mb-4 px-4 py-2 rounded-full bg-[#e09043]/10 border border-[#e09043]/30">
							<span className="text-[#e09043] font-semibold text-sm tracking-wider uppercase">
								Why Choose Us
							</span>
						</div>

						<h2 className="mb-6 text-4xl md:text-5xl font-bold leading-tight text-white">
							Why Choose
							<span className="block bg-linear-to-r from-[#e09043] via-[#f5b878] to-[#e09043] bg-clip-text text-transparent mt-2">
								Dubai Fotographer?
							</span>
						</h2>

						<p className="mb-8 text-lg text-gray-300 leading-relaxed">
							With over a decade of experience capturing Dubai's most memorable
							moments, we bring artistic vision, technical expertise, and
							unwavering commitment to every project. Our passion for
							photography shines through in every frame.
						</p>

						{/* Features list */}
						<div className="space-y-4 mb-8">
							{features.map((point, index) => (
								<div
									key={index}
									className="flex items-start gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-[#e09043]/50 transition-all duration-300 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-[#e09043]/10 group cursor-pointer"
									style={{
										animationDelay: `${index * 100}ms`,
										animation: "fadeInUp 0.6s ease-out forwards",
										opacity: 0,
									}}>
									<div className="mt-1 h-12 w-12 rounded-full bg-linear-to-br from-[#e09043]/20 to-[#e09043]/5 flex items-center justify-center shrink-0 border border-[#e09043]/20 group-hover:border-[#e09043]/40 group-hover:shadow-lg group-hover:shadow-[#e09043]/20 transition-all duration-300">
										<point.icon className="h-6 w-6 text-[#e09043] group-hover:scale-110 transition-transform duration-300" />
									</div>
									<p className="text-gray-200 leading-relaxed pt-2 group-hover:text-white transition-colors duration-300">
										{point.text}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
