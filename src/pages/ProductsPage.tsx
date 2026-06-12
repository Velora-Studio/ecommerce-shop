import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, Grid, List, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import ProductCard from '@/components/products/ProductCard';
import { products, categories, brands, formatPrice } from '@/lib/data';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 25000000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams.get('category'));
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query));
    }
    if (selectedCategory) result = result.filter(p => p.category === selectedCategory);
    if (selectedBrands.length > 0) result = result.filter(p => selectedBrands.includes(p.brand));
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
    }
    return result;
  }, [searchQuery, selectedCategory, selectedBrands, priceRange, sortBy]);

  const toggleBrand = (brand: string) => setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  const clearFilters = () => { setSelectedBrands([]); setSelectedCategory(null); setPriceRange([0, 25000000]); setSearchQuery(''); setSearchParams({}); };
  const activeFiltersCount = selectedBrands.length + (selectedCategory ? 1 : 0) + (priceRange[0] > 0 || priceRange[1] < 25000000 ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-6">
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-heading text-lg font-bold">دسته‌بندی‌ها<ChevronDown className="h-4 w-4" /></CollapsibleTrigger>
        <CollapsibleContent className="pt-2 space-y-2">
          <Button variant={selectedCategory === null ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setSelectedCategory(null)}>همه محصولات</Button>
          {categories.map(cat => (<Button key={cat.id} variant={selectedCategory === cat.slug ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setSelectedCategory(cat.slug)}>{cat.name}<span className="ms-auto text-muted-foreground text-xs">({cat.productCount})</span></Button>))}
        </CollapsibleContent>
      </Collapsible>
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-heading text-lg font-bold">محدوده قیمت<ChevronDown className="h-4 w-4" /></CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={25000000} step={500000} className="mb-4" />
          <div className="flex items-center justify-between text-sm"><span>{formatPrice(priceRange[0])}</span><span>{formatPrice(priceRange[1])}</span></div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-heading text-lg font-bold">برندها<ChevronDown className="h-4 w-4" /></CollapsibleTrigger>
        <CollapsibleContent className="pt-2 space-y-3">
          {brands.map(brand => (<div key={brand} className="flex items-center space-x-2 space-x-reverse"><Checkbox id={brand} checked={selectedBrands.includes(brand)} onCheckedChange={() => toggleBrand(brand)} /><Label htmlFor={brand} className="text-sm cursor-pointer">{brand}</Label></div>))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );

  return (
    <main className="min-h-screen">
      <div className="bg-secondary border-b border-border">
        <div className="container py-8">
          <nav className="text-sm text-muted-foreground mb-4"><Link to="/" className="hover:text-foreground">خانه</Link><span className="mx-2">/</span><span className="text-foreground">همه محصولات</span></nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">{selectedCategory ? categories.find(c => c.slug === selectedCategory)?.name || 'محصولات' : 'همه محصولات'}</h1>
        </div>
      </div>
      <div className="container py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="جستجوی محصولات..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="ps-10 bg-secondary border-border" />
            </div>
            <Sheet><SheetTrigger asChild><Button variant="outline" className="lg:hidden"><SlidersHorizontal className="h-4 w-4 ms-2" />فیلترها{activeFiltersCount > 0 && <Badge className="mr-2" variant="secondary">{activeFiltersCount}</Badge>}</Button></SheetTrigger><SheetContent side="right" className="w-80 bg-background"><SheetHeader><SheetTitle className="font-heading text-xl font-bold">فیلترها</SheetTitle></SheetHeader><div className="mt-6"><FilterContent /></div></SheetContent></Sheet>
          </div>
          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}><SelectTrigger className="w-[180px] bg-secondary border-border"><SelectValue placeholder="مرتب‌سازی" /></SelectTrigger><SelectContent><SelectItem value="featured">ویژه</SelectItem><SelectItem value="price-low">قیمت: کم به زیاد</SelectItem><SelectItem value="price-high">قیمت: زیاد به کم</SelectItem><SelectItem value="rating">بالاترین امتیاز</SelectItem></SelectContent></Select>
            <div className="hidden md:flex items-center border border-border rounded-md"><Button variant={viewMode === 'grid' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('grid')}><Grid className="h-4 w-4" /></Button><Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('list')}><List className="h-4 w-4" /></Button></div>
          </div>
        </div>
        {activeFiltersCount > 0 && (<div className="flex flex-wrap items-center gap-2 mb-6"><span className="text-sm text-muted-foreground">فیلترهای فعال:</span>{selectedCategory && <Badge variant="secondary" className="gap-1">{categories.find(c => c.slug === selectedCategory)?.name}<X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory(null)} /></Badge>}{selectedBrands.map(brand => <Badge key={brand} variant="secondary" className="gap-1">{brand}<X className="h-3 w-3 cursor-pointer" onClick={() => toggleBrand(brand)} /></Badge>)}<Button variant="ghost" size="sm" onClick={clearFilters} className="text-destructive">پاک کردن همه</Button></div>)}
        <div className="flex gap-8">
          <aside className="hidden lg:block w-64 shrink-0"><FilterContent /></aside>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-4">نمایش {filteredProducts.length} محصول</p>
            {filteredProducts.length === 0 ? (<div className="text-center py-16"><p className="text-muted-foreground mb-4">محصولی با این مشخصات یافت نشد</p><Button onClick={clearFilters}>پاک کردن فیلترها</Button></div>) : (<div className={viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6' : 'space-y-4'}>{filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}</div>)}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;