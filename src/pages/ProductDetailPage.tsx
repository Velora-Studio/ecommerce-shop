import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '@/components/products/ProductCard';
import { getProductBySlug, getReviewsByProduct, products, formatPrice } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug || '');
  const reviews = product ? getReviewsByProduct(product.id) : [];
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (<div className="container py-16 text-center"><h1 className="font-heading text-4xl font-bold mb-4">محصول پیدا نشد</h1><p className="text-muted-foreground mb-8">محصول مورد نظر شما وجود ندارد.</p><Button asChild><Link to="/products">مشاهده محصولات</Link></Button></div>);
  }

  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const handleAddToCart = () => { addToCart(product, quantity); toast({ title: 'به سبد خرید اضافه شد', description: `${quantity} عدد ${product.name} به سبد خرید اضافه شد` }); };
  const allImages = product.images.length > 0 ? product.images : [product.image];

  return (
    <main className="min-h-screen">
      <div className="bg-secondary border-b border-border"><div className="container py-4"><nav className="flex items-center gap-2 text-sm text-muted-foreground"><Link to="/" className="hover:text-foreground">خانه</Link><ChevronLeft className="h-4 w-4" /><Link to="/products" className="hover:text-foreground">محصولات</Link><ChevronLeft className="h-4 w-4" /><Link to={`/category/${product.category}`} className="hover:text-foreground">{product.category === 'power-tools' ? 'ابزار برقی' : product.category === 'hand-tools' ? 'ابزار دستی' : 'ابزار صنعتی'}</Link><ChevronLeft className="h-4 w-4" /><span className="text-foreground truncate max-w-[200px]">{product.name}</span></nav></div></div>
      <div className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-secondary"><img src={allImages[selectedImage]} alt={product.name} className="w-full h-full object-cover" /></div>
            {allImages.length > 1 && <div className="flex gap-2">{allImages.map((img, i) => (<button key={i} onClick={() => setSelectedImage(i)} className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-primary' : 'border-border hover:border-primary/50'}`}><img src={img} alt="" className="w-full h-full object-cover" /></button>))}</div>}
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.includes('bestseller') && <Badge className="bg-workshop-warning text-primary-foreground">پرفروش</Badge>}
              {discount > 0 && <Badge className="bg-destructive text-destructive-foreground">{discount}٪ تخفیف</Badge>}
              {product.inStock ? <Badge variant="outline" className="border-workshop-success text-workshop-success">موجود</Badge> : <Badge variant="outline" className="border-destructive text-destructive">ناموجود</Badge>}
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">{product.brand}</p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6"><div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-workshop-warning text-workshop-warning' : 'text-muted-foreground'}`} />)}</div><span className="text-sm text-muted-foreground">{product.rating} ({product.reviewCount} نظر)</span></div>
            <div className="flex items-baseline gap-4 mb-6"><span className="font-heading text-4xl font-bold text-primary">{formatPrice(product.price)}</span>{product.originalPrice && <span className="text-xl text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>}</div>
            <p className="text-muted-foreground mb-8">{product.description}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center border border-border rounded-md"><Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="h-4 w-4" /></Button><span className="w-12 text-center font-medium">{quantity}</span><Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}><Plus className="h-4 w-4" /></Button></div>
              <Button variant="hero" size="lg" className="flex-1" onClick={handleAddToCart} disabled={!product.inStock}><ShoppingCart className="h-5 w-5 ms-2" />افزودن به سبد</Button>
              <Button variant="outline" size="icon" className="shrink-0"><Heart className="h-5 w-5" /></Button>
              <Button variant="outline" size="icon" className="shrink-0"><Share2 className="h-5 w-5" /></Button>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 bg-secondary rounded-lg mb-8"><div className="text-center"><Truck className="h-6 w-6 mx-auto mb-2 text-primary" /><p className="text-xs">ارسال رایگان</p></div><div className="text-center"><Shield className="h-6 w-6 mx-auto mb-2 text-primary" /><p className="text-xs">گارانتی</p></div><div className="text-center"><RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" /><p className="text-xs">۳۰ روز مرجوعی</p></div></div>
          </div>
        </div>
        <Tabs defaultValue="specs" className="mt-16">
          <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0"><TabsTrigger value="specs" className="font-heading text-lg font-bold rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">مشخصات</TabsTrigger><TabsTrigger value="features" className="font-heading text-lg font-bold rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">ویژگی‌ها</TabsTrigger><TabsTrigger value="reviews" className="font-heading text-lg font-bold rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">نظرات ({product.reviewCount})</TabsTrigger></TabsList>
          <TabsContent value="specs" className="py-8"><div className="max-w-2xl"><dl className="space-y-4">{Object.entries(product.specifications).map(([key, value]) => (<div key={key} className="flex border-b border-border pb-4"><dt className="w-1/3 text-muted-foreground">{key}</dt><dd className="w-2/3 font-medium">{value}</dd></div>))}</dl></div></TabsContent>
          <TabsContent value="features" className="py-8"><ul className="max-w-2xl space-y-3">{product.features.map((feature, i) => (<li key={i} className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><span>{feature}</span></li>))}</ul></TabsContent>
          <TabsContent value="reviews" className="py-8">{reviews.length === 0 ? <p className="text-muted-foreground">هنوز نظری ثبت نشده. اولین نظر را شما ثبت کنید!</p> : <div className="space-y-6 max-w-2xl">{reviews.map(review => (<div key={review.id} className="border-b border-border pb-6"><div className="flex items-center justify-between mb-2"><div className="flex items-center gap-2"><span className="font-medium">{review.userName}</span>{review.verified && <Badge variant="outline" className="text-xs">تأیید شده</Badge>}</div><span className="text-sm text-muted-foreground">{review.date}</span></div><div className="flex items-center gap-1 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-workshop-warning text-workshop-warning' : 'text-muted-foreground'}`} />)}</div><h4 className="font-medium mb-1">{review.title}</h4><p className="text-muted-foreground text-sm">{review.comment}</p></div>))}</div>}</TabsContent>
        </Tabs>
        {relatedProducts.length > 0 && <section className="mt-16"><h2 className="font-heading text-3xl font-bold mb-8">محصولات مرتبط</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">{relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}</div></section>}
      </div>
    </main>
  );
};

export default ProductDetailPage;