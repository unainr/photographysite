export interface PhotoItem {
	id: number;
	url: string;
	title?: string;
	desc?: string;
}

export interface PhotoCategory {
	id: string;
	name: string;
	slug: string;
	description: string;
	coverImage: string;
	photos: PhotoItem[];
}

export const photographyCategories: PhotoCategory[] = [
	{
		id: "wedding",
		name: "Wedding Photography",
		slug: "wedding",
		description: "Beautiful moments from weddings and celebrations",
		coverImage: "/images/brid2.jpg",
		photos: [
			{
				id: 1,
				url: "/images/image1.JPG",
				title: "Wedding Ceremony",
				desc: "Elegant wedding moments",
			},
			{
				id: 2,
				url: "/images/brid1.jpg",
				title: "Bride & Groom",
				desc: "Special day captured",
			},
			{
				id: 3,
				url: "/images/image2.JPG",
				title: "Wedding Celebration",
				desc: "Joyful moments",
			},
			{
				id: 4,
				url: "/images/photo13.jpg",
				title: "Wedding Portraits",
				desc: "Beautiful memories",
			},
			{
				id: 5,
				url: "/images/photo6.jpg",
				title: "Wedding Venue",
				desc: "Stunning setup",
			},
			{
				id: 6,
				url: "/images/photo11.jpg",
				title: "Wedding Details",
				desc: "Perfect moments",
			},
			{
				id: 7,
				url: "/images/brid3.jpg",
				title: "Wedding",
				desc: "Perfect moments",
			},
			{
				id: 8,
				url: "/images/brid4.jpg",
				title: "Wedding",
				desc: "Perfect moments",
			},
		],
	},
	{
		id: "event",
		name: "Event Photography",
		slug: "event",
		description: "Corporate events, conferences, and special occasions",
		coverImage: "/images/categories/event/e1.jpg",
		photos: [
			{
				id: 7,
				url: "/images/categories/event/e1.jpg",
				title: "Corporate Event",
				desc: "Professional gathering",
			},
			{
				id: 8,
				url: "/images/categories/event/e2.jpg",
				title: "Conference",
				desc: "Business event coverage",
			},
			{
				id: 9,
				url: "/images/categories/event/e3.jpg",
				title: "Networking Event",
				desc: "Social gathering",
			},
			{
				id: 10,
				url: "/images/categories/event/e4.jpg",
				title: "Gala Dinner",
				desc: "Elegant evening",
			},
			{
				id: 11,
				url: "/images/categories/event/e5.jpg",
				title: "Award Ceremony",
				desc: "Special recognition",
			},
			{
				id: 12,
				url: "/images/categories/event/image6.jpeg",
				title: "Product Launch",
				desc: "Brand event",
			},
			{
				id: 37,
				url: "/images/categories/event/image8.jpeg",
				title: "Special Event",
				desc: "Memorable moments",
			},
			{
				id: 47,
				url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
				title: "Concert Stage",
				desc: "Live performance",
			},
			{
				id: 48,
				url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
				title: "Celebration",
				desc: "Joyful gathering",
			},
			{
				id: 49,
				url: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2070&auto=format&fit=crop",
				title: "Corporate Meeting",
				desc: "Professional discussion",
			},
			{
				id: 50,
				url: "https://images.unsplash.com/photo-1665029541975-530c3a1b80a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlmZSUyMHN0eWxlJTIwcGhvdG8lMjBtZW4lMjBhbmQlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
				title: "Festival Crowd",
				desc: "Vibrant atmosphere",
			},
		],
	},
	{
		id: "corporate",
		name: "Corporate Photography",
		slug: "corporate",
		description: "Professional headshots and corporate branding",
		coverImage:
			"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
		photos: [
			{
				id: 13,
				url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
				title: "Corporate Headshot",
				desc: "Professional portraits",
			},
			{
				id: 14,
				url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
				title: "Team Photo",
				desc: "Company culture",
			},
			{
				id: 15,
				url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
				title: "Office Photography",
				desc: "Workplace moments",
			},
			{
				id: 16,
				url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
				title: "Executive Portrait",
				desc: "Leadership team",
			},
			{
				id: 17,
				url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
				title: "Business Meeting",
				desc: "Collaborative work",
			},
			{
				id: 18,
				url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
				title: "Corporate Branding",
				desc: "Brand identity",
			},
		],
	},
	{
		id: "food",
		name: "Food Photography",
		slug: "food",
		description: "Delicious cuisine and culinary artistry",
		coverImage: "/images/categories/food/food1.jpg",
		photos: [
			{
				id: 19,
				url: "/images/categories/food/food1.jpg",
				title: "Gourmet Dish",
				desc: "Culinary excellence",
			},
			{
				id: 20,
				url: "/images/categories/food/food2.jpg",
				title: "Restaurant Menu",
				desc: "Food styling",
			},
			{
				id: 21,
				url: "/images/categories/food/food3.jpg",
				title: "Fine Dining",
				desc: "Luxury cuisine",
			},
			{
				id: 22,
				url: "/images/categories/food/food4.jpg",
				title: "Desserts",
				desc: "Sweet creations",
			},
			{
				id: 23,
				url: "/images/categories/food/food5.jpg",
				title: "Beverage",
				desc: "Drink photography",
			},
			{
				id: 24,
				url: "/images/categories/food/food6.jpg",
				title: "Chef Special",
				desc: "Signature dishes",
			},
			{
				id: 38,
				url: "/images/categories/food/food7.jpg",
				title: "Appetizer",
				desc: "Starters",
			},
			{
				id: 39,
				url: "/images/categories/food/food8.jpg",
				title: "Main Course",
				desc: "Delicious meal",
			},
		],
	},
	{
		id: "lifestyle",
		name: "Lifestyle Photography",
		slug: "lifestyle",
		description: "Authentic moments and lifestyle captures",
		coverImage: "/images/categories/lifestyle/life.jpg",
		photos: [
			{
				id: 25,
				url: "/images/categories/lifestyle/life1.jpg",
				title: "Lifestyle Portrait",
				desc: "Natural moments",
			},
			{
				id: 26,
				url: "/images/categories/lifestyle/life2.jpg",
				title: "Urban Living",
				desc: "City life",
			},
			{
				id: 27,
				url: "/images/categories/lifestyle/life3.jpg",
				title: "Fashion Lifestyle",
				desc: "Style & elegance",
			},
			{
				id: 28,
				url: "/images/categories/lifestyle/life4.jpg",
				title: "Outdoor Activity",
				desc: "Active lifestyle",
			},
			{
				id: 29,
				url: "/images/categories/lifestyle/life5.jpg",
				title: "Family Moments",
				desc: "Precious memories",
			},
			{
				id: 30,
				url: "/images/categories/lifestyle/life6.jpg",
				title: "Candid Shots",
				desc: "Authentic captures",
			},
			{
				id: 40,
				url: "/images/categories/lifestyle/life7.jpg",
				title: "Daily Life",
				desc: "Everyday moments",
			},
			{
				id: 51,
				url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
				title: "Beach Travel",
				desc: "Relaxing getaway",
			},
			{
				id: 52,
				url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
				title: "Cafe Culture",
				desc: "Coffee break",
			},
			{
				id: 53,
				url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2070&auto=format&fit=crop",
				title: "Quiet Reading",
				desc: "Peaceful moment",
			},
			{
				id: 54,
				url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2070&auto=format&fit=crop",
				title: "Friends Fun",
				desc: "Shared laughter",
			},
		],
	},
	{
		id: "interior",
		name: "Interior Photography",
		slug: "interior",
		description: "Architecture and interior design photography",
		coverImage: "/images/categories/interior/int1.jpg",
		photos: [
			{
				id: 31,
				url: "/images/categories/interior/int1.jpg",
				title: "Modern Interior",
				desc: "Contemporary design",
			},
			{
				id: 32,
				url: "/images/categories/interior/int2.jpg",
				title: "Luxury Space",
				desc: "Premium interiors",
			},
			{
				id: 33,
				url: "/images/categories/interior/int3.jpg",
				title: "Hotel Room",
				desc: "Hospitality design",
			},
			{
				id: 34,
				url: "/images/categories/interior/int4.jpg",
				title: "Restaurant Interior",
				desc: "Dining ambiance",
			},
			{
				id: 35,
				url: "/images/categories/interior/int5.jpg",
				title: "Office Space",
				desc: "Workspace design",
			},
			{
				id: 36,
				url: "/images/categories/interior/photo31.jpg",
				title: "Residential",
				desc: "Home interiors",
			},
			{
				id: 41,
				url: "/images/categories/interior/photo32.jpg",
				title: "Living Room",
				desc: "Cozy space",
			},
			{
				id: 42,
				url: "/images/categories/interior/photo33.jpg",
				title: "Kitchen",
				desc: "Modern design",
			},
			{
				id: 43,
				url: "/images/categories/interior/photo34.jpg",
				title: "Bedroom",
				desc: "Relaxing atmosphere",
			},
			{
				id: 44,
				url: "/images/categories/interior/photo35.jpg",
				title: "Bathroom",
				desc: "Clean lines",
			},
			{
				id: 45,
				url: "/images/categories/interior/photo36.jpg",
				title: "Hallway",
				desc: "Spacious corridor",
			},
			{
				id: 46,
				url: "/images/categories/interior/photo37.jpg",
				title: "Decor Details",
				desc: "Interior accents",
			},
		],
	},
];
