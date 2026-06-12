import { Link } from 'react-router-dom';
import { ChevronLeft, Truck, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { formatPrice } from '@/lib/data';

const CheckoutPage = () => {
  const { items, subtotal, clearCart } = useCart();
  const shipping = subtotal > 5000000 ? 0 : 150000;
  const tax = subtotal * 0.09;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'سفارش با موفقیت ثبت شد!', description: 'از خرید شما متشکریم. ایمیل تأیید برای شما ارسال خواهد شد.' });
    clearCart();
  };

  if (items.length === 0) {
    return (<div className="container py-16 text-center"><h1 className="font-heading text-4xl font-bold mb-4">سبد خرید شما خالی است</h1><p className="text-muted-foreground mb-8">برای تکمیل خرید، محصولاتی به سبد خود اضافه کنید.</p><Button asChild><Link to="/products">شروع خرید</Link></Button></div>);
  }

  return (
    <main className="min-h-screen">
      <div className="bg-secondary border-b border-border"><div className="container py-4"><nav className="flex items-center gap-2 text-sm text-muted-foreground"><Link to="/" className="hover:text-foreground">خانه</Link><ChevronLeft className="h-4 w-4" /><span className="text-foreground">تکمیل خرید</span></nav></div></div>
      <div className="container py-8">
        <h1 className="font-heading text-4xl font-bold tracking-wide mb-8">تکمیل خرید</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="font-heading text-xl font-bold mb-4">اطلاعات گیرنده</h2>
                <div className="grid gap-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">نام</Label>
                      <Input id="firstName" placeholder="محمد" className="mt-1 bg-secondary" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">نام خانوادگی</Label>
                      <Input id="lastName" placeholder="احمدی" className="mt-1 bg-secondary" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">آدرس کامل</Label>
                    <Input id="address" placeholder="استان، شهر، خیابان، کوچه، پلاک، واحد" className="mt-1 bg-secondary" required />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="phone">تلفن همراه</Label>
                      <Input id="phone" type="tel" placeholder="۰۹۱۲۳۴۵۶۷۸۹" className="mt-1 bg-secondary" required />
                    </div>
                    <div>
                      <Label htmlFor="email">ایمیل</Label>
                      <Input id="email" type="email" placeholder="example@email.com" className="mt-1 bg-secondary" required />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">کد پستی</Label>
                      <Input id="postalCode" placeholder="۱۲۳۴۵۶۷۸۹۰" className="mt-1 bg-secondary" required />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="font-heading text-xl font-bold mb-4">روش ارسال</h2>
                <RadioGroup defaultValue="standard">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg mb-2"><div className="flex items-center gap-3"><RadioGroupItem value="standard" id="standard" /><Label htmlFor="standard" className="cursor-pointer"><span className="font-medium">ارسال عادی</span><p className="text-sm text-muted-foreground">۵-۷ روز کاری</p></Label></div><span className="font-medium">{shipping === 0 ? 'رایگان' : formatPrice(shipping)}</span></div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg"><div className="flex items-center gap-3"><RadioGroupItem value="express" id="express" /><Label htmlFor="express" className="cursor-pointer"><span className="font-medium">ارسال فوری</span><p className="text-sm text-muted-foreground">۲-۳ روز کاری</p></Label></div><span className="font-medium">{formatPrice(350000)}</span></div>
                </RadioGroup>
              </div>
              <Button variant="hero" size="xl" type="submit" className="w-full"><ShoppingBag className="h-5 w-5 ms-2" />پرداخت - {formatPrice(total)}</Button>
            </form>
          </div>
          <div>
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h2 className="font-heading text-xl font-bold mb-4">خلاصه سفارش</h2>
              <div className="space-y-4 mb-6">{items.map(item => (<div key={item.product.id} className="flex gap-4"><img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded" /><div className="flex-1 min-w-0"><p className="text-sm font-medium truncate">{item.product.name}</p><p className="text-sm text-muted-foreground">تعداد: {item.quantity}</p></div><p className="font-medium">{formatPrice(item.product.price * item.quantity)}</p></div>))}</div>
              <Separator className="my-4" />
              <div className="space-y-2 text-sm"><div className="flex justify-between"><span className="text-muted-foreground">جمع کل</span><span>{formatPrice(subtotal)}</span></div><div className="flex justify-between"><span className="text-muted-foreground">هزینه ارسال</span><span>{shipping === 0 ? 'رایگان' : formatPrice(shipping)}</span></div><div className="flex justify-between"><span className="text-muted-foreground">مالیات</span><span>{formatPrice(tax)}</span></div></div>
              <Separator className="my-4" />
              <div className="flex justify-between font-heading text-xl font-bold"><span>مبلغ نهایی</span><span className="text-primary">{formatPrice(total)}</span></div>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"><Truck className="h-4 w-4" /><span>ارسال رایگان برای سفارش‌های بالای ۵ میلیون تومان</span></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;