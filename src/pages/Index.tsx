import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, Shield, Wrench, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/ProductCard';
import CategoryCard from '@/components/products/CategoryCard';
import { categories, getFeaturedProducts, getBestsellers, getNewestProducts, brands } from '@/lib/data';
import heroImage from '@/assets/hero-workshop.jpg';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const bestsellers = getBestsellers();
  const newestProducts = getNewestProducts();

  const features = [
    {
      icon: Truck,
      title: 'ارسال رایگان',
      description: 'برای سفارش‌های بالای ۵۰۰ هزار تومان',
    },
    {
      icon: Shield,
      title: 'گارانتی',
      description: 'گارانتی اصالت کالا',
    },
    {
      icon: Wrench,
      title: 'مشاوره تخصصی',
      description: 'راهنمایی حرفه‌ای ابزار',
    },
    {
      icon: Headphones,
      title: 'پشتیبانی ۲۴/۷',
      description: 'همیشه در کنار شما',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="ابزارآلات حرفه‌ای کارگاهی"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <p className="text-primary font-medium uppercase tracking-widest mb-4 animate-fade-up">
              ابزارآلات حرفه‌ای
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide leading-none mb-6 animate-fade-up animation-delay-100">
              ساخته شده برای<br />
              <span className="text-primary">صنعتگران</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg animate-fade-up animation-delay-200">
              ابزار کارگاهی حرفه‌ای طراحی شده برای کسانی که قابلیت اطمینان، 
              دقت و قدرت می‌خواهند. کارگاه شما لایق بهترین است.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/products">
                  مشاهده همه ابزار
                  <ArrowLeft className="h-5 w-5 me-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/category/power-tools">
                  ابزار برقی
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-secondary border-y border-border">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-primary uppercase tracking-widest text-sm mb-2">دسته‌بندی‌ها</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide">خرید بر اساس دسته</h2>
          </div>
          <Link
            to="/products"
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            مشاهده همه دسته‌ها
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary/30 border-y border-border">
        <div className="container py-16 md:py-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-primary uppercase tracking-widest text-sm mb-2">ویژه</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide">محصولات برگزیده</h2>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              مشاهده همه محصولات
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container py-16 md:py-24">
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/30">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="relative p-8 md:p-16">
            <div className="max-w-xl">
              <p className="text-primary font-medium uppercase tracking-widest mb-4">پیشنهاد ویژه</p>
              <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-wide mb-4">
                تا ۳۰٪ تخفیف
              </h2>
              <p className="text-muted-foreground mb-8">
                بزرگترین حراج فصل. ابزار حرفه‌ای با قیمت‌های باورنکردنی.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/products?sale=true">
                  مشاهده تخفیف‌ها
                  <ArrowLeft className="h-5 w-5 me-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newest Products */}
      {newestProducts.length > 0 && (
        <section className="bg-secondary/30 border-y border-border">
          <div className="container py-16 md:py-24">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-primary uppercase tracking-widest text-sm mb-2">تازه‌ها</p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide">جدیدترین محصولات</h2>
              </div>
              <Link
                to="/products?new=true"
                className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              >
                مشاهده همه
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {newestProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bestsellers */}
      <section className="container pb-16 md:pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-primary uppercase tracking-widest text-sm mb-2">محبوب‌ترین</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide">پرفروش‌ترین‌ها</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-12">
          <p className="text-center text-muted-foreground text-sm mb-8">برندهای معتبر</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {brands.map((brand) => (
              <span
                key={brand}
                className="font-heading text-2xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors cursor-pointer"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;