import React from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const PricingView = () => {
	const pricingPlans = [
		{
			name: "Starter",
			price: "$499",
			duration: "per session",
			description: "Perfect for small events and personal projects",
			features: [
				{ name: "2-4 hours coverage", included: true },
				{ name: "Up to 200 edited photos", included: true },
				{ name: "Digital gallery access", included: true },
				{ name: "Basic editing", included: true },
				{ name: "Rush delivery", included: false },
				{ name: "Drone photography", included: false },
				{ name: "Video coverage", included: false },
				{ name: "Album printing", included: false },
			],
			highlighted: false,
		},
		{
			name: "Professional",
			price: "$999",
			duration: "per session",
			description: "Ideal for weddings and corporate events",
			features: [
				{ name: "6-8 hours coverage", included: true },
				{ name: "Up to 500 edited photos", included: true },
				{ name: "Digital gallery access", included: true },
				{ name: "Advanced editing", included: true },
				{ name: "Rush delivery", included: true },
				{ name: "Drone photography", included: true },
				{ name: "Video coverage (1 hour)", included: true },
				{ name: "Album printing", included: false },
			],
			highlighted: true,
		},
		{
			name: "Premium",
			price: "$1,999",
			duration: "per session",
			description: "Complete coverage for your special day",
			features: [
				{ name: "Full day coverage (10+ hours)", included: true },
				{ name: "Unlimited edited photos", included: true },
				{ name: "Digital gallery access", included: true },
				{ name: "Premium editing & retouching", included: true },
				{ name: "Rush delivery", included: true },
				{ name: "Drone photography", included: true },
				{ name: "Video coverage (full day)", included: true },
				{ name: "Album printing & design", included: true },
			],
			highlighted: false,
		},
	];

	const addOns = [
		{ name: "Additional hour", price: "$150" },
		{ name: "Drone photography (per hour)", price: "$200" },
		{ name: "Video editing (per minute)", price: "$50" },
		{ name: "Album printing (20 pages)", price: "$300" },
		{ name: "Rush delivery (24 hours)", price: "$200" },
		{ name: "Second photographer", price: "$400" },
	];
	return (
		<>
			<div className="min-h-screen bg-white dark:bg-slate-950">
				{/* Header */}
				<div className="relative px-6 py-20 text-center">
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
							Transparent <span className="text-[#e09043]">Pricing</span>
						</h1>
						<p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
							Choose the perfect package for your event. All packages include
							professional editing and digital delivery.
						</p>
					</div>
				</div>

				{/* Pricing Cards */}
				<div className="px-6 py-16 max-w-7xl mx-auto">
					<div className="grid md:grid-cols-3 gap-8 mb-20">
						{pricingPlans.map((plan, index) => (
							<div
								key={index}
								className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
									plan.highlighted
										? "ring-2 ring-[#e09043] shadow-2xl shadow-[#e09043]/20 scale-105"
										: "border border-slate-200 dark:border-slate-800 hover:border-[#e09043]/50"
								} bg-white dark:bg-slate-900`}>
								{plan.highlighted && (
									<div className="absolute top-0 left-0 right-0 bg-[#e09043] text-white py-2 text-center text-sm font-semibold">
										Most Popular
									</div>
								)}

								<div className={`p-8 ${plan.highlighted ? "pt-16" : ""}`}>
									<h3 className="text-2xl font-serif font-extralight text-slate-900 dark:text-white mb-2">
										{plan.name}
									</h3>
									<p className="text-slate-600 dark:text-gray-400 text-sm mb-6">
										{plan.description}
									</p>

									<div className="mb-8">
										<span className="text-4xl font-bold text-slate-900 dark:text-white">
											{plan.price}
										</span>
										<span className="text-slate-600 dark:text-gray-400 ml-2">
											{plan.duration}
										</span>
									</div>
									<Link href="https://wa.me/+971522946276" target="_blank">
										<Button
											className={`w-full mb-8 ${
												plan.highlighted
													? "bg-[#e09043] hover:bg-[#c47836] text-white"
													: "border border-[#e09043] text-[#e09043] hover:bg-[#e09043]/10"
											}`}
											variant={plan.highlighted ? "default" : "outline"}>
											Book Now
										</Button>
									</Link>

									<div className="space-y-4">
										{plan.features.map((feature, featureIndex) => (
											<div
												key={featureIndex}
												className="flex items-start gap-3">
												{feature.included ? (
													<Check className="w-5 h-5 text-[#e09043] shrink-0 mt-0.5" />
												) : (
													<X className="w-5 h-5 text-slate-300 dark:text-slate-700 shrink-0 mt-0.5" />
												)}
												<span
													className={`text-sm ${
														feature.included
															? "text-slate-700 dark:text-gray-300"
															: "text-slate-400 dark:text-slate-600"
													}`}>
													{feature.name}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Add-ons Section */}
					<div className="mt-20 pt-20 border-t border-slate-200 dark:border-slate-800">
						<h2 className="text-3xl font-serif font-extralight text-slate-900 dark:text-white mb-12 text-center">
							Add-ons & <span className="text-[#e09043]">Extras</span>
						</h2>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{addOns.map((addon, index) => (
								<div
									key={index}
									className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-[#e09043]/50 transition-all duration-300 bg-white dark:bg-slate-900">
									<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
										{addon.name}
									</h3>
									<p className="text-2xl font-bold text-[#e09043]">
										{addon.price}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* FAQ Section */}
					<div className="mt-20 pt-20 border-t border-slate-200 dark:border-slate-800">
						<h2 className="text-3xl font-serif font-extralight text-slate-900 dark:text-white mb-12 text-center">
							Frequently Asked <span className="text-[#e09043]">Questions</span>
						</h2>

						<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
							<div>
								<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
									What's included in the package?
								</h3>
								<p className="text-slate-600 dark:text-gray-400">
									All packages include professional photography, editing, and
									digital delivery. Premium packages include additional services
									like drone photography and video coverage.
								</p>
							</div>

							<div>
								<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
									Do you offer payment plans?
								</h3>
								<p className="text-slate-600 dark:text-gray-400">
									Yes! We offer flexible payment plans. A 50% deposit is
									required to secure your date, with the balance due one week
									before the event.
								</p>
							</div>

							<div>
								<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
									How long until I get my photos?
								</h3>
								<p className="text-slate-600 dark:text-gray-400">
									Standard delivery is 2-3 weeks. Rush delivery (24 hours) is
									available as an add-on for an additional fee.
								</p>
							</div>

							<div>
								<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
									Can I customize a package?
								</h3>
								<p className="text-slate-600 dark:text-gray-400">
									Absolutely! We offer custom packages tailored to your specific
									needs. Contact us for a personalized quote.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
