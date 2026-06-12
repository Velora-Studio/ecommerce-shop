import { Phone, MessageCircle, MapPin, Clock, Mail, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactPage = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/989123456789', '_blank');
  };

  return (
    <div className="container py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">تماس با ما</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          ما همیشه آماده پاسخگویی به سوالات شما هستیم. از طریق راه‌های زیر می‌توانید با ما در ارتباط باشید.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-heading font-bold mb-6">راه‌های ارتباطی</h2>
          
          <Card className="border-border">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">تلفن تماس</h3>
                <p className="text-muted-foreground mb-2">شنبه تا پنج‌شنبه، ۹ صبح تا ۶ عصر</p>
                <a href="tel:02112345678" className="text-primary hover:underline font-medium" dir="ltr">
                  021-1234-5678
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-green-500/10">
                <MessageCircle className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">واتساپ</h3>
                <p className="text-muted-foreground mb-2">پاسخگویی سریع در ساعات کاری</p>
                <Button 
                  variant="outline" 
                  className="border-green-500 text-green-500 hover:bg-green-500/10"
                  onClick={handleWhatsApp}
                >
                  شروع گفتگو در واتساپ
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">ایمیل</h3>
                <p className="text-muted-foreground mb-2">پاسخگویی در کمتر از ۲۴ ساعت</p>
                <a href="mailto:info@abzarsazan.ir" className="text-primary hover:underline font-medium">
                  info@abzarsazan.ir
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-pink-500/10">
                <Instagram className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">اینستاگرام</h3>
                <p className="text-muted-foreground mb-2">ما را در اینستاگرام دنبال کنید</p>
                <a 
                  href="https://instagram.com/abzarsazan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline font-medium"
                >
                  @abzarsazan
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">آدرس فروشگاه</h3>
                <p className="text-muted-foreground mb-2">
                  تهران، خیابان ولیعصر، نرسیده به میدان ونک، پلاک ۱۲۳
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>شنبه تا پنج‌شنبه: ۹ صبح تا ۸ شب</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-heading font-bold mb-6">ارسال پیام</h2>
          <Card className="border-border">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">نام و نام خانوادگی</Label>
                    <Input id="name" placeholder="نام خود را وارد کنید" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">شماره تماس</Label>
                    <Input id="phone" type="tel" placeholder="۰۹۱۲۳۴۵۶۷۸۹" dir="ltr" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input id="email" type="email" placeholder="example@email.com" dir="ltr" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">موضوع</Label>
                  <Input id="subject" placeholder="موضوع پیام خود را وارد کنید" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">پیام</Label>
                  <Textarea 
                    id="message" 
                    placeholder="پیام خود را بنویسید..." 
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  ارسال پیام
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <div>
        <h2 className="text-2xl font-heading font-bold mb-6">موقعیت ما روی نقشه</h2>
        <Card className="border-border overflow-hidden">
          <div className="aspect-[21/9] bg-muted flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9627430803247!2d51.41093631525973!3d35.75895898017422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e064a12d78d7d%3A0x9b0a6f0f3c8c0f0!2sVanak%20Square%2C%20Tehran%2C%20Iran!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="نقشه فروشگاه ابزارسازان"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
