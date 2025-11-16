
const FAQ = () => {
	return (
		<section className="py-16 md:py-24 bg-muted/50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
						Frequently Asked{" "}
						<span className="text-[#d3803c] dark:text-[#e09043]">
							Questions
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Have questions? We've got answers.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{[
						{
							question: "What's your response time?",
							answer:
								"We typically respond to inquiries within 24 hours. For urgent matters, please call us directly.",
						},
						{
							question: "Do you offer consultations?",
							answer:
								"Yes! We offer free consultations to discuss your event and photography needs.",
						},
						{
							question: "How do I book your services?",
							answer:
								"Fill out the form above and we'll contact you to discuss your event and finalize the booking.",
						},
						{
							question: "Do you travel for events?",
							answer:
								"Yes, we travel locally and nationally for events. Travel fees may apply for distant locations.",
						},
					].map((faq, index) => (
						<div
							key={index}
							className="p-6 rounded-lg border-2 border-border hover:border-[#d3803c]/50 dark:hover:border-[#e09043]/50 transition-all duration-300 bg-card">
							<h3 className="text-lg font-bold text-foreground mb-3">
								{faq.question}
							</h3>
							<p className="text-muted-foreground">{faq.answer}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
