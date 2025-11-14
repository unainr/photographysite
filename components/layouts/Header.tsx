"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggleButton } from "../mode-toggle";

export default function MainHeader() {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const pathname = usePathname();
	const isActive = (path: string) => pathname === path;
	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-200 ${
				isScrolled ? "bg-background/60 backdrop-blur-md" : ""
			}`}>
			<div className="mx-auto  flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
				<Logo />

				<nav className="hidden  md:flex items-center gap-4 lg:gap-6">
					<Link
						href="/"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/") &&
								"text-[#ffbc5f] hover:text-[#ffbc5f] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Home
					</Link>

					<Link
						href="/services"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/services") &&
								"text-[#ffbc5f] hover:text-[#ffbc5f] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Services
					</Link>
					<Link
						href="/photography"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/photography") &&
								"text-[#ffbc5f] hover:text-[#ffbc5f] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Photography
					</Link>
					<Link
						href="/event"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/event") &&
								"text-[#ffbc5f] hover:text-[#ffbc5f] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Event
					</Link>
					<Link
						href="/pricing"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/pricing") &&
								"text-[#ffbc5f] hover:text-[#ffbc5f] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Pricing
					</Link>
				</nav>

				<div className="hidden md:flex items-center gap-2">
					<ThemeToggleButton showLabel />
					<Link href={"/contact"}>
						<Button className="my-4 sm:my-6 bg-[#d3803c] hover:bg-[#be6b27] dark:bg-[#e09043] dark:hover:bg-[#d3803c] text-white font-semibold shadow-xl transition-all duration-300 ">
							<Phone /> Book Now
						</Button>
					</Link>
				</div>

				{/* Mobile Menu Trigger */}
				<div className="md:hidden flex items-center">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[250px] sm:w-[300px]">
							<nav className="flex flex-col gap-4 mt-8 items-center">
								<Link
									href="/"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/") &&
											"text-[#ffbc5f] hover:text-[#ffbc5f] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Home
								</Link>
								<Link
									href="/services"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/services") &&
											"text-[#ffbc5f] hover:text-[#ffbc5f] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Services
								</Link>
								<Link
									href="/photography"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/photography") &&
											"text-[#ffbc5f] hover:text-[#ffbc5f] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Photography
								</Link>
								<Link
									href="/event"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/event") &&
											"text-[#ffbc5f] hover:text-[#ffbc5f] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Event
								</Link>
								<Link
									href="/pricing"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/pricing") &&
											"text-[#ffbc5f] hover:text-[#ffbc5f] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Pricing
								</Link>
								<ThemeToggleButton showLabel />
								<Link href={"/contact"}>
									<Button className="my-4 sm:my-6 bg-[#d3803c] hover:bg-[#be6b27] dark:bg-[#e09043] dark:hover:bg-[#d3803c] text-white font-semibold shadow-xl transition-all duration-300 ">
										<Phone /> Book Now
									</Button>
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
