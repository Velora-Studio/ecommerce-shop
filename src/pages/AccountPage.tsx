import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, LogOut, ChevronLeft, MapPin, Trash2, Search, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { formatPrice } from '@/lib/data';
import { toast } from 'sonner';

interface Address {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  postalCode: string;
}

const AccountPage = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    postalCode: ''
  });

  const user = { name: 'محمد احمدی', phone: '۰۹۱۲۳۴۵۶۷۸۹', memberSince: 'دی ۱۴۰۳' };
  const orders = [{ id: 'ORD-001', date: '۱۴۰۳/۱۰/۱۵', status: 'تحویل شده', total: 8500000, items: 3 }, { id: 'ORD-002', date: '۱۴۰۳/۱۰/۱۰', status: 'در حال ارسال', total: 4500000, items: 1 }];

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const newAddress: Address = {
      id: Date.now().toString(),
      ...formData
    };
    setAddresses([...addresses, newAddress]);
    setFormData({ firstName: '', lastName: '', address: '', phone: '', email: '', postalCode: '' });
    setIsDialogOpen(false);
    toast.success('آدرس با موفقیت اضافه شد');
  };

  const handleDeleteAddress = (id: string) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
    toast.success('آدرس حذف شد');
  };

  return (
    <main className="min-h-screen">
      <div className="bg-secondary border-b border-border"><div className="container py-8"><nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4"><Link to="/" className="hover:text-foreground">خانه</Link><ChevronLeft className="h-4 w-4" /><span className="text-foreground">حساب کاربری</span></nav><h1 className="font-heading text-4xl font-bold">حساب کاربری</h1></div></div>
      <div className="container py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-muted-foreground" />
                </div>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-1">
                  <Phone className="h-3 w-3" />
                  {user.phone}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1 px-2">
                <Link to="/account" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                  <Package className="h-5 w-5" />
                  <span className="text-sm">سفارش‌ها</span>
                </Link>
                <Link to="/tracking" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                  <Search className="h-5 w-5" />
                  <span className="text-sm">پیگیری سفارش</span>
                </Link>
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-md text-destructive hover:bg-destructive/10 transition-colors w-full">
                  <LogOut className="h-5 w-5" />
                  <span className="text-sm">خروج</span>
                </button>
              </CardContent>
            </Card>
          </aside>
          <div className="lg:col-span-3">
            <Tabs defaultValue="orders">
              <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 mb-8"><TabsTrigger value="orders" className="font-heading text-lg font-bold rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">سفارش‌ها</TabsTrigger><TabsTrigger value="profile" className="font-heading text-lg font-bold rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">پروفایل</TabsTrigger><TabsTrigger value="addresses" className="font-heading text-lg font-bold rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">آدرس‌ها</TabsTrigger></TabsList>
              <TabsContent value="orders">{orders.length === 0 ? (<div className="text-center py-16"><Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" /><p className="text-muted-foreground mb-4">هنوز سفارشی ثبت نکرده‌اید.</p><Button asChild><Link to="/products">شروع خرید</Link></Button></div>) : (<div className="space-y-4">{orders.map(order => (<Card key={order.id} className="bg-card border-border"><CardContent className="p-6"><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="font-heading text-lg font-bold">{order.id}</p><p className="text-sm text-muted-foreground">ثبت شده در {order.date}</p></div><Badge variant={order.status === 'تحویل شده' ? 'default' : 'secondary'} className={order.status === 'تحویل شده' ? 'bg-workshop-success' : ''}>{order.status}</Badge><div className="text-left"><p className="font-heading text-lg font-bold">{formatPrice(order.total)}</p><p className="text-sm text-muted-foreground">{order.items} قلم</p></div><Button variant="outline" size="sm">مشاهده جزئیات</Button></div></CardContent></Card>))}</div>)}</TabsContent>
              <TabsContent value="profile"><Card className="bg-card border-border"><CardHeader><CardTitle className="font-heading text-xl font-bold">اطلاعات پروفایل</CardTitle></CardHeader><CardContent className="space-y-4"><div className="grid md:grid-cols-2 gap-4"><div><p className="text-sm text-muted-foreground">نام کامل</p><p className="font-medium">{user.name}</p></div><div><p className="text-sm text-muted-foreground">تلفن همراه</p><p className="font-medium">{user.phone}</p></div><div><p className="text-sm text-muted-foreground">عضویت از</p><p className="font-medium">{user.memberSince}</p></div></div><Button variant="outline">ویرایش پروفایل</Button></CardContent></Card></TabsContent>
              <TabsContent value="addresses">
                <Card className="bg-card border-border">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-heading text-xl font-bold">آدرس‌های ذخیره شده</CardTitle>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button>افزودن آدرس جدید</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle className="font-heading text-xl font-bold">افزودن آدرس جدید</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleAddAddress} className="space-y-4 mt-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="firstName">نام</Label>
                              <Input id="firstName" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} placeholder="محمد" className="mt-1" required />
                            </div>
                            <div>
                              <Label htmlFor="lastName">نام خانوادگی</Label>
                              <Input id="lastName" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} placeholder="احمدی" className="mt-1" required />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="address">آدرس کامل</Label>
                            <Input id="address" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} placeholder="استان، شهر، خیابان، کوچه، پلاک" className="mt-1" required />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="phone">تلفن همراه</Label>
                              <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="۰۹۱۲۳۴۵۶۷۸۹" className="mt-1" required />
                            </div>
                            <div>
                              <Label htmlFor="email">ایمیل</Label>
                              <Input id="email" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="example@email.com" className="mt-1" required />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="postalCode">کد پستی</Label>
                            <Input id="postalCode" value={formData.postalCode} onChange={e => setFormData({...formData, postalCode: e.target.value})} placeholder="۱۲۳۴۵۶۷۸۹۰" className="mt-1" required />
                          </div>
                          <Button type="submit" className="w-full">ذخیره آدرس</Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </CardHeader>
                  <CardContent>
                    {addresses.length === 0 ? (
                      <div className="text-center py-8">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">هنوز آدرسی ذخیره نکرده‌اید.</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {addresses.map(addr => (
                          <div key={addr.id} className="p-4 border border-border rounded-lg bg-secondary/50">
                            <div className="flex justify-between items-start">
                              <div className="space-y-1">
                                <p className="font-medium">{addr.firstName} {addr.lastName}</p>
                                <p className="text-sm text-muted-foreground">{addr.address}</p>
                                <p className="text-sm text-muted-foreground">{addr.phone} | {addr.email}</p>
                                <p className="text-sm text-muted-foreground">کد پستی: {addr.postalCode}</p>
                              </div>
                              <Button variant="ghost" size="icon" onClick={() => handleDeleteAddress(addr.id)} className="text-destructive hover:text-destructive">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccountPage;