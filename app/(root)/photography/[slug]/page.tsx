import { notFound } from "next/navigation";
import { Metadata } from "next";
import ServicesBanner from "@/modules/services/ui/components/services-banner";
import { CategoryDetailGallery } from "@/modules/photography/ui/components/category-detail-gallery";
import { photographyCategories } from "@/data/photography-categories";



// Generate static params for all categories
// export async function generateStaticParams() {
//   return photographyCategories.map((category) => ({
//     slug: category.slug,
//   }));
// }

// // Generate metadata for each category
// export async function generateMetadata({
//   params,
// }: CategoryPageProps): Promise<Metadata> {
//   const category = photographyCategories.find((cat) => cat.slug === params.slug);

//   if (!category) {
//     return {
//       title: "Category Not Found",
//     };
//   }

//   return {
//     title: `${category.name} | Professional Photography Dubai`,
//     description: `${category.description}. Professional ${category.name.toLowerCase()} services in Dubai and UAE.`,
//     keywords: `${category.name}, Dubai photographer, UAE photography, professional photography`,
//     openGraph: {
//       title: `${category.name} | Professional Photography Dubai`,
//       description: category.description,
//       type: "website",
//       url: `https://dubaifotographer.com/photography/${category.slug}`,
//       images: [
//         {
//           url: category.coverImage,
//           width: 1200,
//           height: 630,
//           alt: category.name,
//         },
//       ],
//     },
//   };
// }

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  const category = photographyCategories.find((cat) => cat.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <ServicesBanner title={category.name} linkText={`photography/${category.slug}`} />
      <CategoryDetailGallery
        categoryName={category.name}
        description={category.description}
        photos={category.photos}
      />
    </>
  );
};

export default CategoryPage;
