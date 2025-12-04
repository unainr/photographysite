"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { photographyCategories } from "@/data/photography-categories";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggleButton } from "../mode-toggle";

export default function MainHeader() {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const [isCategoryOpen, setIsCategoryOpen] = React.useState(false);
	const [isMobileCategoryOpen, setIsMobileCategoryOpen] = React.useState(false);
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
						href="/about"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/about") &&
								"text-[#ffbc5f] hover:text-[#ffbc5f] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						About
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
					<div className="relative group">
						<button
							onClick={() => setIsCategoryOpen(!isCategoryOpen)}
							className={cn(
								"flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#ffbc5f]",
								(pathname.startsWith("/photography/") || isCategoryOpen) &&
									"text-[#ffbc5f]"
							)}>
							Categories{" "}
							<ChevronDown
								className={cn(
									"w-4 h-4 transition-transform duration-200",
									isCategoryOpen && "rotate-180"
								)}
							/>
						</button>
						{isCategoryOpen && (
							<div className="absolute top-full left-0 w-56 pt-2 animate-in fade-in slide-in-from-top-1 duration-200">
								<div className="bg-background border rounded-md shadow-lg overflow-hidden p-2 flex flex-col gap-1">
									{photographyCategories.map((category) => (
										<Link
											key={category.id}
											href={`/photography/${category.slug}`}
											onClick={() => setIsCategoryOpen(false)}
											className="block px-4 py-2 text-sm hover:bg-muted rounded-sm transition-colors">
											{category.name}
										</Link>
									))}
								</div>
							</div>
						)}
					</div>
					<Link
						href="/photography"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/photography") &&
								"text-[#ffbc5f] hover:text-[#ffbc5f] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Photography
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
									href="/about"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/about") &&
											"text-[#ffbc5f] hover:text-[#ffbc5f] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									About
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
								<div className="flex flex-col gap-2 w-full items-center">
									<button
										onClick={() =>
											setIsMobileCategoryOpen(!isMobileCategoryOpen)
										}
										className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
										Categories{" "}
										<ChevronDown
											className={cn(
												"w-4 h-4 transition-transform duration-200",
												isMobileCategoryOpen && "rotate-180"
											)}
										/>
									</button>

									{isMobileCategoryOpen && (
										<div className="flex flex-col gap-2 w-full items-center animate-in slide-in-from-top-2 fade-in duration-200">
											{photographyCategories.map((category) => (
												<Link
													key={category.id}
													href={`/photography/${category.slug}`}
													className={cn(
														"text-sm transition-colors hover:text-[#ffbc5f]",
														isActive(`/photography/${category.slug}`) &&
															"text-[#ffbc5f]"
													)}>
													{category.name}
												</Link>
											))}
										</div>
									)}
								</div>
								<Link
									href="/photography"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/photography") &&
											"text-[#ffbc5f] hover:text-[#ffbc5f] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Photography
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
