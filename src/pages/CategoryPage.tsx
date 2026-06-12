import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { categories, getProductsByCategory } from '@/lib/data';

const CategoryPage = () => {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);
  const products = slug ? getProductsByCategory(slug) : [];

  if (!category) {
    return (
      <div className="container py-16 text-center">
        <h1 className="font-heading text-4xl font-bold mb-4">دسته‌بندی پیدا نشد</h1>
        <p className="text-muted-foreground mb-8">دسته‌بندی مورد نظر شما وجود ندارد.</p>
        <Link to="/products" className="text-primary hover:underline">
          مشاهده همه محصولات
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="relative h-64 md:h-80">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground">خانه</Link>
              <ChevronLeft className="h-4 w-4" />
              <Link to="/products" className="hover:text-foreground">محصولات</Link>
              <ChevronLeft className="h-4 w-4" />
              <span className="text-foreground">{category.name}</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-wide">{category.name}</h1>
            <p className="text-muted-foreground mt-2 max-w-xl">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Subcategories */}
      <div className="container py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {category.subcategories.map(sub => (
            <Link
              key={sub.id}
              to={`/category/${slug}/${sub.slug}`}
              className="px-4 py-2 rounded-full bg-secondary text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {sub.name}
            </Link>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">محصولی در این دسته‌بندی یافت نشد.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CategoryPage;