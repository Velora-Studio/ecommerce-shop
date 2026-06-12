import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Category } from '@/lib/data';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group relative overflow-hidden rounded-lg aspect-[4/3] block"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="font-heading text-3xl font-bold tracking-wide text-foreground mb-2 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {category.description}
        </p>
        <div className="flex items-center gap-2 text-primary text-sm font-medium">
          <span>{category.productCount} محصول</span>
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        </div>
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 border-2 border-transparent rounded-lg transition-colors group-hover:border-primary/50" />
    </Link>
  );
};

export default CategoryCard;