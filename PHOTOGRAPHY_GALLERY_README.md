# Category-Based Photography Gallery

## Overview
Your photography gallery has been updated to display photos organized by categories, similar to the reference site (shahid-adam.com).

## Features

### 1. Main Photography Page (`/photography`)
- Displays a grid of photography categories
- Each category card shows:
  - Cover image
  - Category name
  - Description
  - Photo count badge
  - Hover effects with animations
- Categories include:
  - Wedding Photography
  - Event Photography
  - Corporate Photography
  - Food Photography
  - Lifestyle Photography
  - Interior Photography

### 2. Individual Category Pages (`/photography/[slug]`)
- Shows all photos within a specific category
- Masonry grid layout (Pinterest-style)
- Click on any photo to open lightbox
- Features:
  - Back button to return to categories
  - Smooth animations on load
  - Hover effects on each photo
  - Responsive design

### 3. Lightbox Gallery
- Full-screen photo viewer
- Navigation buttons (previous/next)
- Photo counter (e.g., "3 / 12")
- Photo title and description overlay
- Keyboard navigation support
- Click outside to close

## File Structure

```
data/
  └── photography-categories.ts          # Category data and photo organization

modules/photography/ui/
  ├── components/
  │   ├── category-grid.tsx              # Main category grid component
  │   ├── category-detail-gallery.tsx    # Individual category gallery
  │   ├── layougaller.tsx                # Old gallery (kept for reference)
  │   └── maingallery.tsx                # Old gallery component
  └── view/
      └── photography-view.tsx           # Main photography page view

app/(root)/photography/
  ├── page.tsx                           # Main photography page route
  └── [slug]/
      └── page.tsx                       # Dynamic category page route
```

## Adding/Modifying Categories

To add or modify categories, edit `data/photography-categories.ts`:

```typescript
{
  id: "your-category-id",
  name: "Your Category Name",
  slug: "your-category-slug",
  description: "Category description",
  coverImage: "/images/cover-image.jpg",
  photos: [
    { 
      id: 1, 
      url: "/images/photo1.jpg", 
      title: "Photo Title", 
      desc: "Photo description" 
    },
    // Add more photos...
  ]
}
```

## Current Image Mapping

The existing images in `/public/images/` have been organized into categories:

- **Wedding**: wed1.JPG, photo1-5.jpg
- **Event**: photo6-11.jpg
- **Corporate**: photo12-17.jpg
- **Food**: photo18-23.jpg
- **Lifestyle**: photo24-28.jpg, photo40.jpg
- **Interior**: photo31-36.jpg

## Customization

### Changing Grid Layout
Edit `category-grid.tsx` line 39:
```typescript
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
```

### Changing Masonry Columns
Edit `category-detail-gallery.tsx` line 72:
```typescript
<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
```

### Changing Animations
Both components use Framer Motion. Modify the `initial`, `animate`, and `transition` props.

## Responsive Breakpoints

- Mobile: 1 column
- Tablet (sm): 2 columns
- Desktop (lg): 3 columns
- Large Desktop (xl): 4 columns (detail pages only)

## Next Steps

1. **Add Real Images**: Replace the placeholder image mappings with your actual photos
2. **Optimize Images**: Consider using next/image optimization or a CDN
3. **Add More Categories**: Expand beyond the 6 current categories
4. **SEO**: Each category page has dynamic metadata for better SEO
5. **Filters**: Add filtering/sorting options within categories

## Routes

- Main Gallery: `http://localhost:3000/photography`
- Wedding Category: `http://localhost:3000/photography/wedding`
- Event Category: `http://localhost:3000/photography/event`
- Corporate Category: `http://localhost:3000/photography/corporate`
- Food Category: `http://localhost:3000/photography/food`
- Lifestyle Category: `http://localhost:3000/photography/lifestyle`
- Interior Category: `http://localhost:3000/photography/interior`

## Technologies Used

- **Next.js 16**: App Router with dynamic routes
- **Framer Motion**: Smooth animations and transitions
- **Tailwind CSS**: Responsive styling
- **TypeScript**: Type-safe code
- **Lucide React**: Icons for navigation
