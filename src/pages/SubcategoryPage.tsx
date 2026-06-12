import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { getCategoryBySlug, getSubcategoryBySlug, getProductsBySubcategory } from '@/lib/data';

const SubcategoryPage = () => {
  const { categorySlug, subcategorySlug } = useParams();
  const category = categorySlug ? getCategoryBySlug(categorySlug) : null;
  const subcategory = categorySlug && subcategorySlug 
    ? getSubcategoryBySlug(categorySlug, subcategorySlug) 
    : null;
  const products = categorySlug && subcategorySlug 
    ? getProductsBySubcategory(categorySlug, subcategorySlug) 
    : [];

  if (!category || !subcategory) {
    return (
      <div className="container py-16 text-center">
        <h1 className="font-heading text-4xl font-bold mb-4">زیرمجموعه پیدا نشد</h1>
        <p className="text-muted-foreground mb-8">زیرمجموعه مورد نظر شما وجود ندارد.</p>
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
          src={subcategory.image || category.image}
          alt={subcategory.name}
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
              <Link to={`/category/${category.slug}`} className="hover:text-foreground">{category.name}</Link>
              <ChevronLeft className="h-4 w-4" />
              <span className="text-foreground">{subcategory.name}</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-wide">{subcategory.name}</h1>
            <p className="text-muted-foreground mt-2 max-w-xl">{subcategory.description}</p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">محصولی در این زیرمجموعه یافت نشد.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default SubcategoryPage;