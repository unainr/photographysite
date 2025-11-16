"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import {
	Mail,
	Phone,
	MapPin,
	Sparkles,
	CheckCircle2,
	Send,
} from "lucide-react";
import FAQ from "@/components/faq-section";

export default function ContactForm() {
	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const form = e.currentTarget;
		const fullName = (form.fullName as any).value;
		const email = (form.email as any).value;
		const phone = (form.phone as any).value;
		const eventType = (form.eventType as any).value;
		const eventDate = (form.eventDate as any).value;
		const message = (form.message as any).value;

		const text = encodeURIComponent(
			`New Event Inquiry:
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Event Type: ${eventType}
Event Date: ${eventDate}
Message: ${message}`
		);

		const whatsappNumber = "+971522946276"; // Change later
		window.location.href = `https://wa.me/${whatsappNumber}?text=${text}`;

		setSubmitted(true);
		setLoading(false);

		setTimeout(() => {
			setSubmitted(false);
			form.reset();
		}, 3000);
	};

	const contactInfo = [
		{
			icon: Phone,
			title: "Phone",
			details: "+971522946276",
			subtext: "Mon-Fri, 9AM-6PM",
		},
		{
			icon: Mail,
			title: "Email",
			details: "hello@photography.com",
			subtext: "We reply within 24 hours",
		},
		{
			icon: MapPin,
			title: "Location",
			details: "Dubai, UAE",
			subtext: "Available for events",
		},
	];

	return (
		<div className="min-h-screen bg-linear-to-br from-background via-background to-muted/50">
			{/* Hero Section */}
			<section className="relative py-16 md:py-24 overflow-hidden">
				<div className="absolute inset-0 bg-linear-to-br from-[#d3803c]/5 via-transparent to-[#e09043]/5 dark:from-[#e09043]/10 dark:to-[#d3803c]/10" />

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center max-w-3xl mx-auto mb-12">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d3803c]/10 dark:bg-[#e09043]/10 mb-6">
							<Sparkles className="w-4 h-4 text-[#d3803c] dark:text-[#e09043]" />
							<span className="text-sm font-semibold text-[#d3803c] dark:text-[#e09043]">
								Get in Touch
							</span>
						</div>

						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
							Let's Create{" "}
							<span className="text-[#d3803c] dark:text-[#e09043]">
								Beautiful
							</span>{" "}
							Memories
						</h1>

						<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
							Have questions about our services? We'd love to hear from you.
							Fill out the form below and we'll get back to you within 24 hours.
						</p>
					</div>

					{/* Contact Info Cards */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
						{contactInfo.map((info, index) => {
							const Icon = info.icon;
							return (
								<div
									key={index}
									className="p-6 rounded-lg border-2 border-border hover:border-[#d3803c]/50 dark:hover:border-[#e09043]/50 transition-all duration-300 bg-card hover:shadow-lg">
									<Icon className="w-8 h-8 text-[#d3803c] dark:text-[#e09043] mb-4" />
									<h3 className="text-lg font-bold text-foreground mb-2">
										{info.title}
									</h3>
									<p className="text-foreground font-semibold mb-1">
										{info.details}
									</p>
									<p className="text-sm text-muted-foreground">
										{info.subtext}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Form Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto">
						<form
							onSubmit={handleSubmit}
							className="space-y-8 bg-card border-2 border-border p-8 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
							<div>
								<h2 className="text-3xl font-bold text-foreground mb-2">
									Event Inquiry Form
								</h2>
								<p className="text-muted-foreground">
									Tell us about your event and we'll help you create something
									amazing.
								</p>
							</div>

							{/* Name and Phone */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<Label className="text-foreground font-semibold">
										Full Name *
									</Label>
									<Input
										type="text"
										name="fullName"
										placeholder="John Doe"
										className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-[#d3803c] dark:focus:border-[#e09043] transition-colors h-11"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label className="text-foreground font-semibold">
										Phone *
									</Label>
									<Input
										type="tel"
										name="phone"
										placeholder="+1 555 123-4567"
										className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-[#d3803c] dark:focus:border-[#e09043] transition-colors h-11"
										required
									/>
								</div>
							</div>

							{/* Email and Event Date */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<Label className="text-foreground font-semibold">
										Email *
									</Label>
									<Input
										type="email"
										name="email"
										placeholder="john@example.com"
										className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-[#d3803c] dark:focus:border-[#e09043] transition-colors h-11"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label className="text-foreground font-semibold">
										Event Date *
									</Label>
									<Input
										type="date"
										name="eventDate"
										className="bg-muted border-border text-foreground focus:border-[#d3803c] dark:focus:border-[#e09043] transition-colors h-11"
										required
									/>
								</div>
							</div>

							{/* Event Type and Message */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<Label className="text-foreground font-semibold">
										Event Type *
									</Label>
									<Select name="eventType" required>
										<SelectTrigger className="bg-muted border-border text-foreground focus:border-[#d3803c] dark:focus:border-[#e09043] transition-colors h-11">
											<SelectValue placeholder="Select event type" />
										</SelectTrigger>
										<SelectContent className="bg-card border-border">
											<SelectItem value="Wedding">Wedding</SelectItem>
											<SelectItem value="Corporate Event">
												Corporate Event
											</SelectItem>
											<SelectItem value="Fashion Show">Fashion Show</SelectItem>
											<SelectItem value="Social Event">Social Event</SelectItem>
											<SelectItem value="Other">Other</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label className="text-foreground font-semibold">
										Message *
									</Label>
									<Textarea
										name="message"
										placeholder="Describe your event and what you're looking for..."
										className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-[#d3803c] dark:focus:border-[#e09043] transition-colors resize-none h-11"
										required
									/>
								</div>
							</div>

							{/* Submit Button */}
							<Button
								type="submit"
								disabled={loading || submitted}
								className={`w-full py-3 h-12 font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
									submitted
										? "bg-green-500 hover:bg-green-600 text-white"
										: "bg-[#d3803c] hover:bg-[#be6b27] dark:bg-[#e09043] dark:hover:bg-[#d3803c] text-white hover:scale-105 shadow-lg"
								}`}>
								{submitted ? (
									<>
										<CheckCircle2 className="w-5 h-5" />
										Message Sent Successfully!
									</>
								) : loading ? (
									<>
										<span className="animate-spin">⏳</span>
										Sending...
									</>
								) : (
									<>
										<Send className="w-5 h-5" />
										Send Message via WhatsApp
									</>
								)}
							</Button>

							<p className="text-sm text-muted-foreground text-center">
								By submitting this form, you agree to our privacy policy and
								terms of service.
							</p>
						</form>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
		<FAQ/>
		</div>
	);
}
