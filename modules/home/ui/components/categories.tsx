import Link from 'next/link';
import Image from 'next/image';
import { photographyCategories } from '@/data/photography-categories';

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse by <span className="text-[#d3803c] dark:text-[#e09043]">Category</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse photography portfolio across various categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photographyCategories.map((category) => (
            <Link key={category.id} href={`/photography/${category.slug}`}>
              <div className="group relative overflow-hidden rounded-xl cursor-pointer h-64 shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={category.coverImage}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{category.name}</h3>
                  <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 drop-shadow-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
