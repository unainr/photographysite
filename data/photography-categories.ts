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
    coverImage: "/images/wed1.JPG",
    photos: [
      { id: 1, url: "/images/wed1.JPG", title: "Wedding Ceremony", desc: "Elegant wedding moments" },
      { id: 2, url: "/images/photo1.jpg", title: "Bride & Groom", desc: "Special day captured" },
      { id: 3, url: "/images/photo2.jpg", title: "Wedding Celebration", desc: "Joyful moments" },
      { id: 4, url: "/images/photo3.jpg", title: "Wedding Portraits", desc: "Beautiful memories" },
      { id: 5, url: "/images/photo4.jpg", title: "Wedding Venue", desc: "Stunning setup" },
      { id: 6, url: "/images/photo5.jpg", title: "Wedding Details", desc: "Perfect moments" },
    ]
  },
  {
    id: "event",
    name: "Event Photography",
    slug: "event",
    description: "Corporate events, conferences, and special occasions",
    coverImage: "/images/photo6.jpg",
    photos: [
      { id: 7, url: "/images/photo6.jpg", title: "Corporate Event", desc: "Professional gathering" },
      { id: 8, url: "/images/photo7.jpg", title: "Conference", desc: "Business event coverage" },
      { id: 9, url: "/images/photo8.jpg", title: "Networking Event", desc: "Social gathering" },
      { id: 10, url: "/images/photo9.jpg", title: "Gala Dinner", desc: "Elegant evening" },
      { id: 11, url: "/images/photo10.jpg", title: "Award Ceremony", desc: "Special recognition" },
      { id: 12, url: "/images/photo11.jpg", title: "Product Launch", desc: "Brand event" },
    ]
  },
  {
    id: "corporate",
    name: "Corporate Photography",
    slug: "corporate",
    description: "Professional headshots and corporate branding",
    coverImage: "/images/photo12.jpg",
    photos: [
      { id: 13, url: "/images/photo12.jpg", title: "Corporate Headshot", desc: "Professional portraits" },
      { id: 14, url: "/images/photo13.jpg", title: "Team Photo", desc: "Company culture" },
      { id: 15, url: "/images/photo14.jpg", title: "Office Photography", desc: "Workplace moments" },
      { id: 16, url: "/images/photo15.jpg", title: "Executive Portrait", desc: "Leadership team" },
      { id: 17, url: "/images/photo16.jpg", title: "Business Meeting", desc: "Collaborative work" },
      { id: 18, url: "/images/photo17.jpg", title: "Corporate Branding", desc: "Brand identity" },
    ]
  },
  {
    id: "food",
    name: "Food Photography",
    slug: "food",
    description: "Delicious cuisine and culinary artistry",
    coverImage: "/images/photo18.jpg",
    photos: [
      { id: 19, url: "/images/photo18.jpg", title: "Gourmet Dish", desc: "Culinary excellence" },
      { id: 20, url: "/images/photo19.jpg", title: "Restaurant Menu", desc: "Food styling" },
      { id: 21, url: "/images/photo20.jpg", title: "Fine Dining", desc: "Luxury cuisine" },
      { id: 22, url: "/images/photo21.jpg", title: "Desserts", desc: "Sweet creations" },
      { id: 23, url: "/images/photo22.jpg", title: "Beverage", desc: "Drink photography" },
      { id: 24, url: "/images/photo23.jpg", title: "Chef Special", desc: "Signature dishes" },
    ]
  },
  {
    id: "lifestyle",
    name: "Lifestyle Photography",
    slug: "lifestyle",
    description: "Authentic moments and lifestyle captures",
    coverImage: "/images/photo24.jpg",
    photos: [
      { id: 25, url: "/images/photo24.jpg", title: "Lifestyle Portrait", desc: "Natural moments" },
      { id: 26, url: "/images/photo25.jpg", title: "Urban Living", desc: "City life" },
      { id: 27, url: "/images/photo26.jpg", title: "Fashion Lifestyle", desc: "Style & elegance" },
      { id: 28, url: "/images/photo27.jpg", title: "Outdoor Activity", desc: "Active lifestyle" },
      { id: 29, url: "/images/photo28.jpg", title: "Family Moments", desc: "Precious memories" },
      { id: 30, url: "/images/photo40.jpg", title: "Candid Shots", desc: "Authentic captures" },
    ]
  },
  {
    id: "interior",
    name: "Interior Photography",
    slug: "interior",
    description: "Architecture and interior design photography",
    coverImage: "/images/photo31.jpg",
    photos: [
      { id: 31, url: "/images/photo31.jpg", title: "Modern Interior", desc: "Contemporary design" },
      { id: 32, url: "/images/photo32.jpg", title: "Luxury Space", desc: "Premium interiors" },
      { id: 33, url: "/images/photo33.jpg", title: "Hotel Room", desc: "Hospitality design" },
      { id: 34, url: "/images/photo34.jpg", title: "Restaurant Interior", desc: "Dining ambiance" },
      { id: 35, url: "/images/photo35.jpg", title: "Office Space", desc: "Workspace design" },
      { id: 36, url: "/images/photo36.jpg", title: "Residential", desc: "Home interiors" },
    ]
  },
];
