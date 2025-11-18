import InteractiveBentoGallery from "./maingallery";

const mediaItems = [
	{
		id: 1,
		type: "image",
		url: "/images/photo1.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 2,
		type: "image",
		url: "/images/photo2.jpg",
		span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
	},
	{
		id: 3,
		type: "image",
		url: "/images/photo3.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
	},
	{
		id: 4,
		type: "image",
		url: "/images/photo4.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 5,
		type: "image",
		url: "/images/photo5.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 6,
		type: "image",
		url: "/images/photo6.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 7,
		type: "image",
		url: "/images/photo7.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
	},

	// ---- Added from 8 to 37 ----
	{
		id: 8,
		type: "image",
		url: "/images/photo8.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
	},
	{
		id: 9,
		type: "image",
		url: "/images/photo9.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 10,
		type: "image",
		url: "/images/photo10.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 11,
		type: "image",
		url: "/images/photo11.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
	},
	{
		id: 12,
		type: "image",
		url: "/images/photo12.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 13,
		type: "image",
		url: "/images/photo13.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 14,
		type: "image",
		url: "/images/photo14.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
	},
	{
		id: 15,
		type: "image",
		url: "/images/photo15.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 16,
		type: "image",
		url: "/images/photo16.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 17,
		type: "image",
		url: "/images/photo17.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
	},
	{
		id: 18,
		type: "image",
		url: "/images/photo18.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 19,
		type: "image",
		url: "/images/photo19.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 20,
		type: "image",
		url: "/images/photo20.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
	},
	{
		id: 21,
		type: "image",
		url: "/images/photo21.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 22,
		type: "image",
		url: "/images/photo22.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 23,
		type: "image",
		url: "/images/photo23.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
	},
	{
		id: 24,
		type: "image",
		url: "/images/photo24.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 25,
		type: "image",
		url: "/images/photo25.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 26,
		type: "image",
		url: "/images/photo26.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
	},
	{
		id: 27,
		type: "image",
		url: "/images/photo27.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 28,
		type: "image",
		url: "/images/photo28.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 29,
		type: "image",
		url: "/images/photo40.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
	},
	{
		id: 30,
		type: "image",
		url: "/images/photo41.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 31,
		type: "image",
		url: "/images/photo31.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 32,
		type: "image",
		url: "/images/photo32.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
	},
	{
		id: 33,
		type: "image",
		url: "/images/photo33.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 34,
		type: "image",
		url: "/images/photo34.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 35,
		type: "image",
		url: "/images/photo35.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
	},
	{
		id: 36,
		type: "image",
		url: "/images/photo36.jpg",
		span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
	},
	{
		id: 37,
		type: "image",
		url: "/images/photo37.jpg",
		span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
	},
];


export function LayoutGallery() {
	return (
		<div className=" min-h-screen w-full overflow-y-auto">
			<InteractiveBentoGallery
				mediaItems={mediaItems}
				title="Gallery Shots Collection"
				description="Drag and explore our curated collection of shots"
			/>
		</div>
	);
}
